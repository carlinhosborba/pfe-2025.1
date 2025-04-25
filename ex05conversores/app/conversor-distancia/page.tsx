'use client';
import { useState, useEffect } from 'react';

export default function ConversorDistancia() {
  const [metros, setMetros] = useState('');
  const [pes, setPes] = useState('');
  const [polegadas, setPolegadas] = useState('');
  const [campoAtivo, setCampoAtivo] = useState<'metros' | 'pes' | 'polegadas' | null>(null);

  useEffect(() => {
    if (campoAtivo === 'metros') {
      const m = parseFloat(metros);
      if (!isNaN(m)) {
        setPes((m * 3.281).toString());
        setPolegadas((m * 39.37).toString());
      } else {
        setPes('');
        setPolegadas('');
      }
    }
  }, [metros]);

  useEffect(() => {
    if (campoAtivo === 'pes') {
      const p = parseFloat(pes);
      if (!isNaN(p)) {
        const metrosConvertido = p / 3.281;
        setMetros(metrosConvertido.toString());
        setPolegadas((metrosConvertido * 39.37).toString());
      } else {
        setMetros('');
        setPolegadas('');
      }
    }
  }, [pes]);

  useEffect(() => {
    if (campoAtivo === 'polegadas') {
      const pol = parseFloat(polegadas);
      if (!isNaN(pol)) {
        const metrosConvertido = pol / 39.37;
        setMetros(metrosConvertido.toString());
        setPes((metrosConvertido * 3.281).toString());
      } else {
        setMetros('');
        setPes('');
      }
    }
  }, [polegadas]);

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Conversor de Distância</h1>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Distância em Metros (m)</span>
        <input
          type="text"
          inputMode="decimal"
          className="border border-gray-300 p-2 w-full rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={metros}
          onChange={(e) => {
            setCampoAtivo('metros');
            setMetros(e.target.value);
          }}
          placeholder="Digite em metros"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Distância em Pés (ft)</span>
        <input
          type="text"
          inputMode="decimal"
          className="border border-gray-300 p-2 w-full rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={pes}
          onChange={(e) => {
            setCampoAtivo('pes');
            setPes(e.target.value);
          }}
          placeholder="Digite em pés"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Distância em Polegadas (in)</span>
        <input
          type="text"
          inputMode="decimal"
          className="border border-gray-300 p-2 w-full rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={polegadas}
          onChange={(e) => {
            setCampoAtivo('polegadas');
            setPolegadas(e.target.value);
          }}
          placeholder="Digite em polegadas"
        />
      </label>
    </main>
  );
}
