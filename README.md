# React Course App

This React TypeScript Vite project includes:

- Storybook for component documentation and browser-based story tests.
- Atomic Bomb for generating project scaffolding and atomic components.
- Atomic Resources for shared design tokens, fonts, SCSS resources, and generated CSS.
- Vitest for colocated unit tests and Storybook test integration.

## Installation
created a new project with:

```sh
npm vite@latest react-course-app -- --template react-ts
```

## Import shortcut

Use the `@/` shortcut for imports from `src`:

```ts
import App from '@/App'
import '@/resources/styles/main.css'
```

The shortcut is configured in `vite.config.ts` for Vite and in `tsconfig.app.json` for TypeScript:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

## Storybook

Install Storybook for this React Vite project with:

```sh
npx storybook@latest init
```

Storybook is configured in `.storybook/main.ts` with the `@storybook/react-vite` framework. Stories are loaded from `src`:

```ts
../src/**/*.stories.@(js|jsx|mjs|ts|tsx)
```

Start Storybook locally on port `6006` with:

```sh
npm run storybook
```

Build the static Storybook site with:

```sh
npm run build-storybook
```

## Vitest

Vitest is configured in `vite.config.ts` with two test projects:

- `unit` runs colocated unit tests from `src/**/*.test.{ts,tsx}` in `jsdom`.
- `storybook` runs Storybook interaction tests through `@storybook/addon-vitest` with Playwright Chromium.

Run all tests with:

```sh
npm test
```

Run only colocated unit tests with:

```sh
npm run test:unit
```

Run only Storybook tests with:

```sh
npm run test:storybook
```

## Atomic resources

Atomic Resources are a collection of design tokens, fonts, SCSS resources, and the generated `main.css` that can be used across your project. They are designed to be easily integrated into any project and provide a consistent styling foundation.
see: [Atomic Resources documentation](https://atomic-bomb.io/atomic-resources) for more details.
Install the atomic resource files into `src` with:

```sh
npx create-atomic-resources@latest ./src
```

This creates `src/resources`, including design tokens, fonts, SCSS resources, and the generated `main.css`. After changing `src/resources/design/tokens.json` or `src/resources/styles/main.scss`, regenerate the derived files with:

```sh
npm run token
npm run scss
```

The `scss` script is configured with `--no-source-map` so the generated `main.css` can be imported by Storybook without requiring a separate `main.css.map` file.

## Setup atomic bomb

Add [Atomic Bomb](https://atomic-bomb.io) to your project with:

```sh
npx atomic-bomb@latest -p react-ts-vite
```

## Changes since last commit

The starter Vite app has been reduced to a minimal `App` component and the default Vite CSS files were removed:

```txt
src/App.css
src/index.css
```

Storybook now imports the generated global resource CSS from `src/resources/styles/main.css` in `.storybook/preview.tsx`, so stories use the same base styles as the app.

Atomic Bomb component style entry points are enabled in `src/resources/styles/main.scss`:

```scss
@use '../../components/atoms';
@use '../../components/molecules';
@use '../../components/organisms';
@use '../../components/templates';
@use '../../components/pages';
```

The default Storybook example stories and assets were removed from `src/stories`.

The Atomic Bomb component directory structure was added under `src/components`, including barrel exports for atoms, molecules, organisms, templates, and pages.

The `Logo` atom was generated with:

```sh
atomic-bomb --type atom --name Logo
```

This added the `src/components/atoms/Logo` scaffold:

```txt
Logo.tsx
Logo.interface.tsx
Logo.mock.ts
Logo.stories.tsx
Logo.test.tsx
_Logo.style.scss
_index.scss
index.tsx
```

The generated `Logo` files still contain TODO comments for adapting the interface, mock data, story args, test expectations, and component implementation.

A GitHub Actions workflow was added at `.github/workflows/atomic-todo-to-issue.yml` to convert TODO comments into issues on push.
