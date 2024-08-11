import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  const handleAddPerson = () => {
    setPeople([...people, {}]);
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
            <Box key={index}>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={1}>
                  <IconButton>
                    <DragIndicatorIcon />
                  </IconButton>
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    type="number"
                    value={10}
                    xs={{ width: "100%" }}
                    // onChange={(e) => handleChange(row.id, 'age', e.target.value)}
                  />
                </Grid>

                <Grid item xs={3}>
                  <FormControl fullWidth>
                    <Select
                      value="male"
                      // onChange={(e) => handleChange(row.id, 'gender', e.target.value)}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <Select
                      value="active"
                      // onChange={(e) => handleChange(row.id, 'gender', e.target.value)}
                    >
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="somewhat-active">
                        Somewhat Active
                      </MenuItem>
                      <MenuItem value="inactive">Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={1}>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default PeopleList;
