import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 border-t">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">

        {/* Brand & Mission */}
        <div>
          <img src="/images/logo-finance.jpg" alt="Glodinas Finance" className="h-10 mb-3" />
          <p className="text-gray-600 text-sm">
            Glodinas Finance B.V. biedt boekhouding, loonadministratie en leningsadvies voor particulieren en bedrijven.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2">Bedrijf</h4>
          <ul className="space-y-1">
            <li><Link href="/about">Over Ons</Link></li>
            <li><Link href="/services">Diensten</Link></li>
            <li><Link href="/loans">Leningen</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1">
            <li><Link href="/privacy-policy">Privacyverklaring</Link></li>
            <li><Link href="/terms">Algemene Voorwaarden</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1">
            <li>Glodinas Finance B.V.</li>
            <li><a href="mailto:info@glodinasfinance.nl">info@glodinasfinance.nl</a></li>
            <li>+31 6 45 83 37 89</li>
            <li>KvK: 300077503</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Glodinas Finance B.V. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}