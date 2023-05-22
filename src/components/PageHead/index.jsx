import Head from 'next/head';

export default function PageHead({ title = 'Zerf - Kickkoff', description = '', image = '' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="canonical" href={PAGE_URL} /> */}

      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="378" />
      <meta property="og:image:height" content="379" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      {/* <meta property="og:url" content={PAGE_URL} /> */}

      <meta name="twitter:card" content="photo" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:url" content={PAGE_URL} /> */}
    </Head>
  );
}
