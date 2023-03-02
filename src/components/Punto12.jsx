import React, { useState } from 'react';

const Notas2 = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = () => {
    const newStudent = {
      name: '',
      grades: [0, 0, 0]
    };
    setStudents([...students, newStudent]);
  };

  const handleNameChange = (index, value) => {
    const newStudents = [...students];
    newStudents[index].name = value;
    setStudents(newStudents);
  };

  const handleGradeChange = (index, gradeIndex, value) => {
    const newStudents = [...students];
    newStudents[index].grades[gradeIndex] = value;
    setStudents(newStudents);
  };

  const calculateAverage = (grades) => {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    const average = sum / grades.length;
    return average >= 3 ? 'Aprobado' : 'Reprobado';
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Estado academico de los estudiantes</h2>
      <button onClick={handleAddStudent}>Agregar estudiante</button>
      {students.map((student, index) => (
        <div key={index}>
          <form>
            <label htmlFor={`name-${index}`} className="block mt-4">
              Nombre del alumno:
            </label>
            <input
              type="text"
              id={`name-${index}`}
              value={student.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              className="border border-gray-400 rounded-md py-2 px-3 mt-1 w-full"
            />

            {student.grades.map((grade, gradeIndex) => (
              <div key={gradeIndex}>
                <label htmlFor={`grade-${index}-${gradeIndex}`} className="block mt-4">
                  Nota {gradeIndex + 1}:
                </label>
                <input
                  type="number"
                  id={`grade-${index}-${gradeIndex}`}
                  min="0"
                  max="5"
                  value={grade}
                  onChange={(e) => handleGradeChange(index, gradeIndex, Number(e.target.value))}
                  className="border border-gray-400 rounded-md py-2 px-3 mt-1 w-full"
                />
              </div>
            ))}
          </form>

          <div className="mt-4">
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p className={`text-xl ${calculateAverage(student.grades) === 'Aprobado' ? 'text-green-500' : 'text-red-500'}`}>
              Estado de la materia: {calculateAverage(student.grades)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notas2;
