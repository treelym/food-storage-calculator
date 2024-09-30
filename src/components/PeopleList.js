import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import PersonRow from "./PersonRow";

const PeopleList = () => {
  const [people, setPeople] = useState([
    {
      activityLevel: "",
      age: 0,
      gender: "",
    },
  ]);

  const handleAddPerson = () => {
    setPeople([
      ...people,
      {
        activityLevel: "",
        age: 0,
        gender: "",
      },
    ]);
  };

  return (
    <Box sx={{ mt: 4, px: 5 }}>
      <Tooltip title="Add a person">
        <IconButton onClick={handleAddPerson} sx={{ color: "#3498db" }}>
          <AddIcon sx={{ fontSize: "2.5rem" }} />
        </IconButton>
      </Tooltip>

      {people.length > 0 ? (
        <Box>
          {people.map((person, index) => (
            <PersonRow
              activityLevel={person.activityLevel}
              age={person.age}
              gender={person.gender}
              index={index}
              key={index}
            />
          ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default PeopleList;
