import { Form } from '@remix-run/react';
import { FormEvent, useState } from 'react';
import { LinksFunction } from '@remix-run/node';
import * as Yup from 'yup';

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
  surname?: string;
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
            placeholder="First Name"
            type="text"
            name="firstName"
            onChange={handleInputChange}
            isInputValid={!errors.firstName}
            error={errors.firstName}
          />
          <Input
            placeholder="Surname"
            type="text"
            name="surname"
            onChange={handleInputChange}
            isInputValid={!errors.surname}
            error={errors.surname}
          />
        </div>
        <Input placeholder="Mobile Phone*" type="text" name="mobilePhone" />
        <Select
          defaultValue={''}
          name="location"
          onChange={handleInputChange}
          isInputValid={!errors.location}
          error={errors.location}
          required
        />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleInputChange}
          isInputValid={!errors.email}
          error={errors.email}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleInputChange}
          isInputValid={!errors.password}
          error={errors.password}
          hint="Must be 5 to 10 digits"
        />

        <Button variant="form" type="submit">
          Create Account
        </Button>
        <Agreement />
      </Form>
    </div>
  );
}
