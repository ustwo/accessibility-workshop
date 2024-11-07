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
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    const firstElement = buttonRefs.current.findIndex((c) => c != null);
    if (buttonRefs.current[firstElement]) {
      buttonRefs.current[firstElement].focus();
    }
    setFormSubmitted(false);
  }, [formSubmitted]);

  const handleInputChange = async (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = async () => {
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    validateForm();
    setFormSubmitted(true);
  };

  const handleFocus = (inputName: keyof typeof inputRefs) => {
    const inputRef = inputRefs[inputName];

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  const handleBlur = () => {
    if (hasErrors) {
      validateForm();
    }
  };

  return (
    <div className="register">
      <Form onSubmit={handleSubmit} noValidate>
        <h1>Sign Up</h1>
        {hasErrors && (
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
            onBlur={() => {
              if (hasErrors) {
                validateForm();
              }
            }}
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
            onBlur={handleBlur}
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
          onBlur={handleBlur}
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
          onBlur={handleBlur}
        />
        <Input
          type="password"
          name="password"
          onChange={handleInputChange}
          isInputValid={!errors.password}
          error={errors.password}
          hint="Must be 5 to 10 digits"
          aria-describedby="password-hint"
          label="Password"
          labelFor="password"
          id="password"
          reference={inputRefs.password}
          onBlur={handleBlur}
        />

        <Button variant="form" type="submit">
          Create Account
        </Button>
        <Agreement />
      </Form>
    </div>
  );
}
