import { useState } from "react";
import PropTypes from "prop-types";

import { GENDER } from "./constants";

const AddPersonCard = ({ people, setPeople }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);

  const handleAgeChange = (e) => {
    // TODO: Validation for strings and negative numbers
    setAge(Number(e.target.value));
  };

  const handleResetFields = () => {
    setAge(0);
    setGender("");
    setName("");
  };

  const handleAddPerson = (newPersonObj) => {
    const newPerson = {
      name: newPersonObj.name,
      age: newPersonObj.age,
      gender: newPersonObj.gender,
      key: people.length + 1,
    };
    setPeople([...people, newPerson]);
  };

  return (
    <div className="card">
      <div className="card-content">
        <p className="has-text-centered is-size-5 has-text-weight-bold mb-6">
          Use this form to add the people in your household to see your daily
          caloric needs
        </p>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Name (optional)</label>
          </div>
          <div className="field-body">
            <input
              className="input"
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              placeholder="Swim? Swammi? Slippy? Slappy? Swenson? Swanson?"
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Gender</label>
          </div>
          <div className="field-body">
            <div className="select is-expanded">
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value="">Select Gender</option>
                <option value={GENDER.MALE}>Male</option>
                <option value={GENDER.FEMALE}>Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Age</label>
          </div>
          <div className="field-body">
            <div className="control">
              <input
                className="input"
                min="2"
                max="100"
                onChange={handleAgeChange}
                type="number"
                value={age}
              />
            </div>
          </div>
        </div>

        <button
          className="button is-success is-fullwidth mt-5"
          disabled={!gender || !age}
          onClick={() => {
            handleAddPerson({ age, gender, name });
            handleResetFields();
          }}
        >
          <span>Add Person</span>
          <span className="icon">
            <i className="fa fa-plus"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

AddPersonCard.propTypes = {
  people: PropTypes.array.isRequired,
  setPeople: PropTypes.func.isRequired,
};

export default AddPersonCard;
