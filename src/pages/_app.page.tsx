import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../lib/react-query"
import { globalStyle } from "@styles/global"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import "../lib/dayjs"
import { DefaultSeo } from "next-seo"

globalStyle()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "pt_BR",
            url: "https://www.call.com.br",
            siteName: "Call",
          }}
        />

        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
