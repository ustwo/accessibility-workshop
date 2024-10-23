import { ScrollRestoration, Links, Meta, Scripts } from '@remix-run/react';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <p>Hello world!</p>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
