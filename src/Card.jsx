import PropTypes from "prop-types";

export default function Card({ name, age, gender, index }) {
  return (
    <div data-test-id="card-container">
      <h2>{name ? `${name}` : `Person #${index}`}</h2>
      <div className="card">
        <div className="card-content">
          <p>Name: {name}</p>
          <p>
            Age: <span>{age}</span>
          </p>
          <p>
            Gender: <span>{gender}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string,
  gender: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
