import Head from 'next/head'

function SEO({ title = 'Gabriele Pallaoro | Dev' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="description" content="@gallaoro personal website" />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/social-preview.png" />
      <meta property="og:url" content="/" />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@gallaoro" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="@gallaoro personal website" />
      <meta name="twitter:image" content="/social-preview.png" />

      <meta name="robots" content="index, follow" />
    </Head>
  )
}

export default SEO