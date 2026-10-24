# @x12i/provider-metadata usage example

Pack, open, and normalize one provider metadata record. The same wire object for every provider.

This consuming application demonstrates **pack and recover a provider metadata record** using the published npm package, pinned to `1.2.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- A consumer needs the following capability: Pack, open, and normalize one provider metadata record. The same wire object for every provider.
- A Provider integration needs to reuse the capabilities of @x12i/provider-metadata inside a larger application.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/provider-metadata)
- [Implementation monorepo](https://github.com/x12i/ai-dispatcher-monorepo)
- [Reviewed package source](https://github.com/x12i/ai-dispatcher-monorepo/tree/52fd741d89187c60cf7697d437c9a7f3b486839e/provider-metadata)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
