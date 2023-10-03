import * as React from 'react'

import * as Devices from 'react-device-detect'

interface Props {
  fallback: any
  children: any
  credentials?: {
    orgKey: string
    appKey: string
  }
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
    this.setState({ error, errorInfo })

    let agent = 'Unknown'

    if (Devices?.isChrome) agent = 'Chrome'
    if (Devices?.isIE) agent = 'IE'
    if (Devices?.isEdge) agent = 'Edge'
    if (Devices?.isSafari) agent = 'Safari'
    if (Devices?.isFirefox) agent = 'Firefox'

    if (!this.props.credentials) return

    await fetch(`https://api.errorstracer.com/v0.1/registry/react`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        credentials: this.props.credentials,
        error: {
          error: error.message,
          stack: error.stack,
          platform: 'Unknown',
          agent,
          host: typeof window != 'undefined' && window.location.host,
          href: typeof window != 'undefined' && window.location.href
        }
      })
    })
  }

  render(): any {
    if (this.state?.hasError) {
      return this.props.fallback
    }

    return this?.props?.children
  }
}
