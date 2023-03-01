import React, { useState } from "react";

const SegundosAHoras = () => {
  const [segundos, setSegundo] = useState(0);
  const [horas, valueHora] = useState(0);
  const [minutos, valueMinuto] = useState(0);
  const [segundosRestantes, valueSegundoRestante] = useState(0);

  const converter = () => {
    valueHora(Math.floor(segundos / 3600));
    valueMinuto(Math.floor((segundos % 3600) / 60));
    valueSegundoRestante(segundos % 60);
  };

  const handleSegundosChange = (evt) => {
    setSegundo(evt.target.value);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8">Conversor de Segundos a: Horas, Minutos y Segundos</h2>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
        <label htmlFor="segundos" className="font-bold text-lg mb-2">Ingrese los segundos:</label>
        <input
          type="number"
          id="segundos"
          value={segundos}
          onChange={(event) => handleSegundosChange(event)}
          className="border border-gray-400 rounded-lg p-2 mb-4 w-full text-lg"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => converter()}
        >
          Hacer conversión
        </button>
        <p className="text-lg">
          {horas} horas, {minutos} minutos y {segundosRestantes} segundos.
        </p>
      </div>
    </div>
  );
};

export default SegundosAHoras;