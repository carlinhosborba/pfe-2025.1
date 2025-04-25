import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo ao Conversores App</h1>
      <p>Este aplicativo facilita conversões do dia a dia.</p>
      <nav className="space-y-2">
        <Link className="text-blue-600 underline block" href="/sobre">Sobre o Desenvolvedor</Link>
        <Link className="text-blue-600 underline block" href="/conversor-moeda">Conversor de Moeda</Link>
        <Link className="text-blue-600 underline block" href="/conversor-temperatura">Conversor de Temperatura</Link>
        <Link className="text-blue-600 underline block" href="/conversor-distancia">Conversor de Distância</Link>
      </nav>
    </main>
  );
}
