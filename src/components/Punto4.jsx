import React from "react";
import { useState } from "react";

const SameNumberCounter = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  let [count, valueCount] = useState(0);

  const handleNumber1Change = (evt) => {
    setNumber1(evt.target.value);
  };

  const handleNumber2Change = (evt) => {
    setNumber2(evt.target.value);
  };

  const handleNumber3Change = (evt) => {
    setNumber3(evt.target.value);
  };

  const sameNumber = () => {
    valueCount;
    if (number1 === number2 && number1 === number3) {
      return `${(count = 3)} de los números son iguales `;
    } else if (number1 === number3) {
      return `${(count = 2)} de los números son iguales `;
    } else if (number2 === number3) {
      return `${(count = 2)} de los números son iguales `;
    } else if (number1 === number2) {
      return `${(count = 2)} de los números son iguales `;
    } else {
      return `${(count = 0)} de los números son iguales `;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-5">Numeros Repetidos</h2>
      <div className="flex flex-col space-y-5">
        <label htmlFor="numeros" className="text-lg font-semibold">
          Ingresa el primer número:
        </label>
        <input
          type="number"
          id="numeros"
          value={number1}
          onChange={(event) => handleNumber1Change(event)}
          className="border border-gray-400 p-2 rounded-md"
        />
        <label htmlFor="numeros" className="text-lg font-semibold">
          Ingresa el segundo número:
        </label>
        <input
          type="number"
          id="numeros"
          value={number2}
          onChange={(event) => handleNumber2Change(event)}
          className="border border-gray-400 p-2 rounded-md"
        />
        <label htmlFor="numeros" className="text-lg font-semibold">
          Ingresa el tercer número:
        </label>
        <input
          type="number"
          id="numeros"
          value={number3}
          onChange={(event) => handleNumber3Change(event)}
          className="border border-gray-400 p-2 rounded-md"
        />

        <p className="text-blue-500 font-bold text-xl">{sameNumber()}</p>
      </div>
    </div>
  );
};

export default SameNumberCounter;