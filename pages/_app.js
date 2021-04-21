import PlausibleProvider from 'next-plausible'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="gabriele.pallaoro.dev" trackOutboundLinks={ true } >
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
