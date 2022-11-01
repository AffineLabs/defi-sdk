# Alpine DeFi SDK

## Pre-requisites

### Foundry

See instructions for installation [here](https://github.com/gakonst/foundry#installation).

### Node

- Install nvm with these [instructions](https://github.com/nvm-sh/nvm#install--update-script). Then run

```sh
nvm use
```

- Install yarn with

```sh
npm install -g yarn
```

- Install the dependencies:

```sh
yarn install
```

## Testing

```sh
yarn build
```

### Configuration

See .env.example for the configuration values you will need.

### Manual Browser Testing

Run `yarn start` and simply modify src/frontend/test.ts to have whatever javascript you'd like to try out.

### Unit/Integration tests

```sh
cd src/core
yarn test
```
