import * as Yup from 'yup';
import { FormEvent, useEffect, useRef, useState } from 'react';

import { Form } from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';

import { Input, links as inputLink } from '../components/Input';
import { Button } from '../components/Button';
import { Select, links as selectLink } from '../components/Select';
import { initialFormValues, schema } from '../utils/validation';
import headerStylesHref from '../styles/register.css?url';
import { Agreement, links as agreementLink } from '../components/Agreement';
import { Card } from '../components/Card';

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

  const inputRefs = {
    firstName: useRef<HTMLInputElement>(null),
    lastName: useRef<HTMLInputElement>(null),
    location: useRef<HTMLSelectElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (buttonRefs.current[0]) {
      buttonRefs.current[0].focus();
    }
  }, [errors]);

  const handleInputChange = async (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
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

  const handleFocus = (inputName: keyof typeof inputRefs) => {
    const inputRef = inputRefs[inputName];

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="register">
      <Form onSubmit={handleSubmit} noValidate>
        <h1>Sign Up</h1>
        {Object.keys(errors).length > 0 && (
          <Card variant="error">
            <fieldset className="errorCard">
              <p>There is a problem</p>
              {Object.keys(errors).map((error, index) => {
                const errorMessage = errors[error as keyof typeof inputRefs];
                return (
                  errorMessage && (
                    <Button
                      type="button"
                      key={error}
                      reference={(el: HTMLButtonElement) =>
                        (buttonRefs.current[index] = el)
                      }
                      variant="errorLink"
                      onClick={() =>
                        handleFocus(error as keyof typeof inputRefs)
                      }
                    >
                      {errorMessage}
                    </Button>
                  )
                );
              })}
            </fieldset>
          </Card>
        )}
        <div>
          <Input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            isInputValid={!errors.firstName}
            error={errors.firstName}
            label="First Name"
            labelFor="firstName"
            id="firstName"
            reference={inputRefs.firstName}
          />
          <Input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            isInputValid={!errors.lastName}
            error={errors.lastName}
            label="Last Name"
            labelFor="lastName"
            id="lastName"
            reference={inputRefs.lastName}
          />
        </div>
        <Input
          type="text"
          name="mobilePhone"
          label="Mobile Phone (Optional)"
          labelFor="mobilePhone"
          id="mobilePhone"
        />
        <Select
          defaultValue={''}
          name="location"
          onChange={handleInputChange}
          isInputValid={!errors.location}
          error={errors.location}
          required
          label="Location"
          labelFor="location"
          id="location"
          reference={inputRefs.location}
        />
        <Input
          type="email"
          name="email"
          onChange={handleInputChange}
          isInputValid={!errors.email}
          error={errors.email}
          label="Email"
          labelFor="email"
          id="email"
          reference={inputRefs.email}
        />
        <Input
          type="password"
          name="password"
          onChange={handleInputChange}
          isInputValid={!errors.password}
          error={errors.password}
          hint="Must be 5 to 10 digits"
          label="Password"
          labelFor="password"
          id="password"
          reference={inputRefs.password}
        />

        <Button variant="form" type="submit">
          Create Account
        </Button>
        <Agreement />
      </Form>
    </div>
  );
}
