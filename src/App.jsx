import { useState } from "react";

import "./App.css";
import AddPersonCard from "./AddPersonCard";
import Card from "./Card";
import { ACTIVITY_LEVELS, GENDER } from "./constants";

// const defaultPerson = {
//   gender: GENDER.MALE,
//   age: 0,
//   activityLevel: ACTIVITY_LEVEL.ACTIVE,
//   key: 1,
// };

function App() {
  const [people, setPeople] = useState([]);

  const handleAddPerson = () => {
    const newPerson = { ...defaultPerson, key: people.length + 1 };
    setPeople([...people, newPerson]);
  };

  // const handleClick = () => {
  //   console.log('calculate!');
  // };

  return (
    <div className="container">
      <h1 className="title">Food storage calculator</h1>

      <p>Use the form below to add the people in your home</p>
      <div className="columns is-multiline">
        <div className="column is-one-third">
          <AddPersonCard />
        </div>
        <div
          className="column is-full has-background-white-ter my-5"
          style={{ minHeight: "100vh" }}
        >
          {people.map((person, index) => (
            <div className="column is-multiline is-one-third" key={person.key}>
              <Card
                activityLevel={person.activityLevel}
                age={person.age}
                gender={person.gender}
                index={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
