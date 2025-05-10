import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '../components/Breadcrumb';
import { motion } from 'framer-motion';

export default function Loans() {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="relative h-[400px] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-black/50 absolute inset-0 z-0" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold mb-2">Financiering & Leningen</h1>
          <p className="text-lg">Hypotheken en zakelijke financiering met betrouwbare banken.</p>
        </div>
      </motion.section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <Breadcrumb currentPage="Financiering" />
      </div>

      {/* Intro */}
      <motion.section
        className="py-16 px-4 sm:px-6 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Advies op maat voor uw financiële toekomst</h2>
        <p className="text-lg text-gray-700">
          Of u nu een woning wilt kopen of uw onderneming wilt laten groeien, Glodinas Finance B.V. helpt u bij het kiezen van de juiste lening. Wij werken samen met ING, ABN AMRO en SNS Bank om u onafhankelijk en transparant te adviseren.
        </p>
      </motion.section>

      {/* Bank Comparison Table */}
      <motion.section
        className="bg-white py-12 px-4 sm:px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">Vergelijk onze partners</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">Bank</th>
                <th className="p-3">Type lening</th>
                <th className="p-3">Voordelen</th>
                <th className="p-3">Begeleiding via Glodinas</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  bank: 'ING',
                  type: 'Hypotheek, Zakelijke lening',
                  plus: 'Snelle acceptatie, online tools',
                  support: 'Ja, met documentcheck & aanvraaghulp',
                },
                {
                  bank: 'ABN AMRO',
                  type: 'Hypotheek, Starterslening',
                  plus: 'Persoonlijk advies, ook voor zzp’ers',
                  support: 'Ja, inclusief intake met adviseur',
                },
                {
                  bank: 'SNS',
                  type: 'Hypotheek, Verbouwing, Financiering',
                  plus: 'Flexibele voorwaarden & goede rente',
                  support: 'Ja, begeleiding tot aanvraagronding',
                },
              ].map((row, idx) => (
                <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="p-3 font-semibold">{row.bank}</td>
                  <td className="p-3">{row.type}</td>
                  <td className="p-3">{row.plus}</td>
                  <td className="p-3">{row.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Documenten FAQ */}
      <motion.section
        className="bg-gray-50 py-16 px-4 sm:px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">Veelgestelde vragen & benodigdheden</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Welke documenten zijn nodig voor een aanvraag?</h4>
            <p className="text-gray-700 text-sm">
              Identiteitsbewijs, recente loonstroken of jaarcijfers, bankafschriften en een overzicht van uw huidige financiële verplichtingen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Kan ik hulp krijgen bij het invullen van formulieren?</h4>
            <p className="text-gray-700 text-sm">
              Ja, onze adviseurs begeleiden u stap voor stap bij de aanvraag en het contact met de bank.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Is een intakegesprek verplicht?</h4>
            <p className="text-gray-700 text-sm">
              Voor sommige banken is dit vereist. Wij plannen dit direct voor u in zodra u alle documenten heeft aangeleverd.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-blue-600 text-white py-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start vandaag nog met uw aanvraag</h2>
          <p className="mb-6 text-lg">Wij adviseren u graag persoonlijk en onafhankelijk bij uw financieringskeuze.</p>
          <Link href="/contact">
            <a className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100">
              Neem contact op
            </a>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
