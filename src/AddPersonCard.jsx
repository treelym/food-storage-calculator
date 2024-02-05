import { useState } from "react";
import { ACTIVITY_LEVELS, GENDER } from "./constants";

const AddPersonCard = ({ onClick }) => {
  const [gender, setGender] = useState(GENDER.MALE);
  const [age, setAge] = useState(0);
  const [activityLevel, setActivityLevel] = useState(ACTIVITY_LEVELS.ACTIVE);

  const isMaleSelected = gender === GENDER.MALE;

  const handleAgeChange = (e) => {
    // TODO: Validation for strings and negative numbers
    setAge(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="tabs is-toggle is-fullwidth">
          <ul>
            <li className={isMaleSelected ? "is-active" : null}>
              <a
                className="button button-male"
                onClick={() => setGender(GENDER.MALE)}
              >
                Male
              </a>
            </li>
            <li className={!isMaleSelected ? "is-active" : null}>
              <a
                className="button button-female"
                onClick={() => setGender(GENDER.FEMALE)}
              >
                Female
              </a>
            </li>
          </ul>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <div className="control">
            <input
              className="input"
              min="0"
              max="100"
              onChange={handleAgeChange}
              type="number"
              value={age}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Activity Level</label>
          <div className="select is-fullwidth">
            <select required>
              {Object.keys(ACTIVITY_LEVELS).map((activityLevel) => {
                const currentActivityLevel = ACTIVITY_LEVELS[activityLevel];
                const displayValue = `${currentActivityLevel[0].toUpperCase()}${currentActivityLevel.slice(
                  1
                )}`;
                return (
                  <option
                    key={currentActivityLevel}
                    value={currentActivityLevel}
                  >
                    {displayValue}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <button
          className="button is-success is-fullwidth mt-5"
          // onClick={() => onClick(gender)}
        >
          Add Person
        </button>
      </div>
    </div>
  );
};

export default AddPersonCard;
