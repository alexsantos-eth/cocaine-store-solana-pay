import { PropsWithChildren } from 'react'

export default function SiteHeading({ children }: PropsWithChildren<{}>) {
  return (
    <h1 className="my-8 self-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-8xl font-extrabold text-transparent">
      {children}
    </h1>
  )
}
