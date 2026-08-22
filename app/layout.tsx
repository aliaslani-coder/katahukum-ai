import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KataHukum AI — Malaysia Legal Translator',
  description: 'Tepat. Konsisten. Untuk Malaysia Sahaja.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen`}>
        <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">⚖️ KataHukum AI</h1>
          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/translate" className="hover:text-blue-600">Translate</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-6 text-center mt-20 text-sm">
          <p>© 2026 KataHukum AI — Malaysia Legal & Business Translator</p>
          <p className="text-gray-400 mt-1">Tepat. Konsisten. Untuk Malaysia Sahaja.</p>
        </footer>
      </body>
    </html>
  );
}
