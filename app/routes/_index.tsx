import { Link } from '@remix-run/react';

export default function IndexRoute() {
  return (
    <section>
      <h1>Welcome to the accessibility workshop</h1>
      <ul>
        <li>
          <Link to="/register-v1">Register form without labels</Link>
        </li>
        <li>
          <Link to="/register-v2">
            Register form with labels but them are not accessible
          </Link>
        </li>
        <li>
          <Link to="/register-v3">Register form with accessibility</Link>
        </li>
        <li>
          <Link to="/dashboard-v1">Dashboard</Link>
        </li>
      </ul>
    </section>
  );
}
