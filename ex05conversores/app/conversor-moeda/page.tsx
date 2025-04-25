'use client';
import { useState, useEffect } from 'react';

export default function ConversorMoeda() {
  const cotacaoDolar = 5.10;

  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');
  const [campoAtivo, setCampoAtivo] = useState<'real' | 'dolar' | null>(null);

  useEffect(() => {
    if (campoAtivo === 'real') {
      const r = parseFloat(real);
      if (!isNaN(r)) {
        setDolar((r / cotacaoDolar).toString());
      } else {
        setDolar('');
      }
    }
  }, [real]);

  useEffect(() => {
    if (campoAtivo === 'dolar') {
      const d = parseFloat(dolar);
      if (!isNaN(d)) {
        setReal((d * cotacaoDolar).toString());
      } else {
        setReal('');
      }
    }
  }, [dolar]);

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Conversor de Dólar e Real</h1>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Valor em Reais (BRL)</span>
        <input
          type="text"
          inputMode="decimal"
          className="border border-gray-300 p-2 w-full rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={real}
          onChange={(e) => {
            setCampoAtivo('real');
            setReal(e.target.value);
          }}
          placeholder="Digite o valor em reais"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Valor em Dólares (USD)</span>
        <input
          type="text"
          inputMode="decimal"
          className="border border-gray-300 p-2 w-full rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={dolar}
          onChange={(e) => {
            setCampoAtivo('dolar');
            setDolar(e.target.value);
          }}
          placeholder="Digite o valor em dólares"
        />
      </label>
    </main>
  );
}
