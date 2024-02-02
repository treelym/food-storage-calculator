import { useState } from 'react';

import './App.css';
import Card from './Card';
import { ACTIVITY_LEVEL, GENDER } from './constants';

const defaultPerson = {
  gender: GENDER.MALE,
  age: 0,
  activityLevel: ACTIVITY_LEVEL.ACTIVE,
  key: 1
};

function App() {
  const [people, setPeople] = useState([
    defaultPerson
  ]);

  console.log('people', people);

  const handleAddPerson = () => {
    const newPerson = { ...defaultPerson, key: people.length + 1 };
    setPeople([
      ...people,
      newPerson
    ])
  }

  // const handleClick = () => {
  //   console.log('calculate!');
  // };

  return (
    <div className="container">
      <h1>Food storage calculator</h1>
      <div className="columns is-multiline" data-test-id="card-container">
        {people.map((person, index) => (
          <div className="column is-one-third" key={person.key}>
            <Card
              activityLevel={person.activityLevel}
              age={person.age}
              gender={person.gender}
              index={index + 1}
            />
          </div>
        ))}
        <button className="button" onClick={handleAddPerson}>Add Person</button>
      </div>
    </div>
  );
}

export default App;
