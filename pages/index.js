import Link from 'next/link';

export default function Home() {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
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
            <img 
              src="/images/hero.jpg" 
              alt="Financieel overzicht" 
              className="w-full h-auto rounded-lg shadow" 
            />
          </div>
        </div>
      </section>

      {/* Bookkeeping Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Boekhouding</h2>
          <p className="text-gray-700 mb-4">
            Wij verzorgen uw boekhouding met een naadloze integratie in Moneybird. 
            Zo is uw financiële administratie altijd up-to-date en inzichtelijk.
          </p>
          <Link href="/services">
            <a className="text-blue-600 hover:underline font-semibold">Lees meer</a>
          </Link>
        </div>
      </section>

      {/* Payroll Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loonadministratie</h2>
          <p className="text-gray-700 mb-4">
            Loonadministratie zonder zorgen. Met Employes zorgen wij voor een foutloze en 
            tijdige verwerking van salarissen.
          </p>
          <Link href="/services">
            <a className="text-blue-600 hover:underline font-semibold">Lees meer</a>
          </Link>
        </div>
      </section>

      {/* Loan Advisory Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financieringsadvies</h2>
          <p className="text-gray-700 mb-4">
            Financieringsadvies op maat. Wij ondersteunen bij zakelijke leningen in samenwerking 
            met ING, ABN AMRO en SNS.
          </p>
          <Link href="/loans">
            <a className="text-blue-600 hover:underline font-semibold">Lees meer</a>
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">Onze partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/images/moneybird.png" alt="Moneybird" className="h-12" />
            <img src="/images/employes.png" alt="Employes" className="h-12" />
            <img src="/images/ing.png" alt="ING" className="h-12" />
            <img src="/images/abn.png" alt="ABN AMRO" className="h-12" />
            <img src="/images/sns.png" alt="SNS Bank" className="h-12" />
          </div>
        </div>
      </section>
    </main>
  );
}