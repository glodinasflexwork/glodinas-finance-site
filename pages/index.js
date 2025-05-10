import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Glodinas Finance B.V. – Uw financiële partner</title>
        <meta
          name="description"
          content="Glodinas Finance B.V. biedt boekhouding, loonadministratie en leningsadvies met partners als Moneybird, Employes, ING, ABN AMRO en SNS."
        />
        <link rel="canonical" href="https://glodinasfinance.nl/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glodinasfinance.nl/" />
        <meta property="og:title" content="Glodinas Finance B.V. – Uw financiële partner" />
        <meta
          property="og:description"
          content="Volledige boekhouding, loonadministratie en leningsadvies op maat met top partners."
        />
        <meta property="og:image" content="/images/hero.jpg" />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Uw partner in financiën</h1>
          <p className="mb-6 text-lg">
            Boekhouding, loonadministratie en leningsadvies onder één dak.
          </p>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-20 bg-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Onze Partners & Integraties</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center max-w-6xl mx-auto">
          {[
            { src: '/images/moneybird.jpg', alt: 'Moneybird' },
            { src: '/images/employes.jpg', alt: 'Employes' },
            { src: '/images/firm24.jpg', alt: 'Firm24' },
            { src: '/images/ing.jpg', alt: 'ING' },
            { src: '/images/abn-amro.jpg', alt: 'ABN AMRO' },
            { src: '/images/sns.jpg', alt: 'SNS' },
          ].map(({ src, alt }, i) => (
            <div
              key={i}
              className="p-2 bg-gray-50 rounded shadow hover:shadow-md transition duration-300"
            >
              <Image
                src={src}
                alt={alt}
                width={200}
                height={130}
                className="rounded"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}