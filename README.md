# Error Boundary For React

[![NPM](https://img.shields.io/npm/v/@errors-tracer/react.svg)](https://www.npmjs.com/package/@errors-tracer/react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### About

A ReactJs library to catch production errors and track all code issues in an online platform

## Installation

```bash
npm install --save @errors-tracer/react
```

or

```bash
yarn add @errors-tracer/react
```

## Get Started

You can use this library to catch any production errors in your code, you just need to import the `ErrorBoundary` component from `@errors-tracer/react` in your root file of your project and give it a fallback component to be shown whenever there is an error occur.

## Usage

```tsx
import { useEffect } from 'react'
import { ErrorBoundary } from '@errors-tracer/react'

function Example() {
  return (
    <ErrorBoundary fallback={<FallbackComponent />}>
      // your content here
    </ErrorBoundary>
  )
}
```

## Coming Soon

Errors Tracer is an online platform that allows you to manage your apps and gives you a full description about all issues that the error boundary catches internally to let you know the client details like the error, browser name, and many more details to help you solve the issue as fast as you can.

You will be able to create an organization and inside the each organization you can create apps and get the app keys and credentials to put it in your code so you can start tracking your errors.

The platform is under development, for now you can use the error boundary to catch errors only.

## License

MIT © [alsiddigahmed](https://github.com/alsiddigahmed)
