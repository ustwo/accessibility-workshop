import {
  Links,
  ScrollRestoration,
  Meta,
  Outlet,
  Scripts,
} from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';

import appStylesHref from './app.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStylesHref },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=DM Sans',
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
        <Meta />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
