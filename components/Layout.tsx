import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex min-h-screen flex-col gap-16">
      <main className="mb-auto">{children}</main>
    </div>
  )
}
