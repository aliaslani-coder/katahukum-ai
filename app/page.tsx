import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">
          Translate Legal & Business Documents
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          🇲🇾 Made For Malaysia — BM ↔ EN Professional Translator
        </p>
        <Link href="/translate" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 inline-block">
          Start Translating → Free
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3">✅ Malaysian Malay Only</h3>
          <p>Strictly Dewan Bahasa & Pustaka standard — never Indonesian.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3">⚖️ Legal Terminology</h3>
          <p>Official legal & business terms — consistent every time.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3">📄 Format Preserved</h3>
          <p>PDF & Word upload — tables, layout, fonts stay intact.</p>
        </div>
      </div>
    </div>
  );
}
