# Affine Protocol

This repository contains the core SDK for the Affine Protocol.

## Licensing

The primary license for Affine Protocol is the Business Source License 1.1, see [LICENSE](LICENSE).

## Governance

The Protocol currently controls access to these two multi-sig addresses:
Polygon: 0x47C43be6e8B0a171eab00e42226aE2d1cEFC00fB
Ethereum: 0x67Ec3Bb25a5DB6eB7Ba74f6C0b2bA193A3983FB8

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

- Build the typechain files

```sh
yarn build
```

## Testing

### Configuration

See .env.example for the configuration values you will need.

### Manual Browser Testing

Run `yarn start` and simply modify src/frontend/test.ts to have whatever javascript you'd like to try out.

### Unit/Integration tests

```sh
cd src/core
yarn test
```
