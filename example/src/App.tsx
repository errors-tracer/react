import React from 'react'

import { ErrorBoundary } from '@errors-tracer/react'

const App = () => {

  const x: any = null
  return <ErrorBoundary 
    fallback={<div>some error happened</div>} 
    configs={{ appName: "something", appSecret: "something" }}>
      <div> {x.t} hello world</div>
  </ErrorBoundary>
}

export default App
