// src/components/ExerciseForm.js
import React, { useState } from 'react';
import '../styles/ExerciseForm.css';

const ExerciseForm = ({ onAddExercise }) => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !duration || !calories) return;
    onAddExercise({ exercise, duration, calories });
    setExercise('');
    setDuration('');
    setCalories('');
  };

  return (
    <form className="exercise-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Exercise (e.g., Running)"
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (minutes)"
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories Burned"
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
// src/components/ExerciseList.js
import React from 'react';
import '../styles/ExerciseList.css';

const ExerciseList = ({ exercises }) => {
  return (
    <div className="exercise-list">
      {exercises.length > 0 ? (
        exercises.map((exercise, index) => (
          <div key={index} className="exercise-item">
            <h4>{exercise.exercise}</h4>
            <p>Duration: {exercise.duration} minutes</p>
            <p>Calories: {exercise.calories}</p>
          </div>
        ))
      ) : (
        <p>No exercises logged yet!</p>
      )}
    </div>
  );
};

export default ExerciseList;


// src/pages/Home.js
import React, { useState } from 'react';
import ExerciseForm from './components/ExerciseForm';
import ExerciseList from './components/ExerciseList';
import '../styles/Home.css';

const Home = () => {
  const [exercises, setExercises] = useState([]);

  const handleAddExercise = (exercise) => {
    setExercises([ ...exercises, exercise ]);
  };

  return (
    <div className="home">
      <h1>Fitness Tracker</h1>
      <ExerciseForm onAddExercise={handleAddExercise} />
      <ExerciseList exercises={exercises} />
    </div>
  );
};

export default Home;
