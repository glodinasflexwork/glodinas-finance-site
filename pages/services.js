import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';

export default function Services() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Onze Diensten</h1>
          <p className="text-lg text-gray-700">
            Glodinas Finance B.V. ondersteunt ondernemers met complete boekhouding en loonadministratie. Wij werken met slimme software-integraties zodat u zich kunt richten op ondernemen.
          </p>
        </div>
      </motion.section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-2 pb-4">
        <Breadcrumb currentPage="Diensten" />
      </div>

      {/* Boekhouding */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
          <Image src="/images/icon-bookkeeping.jpg" alt="Boekhouding" width={120} height={120} />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Boekhouding</h2>
            <p className="text-gray-700 mb-4">
              Wij verzorgen uw volledige administratie, inclusief btw-aangiftes, jaarrekeningen en financieel advies. Door de koppeling met <strong>Moneybird</strong> heeft u altijd realtime inzicht in uw cijfers.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Automatische factuurverwerking</li>
              <li>Bankkoppelingen en kasstromen</li>
              <li>Overzichtelijke dashboards en rapportages</li>
            </ul>
            <Link href="/contact">
              <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
                Vraag vrijblijvend advies aan
              </a>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Loonadministratie */}
      <motion.section
        className="bg-white py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
          <Image src="/images/icon-payroll.jpg" alt="Loonadministratie" width={120} height={120} />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Loonadministratie</h2>
            <p className="text-gray-700 mb-4">
              Een correcte en tijdige verwerking van salarissen is cruciaal. Met <strong>Employes</strong> automatiseren wij uw loonstroken, jaaropgaven en loonaangiftes — inclusief werknemersportaal.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Online loonstroken voor uw medewerkers</li>
              <li>Automatische loonaangiftes bij de Belastingdienst</li>
              <li>HR-koppelingen en documentbeheer</li>
            </ul>
            <Link href="/contact">
              <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
                Start met loonverwerking
              </a>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-blue-600 text-white py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Meer weten over onze financiële diensten?</h2>
          <p className="mb-6 text-lg">Neem vandaag nog contact met ons op voor een persoonlijk gesprek of offerte.</p>
          <Link href="/contact">
            <a className="bg-white text-blue-600 px-6 py-3 font-semibold rounded hover:bg-gray-100">
              Neem contact op
            </a>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}