import React, { useState } from "react";

const DivisionArreglo = () => {
  const [numeros, setNumeros] = useState(
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  );
  const [indice, setIndice] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleIndiceChange = (event) => {
    setIndice(parseInt(event.target.value));
  };

  const dividirArreglo = () => {
    if (isNaN(indice) || indice < 1 || indice > 10) {
      alert("Debe ingresar un índice válido.");
    } else {
      let divisor = numeros[indice - 1];
      let resultados = numeros.map((numero) => numero / divisor);
      setResultados(resultados);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Arreglo de números aleatorios:</h2>
      <p className="mb-4">{numeros.join(", ")}</p>
      <label htmlFor="indice" className="block mb-2">
        Ingrese un índice entre 1 y 10:
      </label>
      <input
        id="indice"
        type="number"
        value={indice}
        onChange={handleIndiceChange}
        className="block border border-gray-400 py-2 px-4 mb-4 rounded-md w-full"
      />
      <button
        onClick={dividirArreglo}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Dividir arreglo
      </button>
      {resultados.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Arreglo resultante:</h2>
          <p>{resultados.join(", ")}</p>
        </div>
      ) : null}
    </div>
  );
};

export default DivisionArreglo;