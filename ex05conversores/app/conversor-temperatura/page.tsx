'use client';
import { useState, useEffect } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [campoAtivo, setCampoAtivo] = useState<'celsius' | 'fahrenheit' | null>(null);

  useEffect(() => {
    if (campoAtivo === 'celsius') {
      const c = parseFloat(celsius);
      if (!isNaN(c)) {
        setFahrenheit(((c * 9) / 5 + 32).toString());
      } else {
        setFahrenheit('');
      }
    }
  }, [celsius]);

  useEffect(() => {
    if (campoAtivo === 'fahrenheit') {
      const f = parseFloat(fahrenheit);
      if (!isNaN(f)) {
        setCelsius((((f - 32) * 5) / 9).toString());
      } else {
        setCelsius('');
      }
    }
  }, [fahrenheit]);

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Conversor de Temperatura</h1>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Temperatura em Celsius (°C)</span>
        <input
          type="text"
          inputMode="decimal"
          className="border border-gray-300 p-2 w-full rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={celsius}
          onChange={(e) => {
            setCampoAtivo('celsius');
            setCelsius(e.target.value);
          }}
          placeholder="Digite °C"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Temperatura em Fahrenheit (°F)</span>
        <input
          type="text"
          inputMode="decimal"
          className="border border-gray-300 p-2 w-full rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={fahrenheit}
          onChange={(e) => {
            setCampoAtivo('fahrenheit');
            setFahrenheit(e.target.value);
          }}
          placeholder="Digite °F"
        />
      </label>
    </main>
  );
}
