import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form, json, useActionData } from '@remix-run/react';
import { useEffect, useState } from 'react';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));

  const errors: { email?: string; password?: string } = {};

  if (!email.includes('@')) {
    errors.email = 'Invalid email address';
  }

  if (password.length < 5 || password.length > 10) {
    errors.password = 'Password should be at least 12 characters';
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  return redirect('/');
}

export default function Register() {
  return (
    <div id="register">
      <Signup />
    </div>
  );
}

const Signup = () => {
  const actionData = useActionData<typeof action>();

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  useEffect(() => {
    setIsEmailInvalid(!!actionData?.errors.email);
    setIsPasswordInvalid(!!actionData?.errors.password);
  }, [actionData]);

  return (
    <Form method="post">
      <h1>Sign Up</h1>
      <div>
        <input placeholder="First Name" type="text" name="firstName" />
        <input placeholder="Surname" type="text" name="surname" />
      </div>
      <div>
        <input placeholder="Mobile Phone*" type="text" name="mobilePhone" />
      </div>
      <div>
        <select name="location" defaultValue="">
          <option value="" hidden disabled>
            Location
          </option>
          <option value="london">London</option>
          <option value="lisbon">Lisbon</option>
          <option value="porto">Porto</option>
          <option value="newYork">New York</option>
          <option value="malmo">Malmo</option>
          <option value="tokyo">Tokyo</option>
        </select>
      </div>
      <div>
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={(e) => {
            setIsEmailInvalid(!e.target.value.includes('@'));
          }}
        />
        {isEmailInvalid && (
          <small className="inputErrorMessage">Invalid email address</small>
        )}
      </div>

      <div>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={(e) => {
            setIsPasswordInvalid(
              e.target.value.length < 5 || e.target.value.length > 10
            );
          }}
        />

        {isPasswordInvalid ? (
          <small className="inputErrorMessage">Invalid password length</small>
        ) : (
          <small className="inputHint">Must be 5 to 10 digits</small>
        )}
      </div>

      <button type="submit">Create Account</button>
      <div>
        <p>
          By creating an account, you agree to our
          <a href="terms_and_conditions"> Terms & Conditions</a> and
          <a href="privacy_policy"> Privacy Policy</a>.
        </p>
      </div>
    </Form>
  );
};
