# Alpine DeFi SDK

## Pre-requisites

- Install nvm with these [instructions](https://github.com/nvm-sh/nvm#install--update-script). Alternatively simply install node 16.

- Install yarn with

```sh
npm install -g yarn
```

- Install the dependencies:

```sh
yarn install
```

## Testing

### Configuration

See .env.example and src/core/.env.example for the configuration values you will need.

### Manual Browser Testing

Run `yarn start` and simply modify src/frontend/test.ts to have whatever javascript you'd like to try out.

### Unit/Integration tests

```sh
cd src/core
yarn test
```
