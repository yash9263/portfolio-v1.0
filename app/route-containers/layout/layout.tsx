import type { MetaFunction, LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import type { ReactNode } from 'react'
import Navbar from '~/components/navbar'
import { GenericCatchBoundary } from '~/route-containers/error-boundaries/generic-catch-boundary'
import { GenericErrorBoundary } from '~/route-containers/error-boundaries/generic-error-boundary'
import styles from '~/styles/tailwind.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: "yashwant's portfolio",
  viewport: 'width=device-width,initial-scale=1',
})

const Document = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-200">
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

const Root = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export const CatchBoundary = () => {
  return (
    <Document>
      <GenericCatchBoundary />
    </Document>
  )
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <Document>
      <GenericErrorBoundary error={error} />
    </Document>
  )
}

export default Root
