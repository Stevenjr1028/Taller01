import React, { useState } from 'react';

const Notas=()=> {
  const [name, setName] = useState('');
  const [grades, setGrades] = useState({
    grade1: 0,
    grade2: 0,
    grade3: 0,
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGradeChange = (e) => {
    const { name, value } = e.target;
    setGrades({
      ...grades,
      [name]: Number(value),
    });
  };

  const calculateAverage = () => {
    const { grade1, grade2, grade3 } = grades;
    const average = (grade1 + grade2 + grade3) / 3;
    return average >= 3 ? 'Aprobado' : 'Reprobado';
  };

  const isApproved = calculateAverage() === 'Aprobado';

  return (
    <div>
      <h2 className="text-2xl font-bold">Calculadora de notas</h2>
      <form>
        <label htmlFor="name" className="block mt-4">
          Nombre del alumno:
        </label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="border border-gray-400 rounded-md py-2 px-3 mt-1 w-full" />

        <label htmlFor="grade1" className="block mt-4">
          Nota 1:
        </label>
        <input type="number" id="grade1" name="grade1" min="0" max="5" value={grades.grade1} onChange={handleGradeChange} className="border border-gray-400 rounded-md py-2 px-3 mt-1 w-full" />

        <label htmlFor="grade2" className="block mt-4">
          Nota 2:
        </label>
        <input type="number" id="grade2" name="grade2" min="0" max="5" value={grades.grade2} onChange={handleGradeChange} className="border border-gray-400 rounded-md py-2 px-3 mt-1 w-full" />

        <label htmlFor="grade3" className="block mt-4">
          Nota 3:
        </label>
        <input type="number" id="grade3" name="grade3" min="0" max="5" value={grades.grade3} onChange={handleGradeChange} className="border border-gray-400 rounded-md py-2 px-3 mt-1 w-full" />
      </form>

      <div className="mt-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className={`text-xl ${isApproved ? 'text-green-500' : 'text-red-500'}`}>
          Estado de la materia: {calculateAverage()}
        </p>
      </div>
    </div>
  );
}

export default Notas;