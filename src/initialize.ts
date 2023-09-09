interface Props {
  appKey: string
  appSecret: string
}

export const initialize = (credentials: Props) => {
  fetch(`http://api.errorstracer.com/v0.1/initialize/react/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      credentials
    })
  })
    .then((data: any) => {
      localStorage.setItem('ERRORS_TRACER_TOKEN', data.token)
    })
    .catch(async (err) => {
      console.error(err)
    })
}
