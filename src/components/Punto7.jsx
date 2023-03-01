import React, { useState } from 'react';

const AumentoSalario = () => {
  const [salarios, setSalarios] = useState(Array(10).fill(0));
  const [salariosConAumento, setSalariosConAumento] = useState([]);

  const handleSalarioChange = (event, index) => {
    let nuevosSalarios = [...salarios];
    nuevosSalarios[index] = parseFloat(event.target.value);
    setSalarios(nuevosSalarios);
  };

  const imprimirSalariosConAumento = () => {
    let tieneDiezSalarios = salarios.every((salario) => salario !== 0);
    if (tieneDiezSalarios) {
      let salariosConAumento = salarios.map((salario) =>
        (salario * 1.08).toFixed(2)
      );
      setSalariosConAumento(salariosConAumento);
    } else {
      alert('Debe ingresar exactamente 10 salarios.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Aumento de Salarios en un 8%</h2>
      {[...Array(10)].map((_, index) => (
        <div className="mb-4" key={index}>
          <label className="block font-bold mb-2">
            Ingrese salario {index + 1}:
          </label>
          <input
            className="block w-full px-4 py-2 rounded border-gray-400 border focus:border-blue-500 focus:outline-none"
            type="number"
            value={salarios[index]}
            onChange={(event) => handleSalarioChange(event, index)}
          />
        </div>
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={imprimirSalariosConAumento}
      >
        Imprimir salarios con aumento
      </button>
      {salariosConAumento.length > 0 ? (
        <ul className="text-lg font-medium mt-4">
          {salariosConAumento.map((salario, index) => (
            <li key={index}>
              Salario {index + 1}: {salario}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default AumentoSalario;