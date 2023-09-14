import * as React from 'react'

import * as Devices from 'react-device-detect'

interface Props {
  fallback: any
  children: any
}

interface State {
  hasError: boolean
  error: any
  errorInfo: any
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false, error: {}, errorInfo: {} }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  async componentDidCatch(error: any, errorInfo: any) {
    let agent = 'Unknown'

    const token = localStorage.getItem('ERRORS_TRACER_TOKEN')

    if (Devices?.isChrome) agent = 'Chrome'
    if (Devices?.isIE) agent = 'IE'
    if (Devices?.isEdge) agent = 'Edge'
    if (Devices?.isSafari) agent = 'Safari'
    if (Devices?.isFirefox) agent = 'Firefox'

    if (!token) return

    await fetch(`http://api.errorstracer.com/v0.1/trace/react`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        credentials: {
          token
        },
        data: {
          error: error.message,
          stack: error.stack,
          platform: 'Unknown',
          agent
        }
      })
    })

    this.setState({ error, errorInfo })
  }

  render(): any {
    if (this.state?.hasError) {
      return this.props.fallback
    }

    return this?.props?.children
  }
}
