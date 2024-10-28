# Accessibility Workshop Project

This project is part of an **Accessibility Workshop**, where the main goal is for participants to learn how to identify and improve accessibility issues in a web app. The app starts with poor accessibility, and through a step-by-step approach, attendees will work on implementing enhancements to ensure the app complies with the **European Accessibility Act (EAA)** accessibility guidelines.

Participants will learn how to improve areas such as screen reader support, focus management, color contrast, and more, ultimately making the app accessible to a wider range of users.

## Project Setup

### 1. Clone the Repository

Clone the repository to your local environment using Git (note that the repository is private):

```bash
git clone git@github.com:ustwo/accessibility-workshop.git
cd accessibility-workshop
```

And thats it you are ready start.

### Optional code editor set up

In this project we are using yarn-pnp and zero-imports strategy. So if you face with some strange errors on imports
here is the yarn documentation that should help you to deal with that problem in your code editor. 
https://yarnpkg.com/getting-started/editor-sdks

## Development

From your terminal:

```sh
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/server`
- `build/client`
