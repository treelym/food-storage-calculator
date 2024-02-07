import { useState } from "react";

import "./App.css";
import AddPersonCard from "./AddPersonCard";
import Card from "./Card";

function App() {
  const [people, setPeople] = useState([]);

  console.log("people", people);

  const handleAddPerson = (newPersonObj) => {
    const newPerson = {
      activityLevel: newPersonObj.activityLevel,
      age: newPersonObj.age,
      gender: newPersonObj.gender,
      key: people.length + 1,
    };
    setPeople([...people, newPerson]);
  };

  return (
    <div className="container">
      <h1 className="title">Food storage calculator</h1>

      <p>Use the form below to add the people in your home</p>
      <div className="columns is-multiline">
        <div className="column is-one-third">
          <AddPersonCard handleAddPerson={handleAddPerson} />
        </div>
        <div
          className="column is-full has-background-white-ter my-5"
          style={{ minHeight: "100vh" }}
        >
          <div className="columns is-multiline">
            {people.map((person, index) => (
              <div
                className="column is-multiline is-one-third"
                key={person.key}
              >
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
    </div>
  );
}

export default App;
