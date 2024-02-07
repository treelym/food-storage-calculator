import { useState } from "react";

function Card({ activityLevel, age, gender, index }) {
  return (
    <div data-test-id="card-container">
      <h2>Person #{index}</h2>
      <div className="card">
        <div className="card-content">
          <p>
            Activity Level: <span>{activityLevel}</span>
          </p>
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

export default Card;
