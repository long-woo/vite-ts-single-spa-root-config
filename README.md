# vite-ts-single-spa-root-config

Create a root config example of single-spa using vite and typescript.

## Development

```sh
pnpm dev
```

## Build

```sh
pnpm build
```

## Issues to be aware of

> The problem still exists, you can use the lower version of vite@3.0.4

- vite v3.2.2+ parses new URL, can't be used normally in the micro frontend?

See [https://github.com/vitejs/vite/issues/10842](https://github.com/vitejs/vite/issues/10842)
