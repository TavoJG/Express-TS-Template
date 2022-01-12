# Express-TS-Template

## Introduction

This repository contains a generic template for an **ExpressJS** app with **Typescript**, **ESLint** with **Prettier** and **Husky**.

## Project structure

---

There are some folders in this project. This template was designed in order to use a MVC design pattern.

### Lib folder

---

The main code lives on [lib](./lib) folder. Here, you cand find some folders:

- [config](./lib/config): Logger configuration. If you wanna use a DB you can put the config logic here.
- [environments](./lib/environments): This module loads the environment variables.
- [middleware](./lib/middleware): Here you can find default logging and validation middleware. Feel free to add your custom middleware.
- [modules](./lib/modules): Responses module included. Here you add the model logic.
- [routes](./lib/routes): View part of MVC. Declare your paths here.

### Schema folder

---

You can define your API schema on [openapi-yaml](./schema/openapi.yaml). The app has an openapi validator to check requests body.

## How to run it :)

---

On [package.json](./package.json) you can find some predefined commands for typical operations.

```
yarn install ## Install all dependencies
yarn dev ## Starts a server with hot-reload
yarn lint ## Run ESLint
yarn build ## Transpile code to JS
yarn start ## Starts fron transpiled JS code
yarn test ## Run tests with Jest
```

## Testing

---

All the tests suites live on [tests](./tests) folder. If you need some Env variables, you can declare it on [env](./tests/env.js) file

## Something more

---

Feel free to contribute. Have fun!
