import React, { useState } from 'react';

function MatrizTabla({ matriz }) {
  const sumaColumnas = matriz.reduce((total, fila) => {
    fila.forEach((valor, indice) => {
      total[indice] = (total[indice] || 0) + valor;
    });
    return total;
  }, []);

  return (
    <table className="table-auto">
      <tbody>
        {matriz.map((fila, index) => (
          <tr key={index}>
            {fila.map((valor, indice) => (
              <td key={indice} className="border px-4 py-2">{valor}</td>
            ))}
          </tr>
        ))}
        <tr>
          {sumaColumnas.map((suma, indice) => (
            <td key={indice} className="border px-4 py-2"><strong>{suma}</strong></td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

function Appl() {
  const [matriz, setMatriz] = useState([]);

  const generarMatrizAleatoria = () => {
    const n = Math.floor(Math.random() * 5) + 2; // Número aleatorio entre 2 y 6
    const m = Math.floor(Math.random() * 5) + 2; // Número aleatorio entre 2 y 6
    const nuevaMatriz = [];

    for (let i = 0; i < n; i++) {
      const fila = [];
      for (let j = 0; j < m; j++) {
        fila.push(Math.floor(Math.random() * 10) + 1); // Número aleatorio entre 1 y 10
      }
      nuevaMatriz.push(fila);
    }

    setMatriz(nuevaMatriz);
  }

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Suma de Columnas de Matrices</h1>
      {matriz.length > 0 ? (
        <MatrizTabla matriz={matriz} />
      ) : (
        <button onClick={generarMatrizAleatoria} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Generar Matriz Aleatoria
        </button>
      )}
    </div>
  );
}

export default Appl;