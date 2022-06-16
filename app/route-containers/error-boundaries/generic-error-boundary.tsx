export const GenericErrorBoundary = ({ error }: { error: Error }) => {
  console.error(error)
  return (
    <div>
      <div>
        <h1>An unknown error occured on our side.</h1>
      </div>
    </div>
  )
}
