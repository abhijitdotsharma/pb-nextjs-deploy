# Pybeam Dashboard

Dashboard built using nextjs-13

## Project Setup

- clone the repo

```
    git clone
```

- cd into the directory

```
    cd py-next
```

- install dependencies

```
    npm install
```

- ensure you have prettier and eslint extension installed in vscode

- In the root of the project, create a `.env.development.local` and `.env.production.local`

```
Copy env variables from .env.sample and seek the values from repo owner
```

[Read this for env in nextjs](https://upmostly.com/next-js/how-to-use-environment-variables-in-your-next-js-app) <br>
tl;dr: <br>`npm run dev` will run with env from `.env.development.local` <br> `npm run build` will run with env from `.env.production.local`

# API Documentation

- POST /api/users/forgotpassword

```
{
  "email": "email@domain.com"
}

For implementation of this API check -> /app/forgotpassword/page.tsx
```

- POST /api/users/resetpassword

```
{
  "token": "token you get on email",
  "newPassword": ""
}

```

- POST /api/users/login <br>

Successful response, logs a user in by saving cookie in application

```
{
  "email": "abhijitdotdev@gmail.com",
  "password": "anything here" // Important, send a dummy password
}
```

- GET /api/user/logout <br>
  This Logs out the current logged in user, and removes the cookie from the application

- POST /api/users/signup/

```
{
  "email": "abhijitdotdev@gmail.com",
  "password": "test"
}

```

An Email is sent, through which the uses add( updates as we kept a dummy password), the password and is verified
