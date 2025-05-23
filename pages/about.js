import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function About() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('nav.About Us')} - Glodinas Flex Work B.V.</title>
        <meta name="description" content={t('about_meta_description')} />
        <meta name="keywords" content={t('about_meta_keywords')} />
        <meta name="author" content="Glodinas Flex Work B.V." />

        {/* Open Graph */}
        <meta property="og:title" content={`${t('nav.About Us')} - Glodinas Flex Work B.V.`} />
        <meta property="og:description" content={t('about_meta_description')} />
        <meta property="og:image" content="https://glodinasflexwork.nl/images/about-hero.jpg" />
        <meta property="og:url" content="https://glodinasflexwork.nl/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('nav.About Us')} - Glodinas Flex Work B.V.`} />
        <meta name="twitter:description" content={t('about_meta_description')} />
        <meta name="twitter:image" content="https://glodinasflexwork.nl/images/about-hero.jpg" />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/about-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold mb-2">{t('nav.About Us')}</h1>
          <p className="text-lg">{t('about_hero_subheading')}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <Breadcrumb currentPage={t('nav.About Us')} />
      </div>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-center">{t('nav.About Us')}</h2>
        <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
          {t('about_intro')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3">{t('about_our_mission_title')}</h3>
            <p className="mb-4">{t('about_our_mission_text')}</p>

            <h3 className="text-2xl font-semibold mb-3">{t('about_our_vision_title')}</h3>
            <p className="mb-4">{t('about_our_vision_text')}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">{t('about_what_sets_us_apart_title')}</h3>
            <ul className="list-disc pl-5 space-y-2">
              {t('about_differentiators', { returnObjects: true }).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">{t('about_cta_heading')}</h3>
          <p className="mb-6">{t('about_cta_subheading')}</p>
          <Link href="/contact">
            <a className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded">
              {t('contact_us')}
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
