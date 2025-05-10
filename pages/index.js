import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="bg-white py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Uw financiële partner voor boekhouding,<br className="hidden md:block" />
              loonadministratie en financieringsadvies
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Glodinas Finance B.V. biedt ondernemers professionele boekhouding,
              betrouwbare loonadministratie en deskundig advies bij zakelijke leningen.
              Ontdek hoe wij uw financiële processen kunnen vereenvoudigen.
            </p>
            <Link href="/services">
              <a className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700">
                Bekijk diensten
              </a>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <Image
              src="/images/hero.jpg"
              alt="Financieel overzicht"
              width={600}
              height={400}
              className="rounded-lg shadow w-full h-auto"
            />
          </div>
        </div>
      </motion.section>

      {/* Bookkeeping Section */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          <Image src="/images/icon-bookkeeping.jpg" alt="Boekhouding" width={80} height={80} />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Boekhouding</h2>
            <p className="text-gray-700 mb-2">
              Wij verzorgen uw boekhouding met een naadloze integratie in Moneybird. Zo is uw financiële administratie altijd up-to-date en inzichtelijk.
            </p>
            <Link href="/services">
              <a className="text-blue-600 hover:underline font-semibold">Lees meer</a>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Payroll Section */}
      <motion.section
        className="bg-white py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          <Image src="/images/icon-payroll.jpg" alt="Loonadministratie" width={80} height={80} />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Loonadministratie</h2>
            <p className="text-gray-700 mb-2">
              Loonadministratie zonder zorgen. Met Employes zorgen wij voor een foutloze en tijdige verwerking van salarissen.
            </p>
            <Link href="/services">
              <a className="text-blue-600 hover:underline font-semibold">Lees meer</a>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Loan Advisory Section */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          <Image src="/images/icon-loans.jpg" alt="Financieringsadvies" width={80} height={80} />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Financieringsadvies</h2>
            <p className="text-gray-700 mb-2">
              Financieringsadvies op maat. Wij ondersteunen bij zakelijke leningen in samenwerking met ING, ABN AMRO en SNS.
            </p>
            <Link href="/loans">
              <a className="text-blue-600 hover:underline font-semibold">Lees meer</a>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Partner Logos */}
      <motion.section
        className="bg-white py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">Onze partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { src: '/images/moneybird.jpg', alt: 'Moneybird' },
              { src: '/images/employes.jpg', alt: 'Employes' },
              { src: '/images/firm24.jpg', alt: 'Firm24' },
              { src: '/images/ing.jpg', alt: 'ING' },
              { src: '/images/abn-amro.jpg', alt: 'ABN AMRO' },
              { src: '/images/sns.jpg', alt: 'SNS' },
            ].map(({ src, alt }, i) => (
              <Image key={i} src={src} alt={alt} width={120} height={80} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="bg-white py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Waarom kiezen voor Glodinas Finance?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Digitale boekhouding",
                text: "Automatische koppelingen met Moneybird besparen u tijd en fouten.",
              },
              {
                title: "Salaris zonder zorgen",
                text: "Met Employes zorgen wij voor tijdige, foutloze loonverwerking.",
              },
              {
                title: "Onafhankelijk advies",
                text: "Vergelijk hypotheken en zakelijke leningen met betrouwbare partners.",
              },
              {
                title: "Persoonlijke service",
                text: "Altijd een vast aanspreekpunt voor vragen en begeleiding.",
              },
            ].map(({ title, text }, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
                <p className="text-sm text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final Call to Action */}
      <motion.section
        className="bg-blue-600 text-white py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar voor een financieel gezonde toekomst?</h2>
          <p className="text-lg mb-6">Neem vandaag nog contact op voor vrijblijvend advies of een offerte.</p>
          <Link href="/contact">
            <a className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100">
              Contact opnemen
            </a>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
