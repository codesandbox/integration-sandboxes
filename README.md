# Integration Tests Sandboxes

This repository holds all sandboxes that we're currently using for `codesandbox-client` integration tests.

## Motivation

There's a couple of advatages that having all the integration tests sandboxes in this repository offer:

- we completely control them, preventing unexpected deleting or changing of sandboxes that would cause the tests to fail
- the sandboxes work in both production and staging (as opposed to them only working in production before - except the GitHub imported ones)

## Adding a new integration test sandbox

- add the sandbox files in a new folder in the root of this repository
- add the sandbox to the [integration tests](https://github.com/codesandbox/codesandbox-client/blob/master/packages/app/integration-tests/tests/sandboxes.test.js)
- generate the correct sandbox snapshot *(to be documented)*
