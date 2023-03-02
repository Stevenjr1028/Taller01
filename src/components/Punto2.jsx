import React from "react";
import { useState } from "react";

const CallCostCalculator = () => {
  const [callDuration, setCallDuration] = useState(0);
  const [callCost, setCallCost] = useState(0);

  const handleDurationChange = (evt) => {
    setCallDuration(parseInt(evt.target.value));
  };

  const calculateCost = () => {
    if (callDuration <= 0) {
      setCallCost(0);
    } else if (callDuration <= 3) {
      setCallCost(100);
    } else {
      const additionalMinutes = callDuration - 3;
      const additionalCost = additionalMinutes * 50;
      setCallCost(100 + additionalCost);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6">Calculadora de costo de llamada telefónica</h2>
      <label className="block mb-2">
        Duración de la llamada en minutos:
        <input
          type="number"
          value={callDuration}
          onChange={(event) => handleDurationChange(event)}
          className=" block w-full px-4 py-2 border border-gray-700 rounded mt-2"
        />
      </label>
      <button
        onClick={() => calculateCost()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Calcular costo
      </button>
      <p className="text-lg font-medium mt-4">
        El costo de la llamada es de: <span className="text-blue-500">{callCost} pesos</span>
      </p>
    </div>
  );
};

export default CallCostCalculator;
