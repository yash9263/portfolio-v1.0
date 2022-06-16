import { useCatch } from '@remix-run/react'

export const GenericCatchBoundary = () => {
  const caught = useCatch()
  let message = caught.statusText
  if (typeof caught.data === 'string') {
    message = caught.data
  }

  return (
    <div>
      <div>
        <h1>{message}</h1>
      </div>
    </div>
  )
}
