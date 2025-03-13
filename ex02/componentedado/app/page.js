"use client";
import { useState } from "react";

export default function Home() {
  const [valorDado, setValorDado] = useState(null);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  };

  const imagens = {
    1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    2: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-2-b.svg",
    3: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-3-b.svg",
    4: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-4-b.svg",
    5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    6: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Dice-6-b.svg",
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 min-h-screen bg-gray-800 text-white">
      {valorDado !== null && (
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <img
            src={imagens[valorDado]}
            alt={`Dado mostrando ${valorDado}`}
            className="w-24 h-24"
          />
        </div>
      )}
      <button
        onClick={rolarDado}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
      >
        Rolar Dado
      </button>
    </div>
  );
}
