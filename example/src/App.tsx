import React, { useEffect } from 'react'

import { ErrorBoundary, initialize } from '@errors-tracer/react'
import { Page } from './page'

const App = () => {

  useEffect(() => {
    initialize({
      appKey: 'your_app_key',
      appSecret: 'your_app_secret'
    })
  }, [])

  return <ErrorBoundary 
    fallback={<div>some error happened</div>}>
      <Page />
  </ErrorBoundary>
}

export default App
