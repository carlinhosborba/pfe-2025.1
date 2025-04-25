import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conversores App',
  description: 'App de conversões: moeda, temperatura e distância',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <nav className="flex gap-4 font-medium">
            <Link href="/" className="hover:underline">Início</Link>
            <Link href="/sobre" className="hover:underline">Sobre</Link>
            <Link href="/conversor-moeda" className="hover:underline">Moeda</Link>
            <Link href="/conversor-temperatura" className="hover:underline">Temperatura</Link>
            <Link href="/conversor-distancia" className="hover:underline">Distância</Link>
          </nav>
        </header>

        <main className="max-w-2xl mx-auto mt-6 flex-grow">{children}</main>

        <footer className="bg-blue-100 text-center py-3 mt-12 text-sm text-blue-800">
          © {new Date().getFullYear()} Desenvolvido por Carlos Borba • Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
