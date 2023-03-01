import React, { useState } from 'react';

const NumberList = () => {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState("");

  const handleAddNumber = () => {
    const newNumbers = [...numbers, number];
    setNumber("");
    newNumbers.sort(function(a, b) {
      return a - b;
    });
    setNumbers(newNumbers);
  }

  const onSetNumber = (evt) => {
    setNumber(evt.target.value)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-8">Lista de números ascendentes</h2>
      <div className="flex mb-4">
        <input
          type="number"
          id="numeros"
          value={number}
          onChange={(event) => onSetNumber(event)}
          className="border border-gray-700 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={() => handleAddNumber()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Agregar número
        </button>
      </div>
      <ol>
        {numbers.map((number, index) => (
          <li key={index} className="text-base font-medium">{number}</li>
        ))}
      </ol>
    </div>
  );
}

export default NumberList;