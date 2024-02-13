import { useState } from "react";

import "./App.css";
import AddPersonCard from "./AddPersonCard";
import Card from "./Card";

const calorieNeeds = {
  female: {
    2: 1000,
    "3-4": 1400,
    "5-6": 1600,
    "7-9": 1800,
    "10-11": 2000,
    "12-13": 2200,
    "14-30": 2400,
    "31-60": 2200,
    "61+": 2000,
  },
  male: {
    2: 1000,
    3: 1400,
    "4-5": 1600,
    "6-7": 1800,
    "8-9": 2000,
    "10-11": 2200,
    12: 2400,
    13: 2600,
    14: 2800,
    15: 3000,
    "16-18": 3200,
    "19-35": 3000,
    "36-55": 2800,
    "56-75": 2600,
    "76+": 2400,
  },
};

function App() {
  const [people, setPeople] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleSetTotalCalories = (newPerson) => {
    const { age, gender } = newPerson;
    const ageGroups = Object.keys(calorieNeeds[gender]);

    for (const ageGroup of ageGroups) {
      if (ageGroup.includes("-")) {
        const [start, end] = ageGroup.split("-").map(Number);
        if (age >= start && age <= end) {
          const newCaloriesTotal =
            totalCalories + calorieNeeds[gender][ageGroup];
          setTotalCalories(newCaloriesTotal);
          break;
        }
      } else if (ageGroup.includes("+")) {
        const start = parseInt(ageGroup, 10);
        if (age >= start) {
          const newCaloriesTotal =
            totalCalories + calorieNeeds[gender][ageGroup];
          setTotalCalories(newCaloriesTotal);
          break;
        }
      } else {
        if (age === ageGroup) {
          const newCaloriesTotal =
            totalCalories + calorieNeeds[gender][ageGroup];
          setTotalCalories(newCaloriesTotal);
          break;
        }
      }
    }
  };

  const handleAddPerson = (newPersonObj) => {
    const newPerson = {
      activityLevel: newPersonObj.activityLevel,
      age: newPersonObj.age,
      gender: newPersonObj.gender,
      key: people.length + 1,
    };
    setPeople([...people, newPerson]);

    handleSetTotalCalories(newPerson);
  };

  return (
    <div className="container">
      <h1 className="title">Food storage calculator</h1>

      <p>Use the form below to add the people in your home</p>
      <div className="columns is-multiline">
        <div className="column is-one-third">
          <AddPersonCard
            handleAddPerson={handleAddPerson}
            setTotalCalories={setTotalCalories}
          />
        </div>
        <div className="column is-one-third">
          <h2 className="title">Total Calories: {totalCalories}</h2>
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
