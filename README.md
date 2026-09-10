# Doshii - ESLint Shareable Config

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-doshii.svg
[npm-url]: https://npmjs.org/package/eslint-config-doshii

## An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Standard Style](http://standardjs.com)

This module is an extension and customization of [eslint-config-airbnb](https://github.com/feross/eslint-config-airbnb-base) by AirBnB.

We want to provide a consistent coding standard across Doshii projects, this library extends the standard styling to conform with Doshii's opinion of best practice.

The initial differences are small, such as requiring semi-colons and spacing, but will be increased over time as we tighten the style.

## Install

```bash
yarn add eslint-config-doshii
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Standard Style shareable config, first run this:

```bash
yarn add -D eslint-config-doshii
```

Then, add this to your .eslintrc file:

```json
{
  "extends": ["doshii"]
}
```

_Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## Security

Dependency vulnerabilities are tracked via Wiz. All CVE findings that had a fix within the
current major version have been remediated in `package-lock.json` (no `package.json` range
changes); `npm audit` reports 0 vulnerabilities.

Remediated (lockfile only): `fast-uri` → 3.1.7, `nanoid` → 3.3.18, `browserslist` → 4.28.9,
`postcss` → 8.5.28, `brace-expansion` → 1.1.18, `postcss-selector-parser` (nested) → 7.1.6,
`js-yaml` → 4.3.2, `@babel/plugin-transform-modules-systemjs` → 7.29.8, `@babel/core` → 7.29.7,
`@ungap/structured-clone` → 1.4.0, `colord` → 2.10.0.

### Deferred — require major-version upgrades

The remaining "End-of-Life library" findings need major upgrades and are deferred for a
coordinated major release:

- **ESLint 8 → 9/10.** `eslint@8.57.1` is end-of-life. This upgrade also clears the EOL
  findings for its own dependency tree (`glob` 7, `rimraf` 3, `inflight`,
  `@humanwhocodes/object-schema`, `@humanwhocodes/config-array`). It requires migrating to
  flat config (`eslint.config.js`) — a breaking change to this package and its consumers.
- **Deprecated Babel proposal plugins** (`@babel/plugin-proposal-class-properties`,
  `@babel/plugin-proposal-object-rest-spread`). Replace with the `@babel/plugin-transform-*`
  equivalents (or drop if `@babel/preset-env` covers the targets).

Suggested next step: cut a `8.0.0` major that migrates to ESLint 9 flat config and swaps the
deprecated Babel plugins, clearing all remaining EOL findings in one change.

## License

MIT. Copyright (c) [Doshii Connect Pty Ltd](https://doshii.io).
