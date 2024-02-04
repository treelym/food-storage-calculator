import { useState } from "react";
import { ACTIVITY_LEVELS } from "./constants";

function Card({ activityLevel, age, gender, index }) {
  const [personAge, setPersonAge] = useState(0);

  const handleAgeChange = (e) => {
    setPersonAge(e.target.value);
  };

  return (
    <div data-test-id="card-container">
      <h2>Person #{index}</h2>
      <div className="card">
        <div className="card-content">
          <div className="field">
            <label className="label">Age</label>
            <div className="control">
              <input
                className="input"
                min="0"
                max="100"
                onChange={handleAgeChange}
                type="number"
                value={personAge || age}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Activity Level</label>
            <div className="select">
              <select>
                {Object.keys(ACTIVITY_LEVEL).map((al) => (
                  <option key={al} value={activityLevel || ACTIVITY_LEVEL[al]}>
                    {ACTIVITY_LEVEL[al]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
