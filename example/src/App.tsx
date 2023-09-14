import React from 'react'

import { ErrorBoundary } from '@errors-tracer/react'
import { Page } from './page'

const App = () => {
  return (
    <ErrorBoundary fallback={<div>some error happened</div>}>
      <Page />
    </ErrorBoundary>
  )
}

export default App
