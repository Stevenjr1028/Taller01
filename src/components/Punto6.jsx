import React, { useState } from 'react';

const ImparesMenores = () => {
  const [numero, setNumero] = useState(0);
  const [impares, setImpares] = useState([]);

  const handleNumeroChange = (event) => {
    setNumero(parseInt(event.target.value));
  };

  const imprimirImpares = () => {
    let impares = [];
    for (let i = 1; i < numero; i++) {
      if (i % 2 === 1) {
        impares.push(i);
      }
    }
    setImpares(impares);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Numeros Impares Menores</h2>
      <label className="block mb-2">Ingrese un número:</label>
      <input
        className="border border-gray-400 py-2 px-3 mb-4 rounded-lg w-full"
        type="number"
        value={numero}
        onChange={handleNumeroChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={imprimirImpares}
      >
        Imprimir impares menores
      </button>
      <div className="mt-4">
        {impares.map((impar) => (
          <div key={impar} className="inline-block bg-gray-200 px-2 py-1 rounded-lg m-1">
            {impar}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImparesMenores;