import React, { useState } from 'react';

const Tabla=()=> {
  const [numFilas, setNumFilas] = useState('');
  const [numColumnas, setNumColumnas] = useState('');

  const handleNumFilasChange = (event) => {
    setNumFilas(parseInt(event.target.value));
  };

  const handleNumColumnasChange = (event) => {
    setNumColumnas(parseInt(event.target.value));
  };

  const generarTabla = () => {
    let tabla = [];

    for (let i = 0; i < numColumnas; i++) {
      let columna = [];

      for (let j = 0; j < numFilas; j++) {
        columna.push(<td key={`${i}-${j}`} className="border px-4 py-2">{i + 1}, {j + 1}</td>);
      }

      tabla.push(<tr key={i}>{columna}</tr>);
    }

    return tabla;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Generador de tablas</h2>
        <div className="flex flex-col space-y-4 mb-4">
          <label className="text-lg">Número de columnas:</label>
          <input className="border rounded-md py-2 px-4" type="number" value={numColumnas} onChange={handleNumColumnasChange} />
          <label className="text-lg">Número de filas:</label>
          <input className="border rounded-md py-2 px-4" type="number" value={numFilas} onChange={handleNumFilasChange} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generarTabla}>Generar tabla</button>
        {numFilas && numColumnas ? (
          <table className="table-auto border mt-4">
            <tbody>
              {generarTabla()}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}

export default Tabla;