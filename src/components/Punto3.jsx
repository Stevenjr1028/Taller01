import React from "react";
import { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleTimeChange(evt) {
    setTime(parseInt(evt.target.value));
  }

  function getGreetingMessage() {
    if (time >= 5 && time <= 11) {
      return `Buenos días, ${name}`;
    } else if (time >= 12 && time <= 18) {
      return `Buenas tardes, ${name}`;
    } else {
      return `Buenas noches, ${name}`;
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 px-6 py-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-2">Saludo</h2>

      <div className="mb-4">
        <label htmlFor="nameInput" className="block text-gray-700 font-bold mb-2">Ingresa tu nombre:</label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-400 py-2 px-4 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="timeInput" className="block text-gray-700 font-bold mb-2">Ingresa solo la hora actual (formato 24 horas):</label>
        <input
          id="timeInput"
          type="number"
          value={time}
          onChange={handleTimeChange}
          className="border border-gray-400 py-2 px-4 rounded-md w-full"
        />
      </div>

      {time && (
        <p className="text-blue-500 font-bold text-xl">{getGreetingMessage()}</p>
      )}
    </div>
  );
};

export default Greeting;