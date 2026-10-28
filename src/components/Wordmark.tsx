export function Wordmark({ stacked = false }: { stacked?: boolean }) {
  const dots = (
    <>
      cou<span className="text-berry">.</span>cou<span className="text-berry">.</span>
    </>
  )

  if (stacked) {
    return (
      <>
        <span className="block">{dots}</span>
        <span className="block">lou</span>
      </>
    )
  }

  return (
    <>
      {dots}
      lou
    </>
  )
}
