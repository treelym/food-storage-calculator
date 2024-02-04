import { ACTIVITY_LEVELS } from "./constants";

const AddPersonCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="tabs is-toggle is-fullwidth">
          <ul>
            <li className="is-active">
              <a href="#">Male</a>
            </li>
            <li>
              <a href="#">Female</a>
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
              placeholder={0}
              // onChange={handleAgeChange}
              type="number"
              // value={personAge || age}
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

        <button className="button is-success is-fullwidth mt-5">
          Add Person
        </button>
      </div>
    </div>
  );
};

export default AddPersonCard;
