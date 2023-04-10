![](../../actions/workflows/ci.yml/badge.svg)

# Node.js + TypeScript Starter

## Key Features

- [<img src="https://user-images.githubusercontent.com/17180392/211619716-8630ae1a-e5ea-424f-87a6-f3188edae821.svg" height=19.2 align=center /> TypeScript](https://www.typescriptlang.org/)
  - [Environment variables typing](dev.ts)
  - [TypeScript & JavaScript compatibility](https://www.typescriptlang.org/tsconfig#allowJs)
  - [ES Modules & CommonJS compatibility](https://esbuild.github.io/api/#format-commonjs)
- [<img src="https://user-images.githubusercontent.com/124377191/228204788-98a151c8-fc70-4dac-a966-4be6513aafc6.png" height=19.2 align=center /> Node.js](https://nodejs.org/)
  - [Live Reload](https://nodejs.org/en/blog/release/v18.11.0)
  - [Debugging](https://nodejs.org/en/docs/guides/debugging-getting-started)
- [<img src="https://user-images.githubusercontent.com/124377191/228203400-d65b9566-d92e-48b1-9b46-9aa95c05fb21.svg" height=19.2 align=center /> esbuild](https://esbuild.github.io/)
  - [Fast bundling](https://esbuild.github.io/faq/#benchmark-details)
  - [Fast transpiling](https://esbuild.github.io/faq/#benchmark-details)
- [<img src="https://user-images.githubusercontent.com/124377191/228203064-cf898651-9439-45cb-888c-689ca3b41def.svg" height=19.2 align=center /> Rome](https://rome.tools/)
  - [Fast linting](https://github.com/rome/tools/blob/main/benchmark/README.md#linting)
  - [Fast formatting](https://github.com/rome/tools/blob/main/benchmark/README.md#formatting)
  - [Import sorting](https://rome.tools/blog/2022/12/06/rome11/#import-sorting-experimental)
- [<img src="https://user-images.githubusercontent.com/124377191/228447757-78408c15-e914-4fb3-9135-f1ff45ee3fce.svg" height=19.2 align=center /> GitHub](https://github.com)
  - [One click template](https://github.com/dayblox/node-ts/generate)
  - [Continuous integration with dependency caching](.github/workflows/ci.yml)

## Prerequisites

- [<img src="https://user-images.githubusercontent.com/124377191/228203877-9975d517-140a-491d-80f5-9cca049143a6.svg" height=19.2 align=center /> pnpm](https://pnpm.io/installation) `>=7.27.0`
  - [Running multiple scripts in parallel](https://pnpm.io/cli/run#running-multiple-scripts)
  - [Automatic Node.js version management](https://pnpm.io/npmrc#use-node-version)

## Getting Started

1.  **[Use this template](https://github.com/dayblox/node-ts/generate)**

2.  **Clone** the repository

3.  **Install** dependencies

    ```sh
    pnpm i
    ```

4.  Create environment file **`env.ts`** at the root

    ```ts
    export default {
      PORT: 80,
    } as const;
    ```

## Usage

- **Development** mode (**debug**)

  ```sh
  pnpm dev
  ```

- **Production** build

  ```sh
  pnpm build && pnpm start
  ```
