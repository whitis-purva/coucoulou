import { Fragment } from "react"

export function SwashText({ text }: { text: string }) {
  const parts = text.split("&")

  return parts.map((part, index) => (
    <Fragment key={index}>
      {index > 0 ? <span className="swash-amp">&</span> : null}
      {part}
    </Fragment>
  ))
}
