import * as Yup from 'yup';
import { FormEvent, useState } from 'react';

import { Form } from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';

import { Input, links as inputLink } from '../components/Input';
import { Button } from '../components/Button';
import { Select, links as selectLink } from '../components/Select';
import { initialFormValues, schema } from '../utils/validation';
import headerStylesHref from '../styles/register.css?url';
import { Agreement, links as agreementLink } from '../components/Agreement';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: headerStylesHref },
    ...inputLink,
    ...selectLink,
    ...agreementLink,
  ];
};

type formErrorsType = {
  firstName?: string;
  lastName?: string;
  location?: string;
  email?: string;
  password?: string;
};

export default function Register() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState<formErrorsType>({});

  const handleInputChange = async (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    try {
      await schema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await schema.validate(formValues, { abortEarly: false });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: formErrorsType = { ...initialFormValues };

        error.inner.forEach((err) => {
          if (err.path && err.path in validationErrors) {
            validationErrors[err.path as keyof typeof validationErrors] =
              err.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <div className="register">
      <Form onSubmit={handleSubmit} noValidate>
        <h1>Sign Up</h1>
        <div>
          <Input
            placeholder="John"
            type="text"
            name="firstName"
            onChange={handleInputChange}
            isInputValid={!errors.firstName}
            error={errors.firstName}
            label='First Name'
          />
          <Input
            placeholder="Doe"
            type="text"
            name="lastName"
            onChange={handleInputChange}
            isInputValid={!errors.lastName}
            error={errors.lastName}
            label='Last Name'
          />
        </div>
        <Input placeholder="+44 XXXX XXX XXX" type="text" name="mobilePhone" label='Mobile Phone*' />
        <Select
          defaultValue={''}
          name="location"
          onChange={handleInputChange}
          isInputValid={!errors.location}
          error={errors.location}
          required
          label='Location'
        />
        <Input
          placeholder="example@email.com"
          type="email"
          name="email"
          onChange={handleInputChange}
          isInputValid={!errors.email}
          error={errors.email}
          label='Email'
        />
        <Input
          placeholder="Type"
          type="password"
          name="password"
          onChange={handleInputChange}
          isInputValid={!errors.password}
          error={errors.password}
          hint="Must be 5 to 10 digits"
          label="Password"
        />

        <Button variant="form" type="submit">
          Create Account
        </Button>
        <Agreement />
      </Form>
    </div>
  );
}
