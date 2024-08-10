import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  const handleAddPerson = () => {
    setPeople([...people, {}]);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Tooltip title="Add a person">
        <IconButton onClick={handleAddPerson}>
          <AddIcon />
        </IconButton>
      </Tooltip>

      {people.length > 0 ? (
        <Box>
          <Grid container>
            {people.map((person) => (
              <Grid item xs={12}>
                <p>Yo, dawg</p>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : null}
    </Box>
  );
};

export default PeopleList;
