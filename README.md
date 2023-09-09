# Error Boundary For React

[![NPM](https://img.shields.io/npm/v/@errors-tracer/react.svg)](https://www.npmjs.com/package/@errors-tracer/react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### About

A Reactjs library to catch production errors and track all code issues in an online platform

## Installation

```bash
npm install --save @errors-tracer/react
```

or

```bash
yarn add @errors-tracer/react
```

## Get Started

First you need to create an account at [https://errorstracer.com](errorstracer.com) and follow the steps after creating account to create a project and get the credentials to initialize the app.

## Usage

```tsx
import React, { Component } from 'react'
import { ErrorBoundary, initialize } from '@errors-tracer/react'

function Example() {
  useEffect(() => {
    initialize({
      appKey: 'application key',
      appSecret: 'application secret'
    })
  }, [])

  return (
    <ErrorBoundary fallback={<FallbackComponent />}>
      // your content here
    </ErrorBoundary>
  )
}
```

## License

MIT © [alsiddigahmed](https://github.com/alsiddigahmed)
