import * as React from 'react'

import {
  isIE,
  isChrome,
  isEdge,
  isSafari,
  isFirefox,
} from "react-device-detect";


interface Props {
  fallback: React.ReactNode;
  children: React.ReactNode;
  configs: {
    appName: string;
    appSecret: string;
  }
}

interface State {
  hasError: boolean;
  error: any;
  errorInfo: any
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: {}, errorInfo: {} };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.

    return { hasError: true };
  }

  async componentDidCatch(error: any, errorInfo: any) {
 
    let agent = "Unknown";

    if (isChrome) agent = "Chrome";
    if (isIE) agent = "IE";
    if (isEdge) agent = "Edge";
    if (isSafari) agent = "Safari";
    if (isFirefox) agent = "Firefox";

    await fetch(`http://api.errorstracer.com/v0.1/trace/react`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        credentials: this.props.configs,
        data: {
          error: error.message,
        stack: error.stack,
        platform: "Unknown",
        agent,
        }
      }),
    });

    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state?.hasError) { 
      return this.props.fallback;
    }

    return this?.props?.children;
  }
}

 