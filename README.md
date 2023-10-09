[![NPM](https://img.shields.io/npm/v/@errors-tracer/react.svg)](https://www.npmjs.com/package/@errors-tracer/react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## React Error Boundary

### About

A library for logging errors remotely in an error logger platform. To get started you need to create a developer account in [errors tracer platform](https://errorstracer.com/) and start monitoring your production errors.

### Installation

```bash
npm install --save @errors-tracer/react
```

or

```bash
yarn add @errors-tracer/react
```

## Usage

You can use the error boundary for each development and production environments to separately monitor your apps.

To get started you need to create an application under your organization and activate it, then go to credentials tab and copy `appKey` and `orgKey` and make sure which environment you are using.

### Development/Production Credentials

Each application has a development and production credentials, the developer might need to setup an env variables in the project and then specify each credentials for the proper env.

### Credentials Object

The credentials object includes two values and you can get them from the platform.

```jsx
{
	orgKey:  'YOUR_ORGANIZATION_KEY',
	appKey:  'YOUR_APPLICATION_KEY'
}
```

It's optional to pass the credentials object depends on which you want to use the library as an error boundary or a remote error logger.

### Additional Data

You can send an additional data object as well, this option will provide you with a better debugging capability and you might get benefits of it for example you can send the username or email to know exactly the user who had the issue.

You can pass anything as an object such as email, phone number, user's first and last names.

```jsx
const additionalData = {
  email: 'customer@email.com'
}
```

### Example

#### Normal React Apps:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ErrorBoundary } from '@errors-tracer/react'

const credentials = {
  orgKey: YOUR_ORGANIZATION_KEY,
  appKey: YOUR_APPLICATION_KEY
}

// you can pass the additionalData prop to the ErrorBoundary

ReactDOM.render(
  <ErrorBoundary additionalData={/*pass your object*/} credentials={credentials} fallback={<FallbackComponent />}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)
```

#### For Next.js Apps:

In your \_app.tsx file import the ErrorBoundary Component from _@errors-tracer/react_

```jsx
import type { AppProps } from 'next/app'
import { ErrorBoundary } from '@errors-tracer/react'

export default function App({ Component, pageProps }: AppProps) {
  const credentials = {
    orgKey: YOUR_ORGANIZATION_KEY,
    appKey: YOUR_APPLICATION_KEY
  }

  return (
    <ErrorBoundary credentials={credentials} fallback={<FallbackComponent />}>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}
```

## License

MIT © [Elsiddig Ahmed](https://github.com/alsiddigahmed)
