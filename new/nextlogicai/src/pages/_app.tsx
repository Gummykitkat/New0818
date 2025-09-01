// pages/_app.tsx
import type { AppProps } from 'next/app'
import '@/styles/globals.css'  // <- this is key (uses tsconfig "paths")

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
