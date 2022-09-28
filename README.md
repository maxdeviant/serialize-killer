# serialize-killer

[![npm](https://img.shields.io/npm/v/serialize-killer.svg?maxAge=3600)](https://www.npmjs.com/package/serialize-killer)

`serialize-killer` will make your objects unserializable.

You might want to use this if you have sensitive data that you don't want to accidentally get leaked over the wire.

## Installation

#### Yarn

```sh
yarn add serialize-killer
```

#### npm

```sh
npm install serialize-killer
```

## Usage

```ts
import { unserializable } from 'serialize-killer';

JSON.stringify({
  sanity: unserializable(),
  ssn: '555-55-5555',
  creditCard: '4242 4242 4242 4242',
});
```
