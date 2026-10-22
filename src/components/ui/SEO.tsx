const origin = 'https://wikenportfolio.vercel.app';

export function SEO({ title, description, path = '/' }: { title: string; description: string; path?: string }) {
  const canonical = `${origin}${path}`;
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Trần Quốc Tuấn',
    alternateName: 'Wiken',
    jobTitle: 'Frontend Developer',
    email: 'mailto:Wiken2k3@gmail.com',
    url: origin,
    sameAs: ['https://github.com/Wiken2k3', 'https://www.linkedin.com/in/wiken2k3/', 'https://www.facebook.com/Wiken2k3/'],
  };
  return <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Wiken" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={`${origin}/og-image.jpg`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <script type="application/ld+json">{JSON.stringify(person)}</script>
  </>;
}
