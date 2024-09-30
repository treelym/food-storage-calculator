import React, { useState } from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import isPositiveNumber from "../utils/isPositiveNumber";

const PersonRow = ({ activityLevel, age, gender, index }) => {
  const [newAge, setNewAge] = useState(age);
  const [newActivityLevel, setNewActivityLevel] = useState(activityLevel);
  const [newGender, setNewGender] = useState(gender);

  const handleAgeChange = (value) => {
    if (value === "0" || isPositiveNumber(value)) {
      setNewAge(value);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography sx={{ ml: 8 }} variant="h6">
        Person #{index + 1}
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={1}>
          <IconButton>
            <DragIndicatorIcon />
          </IconButton>
        </Grid>

        <Grid item xs={3}>
          <TextField
            type="number"
            value={newAge}
            xs={{ width: "100%" }}
            onChange={(e) => handleAgeChange(e.target.value)}
          />
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            <Select
              value={newGender}
              onChange={(e) => setNewGender(e.target.value)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <Select
              value={newActivityLevel}
              onChange={(e) => setNewActivityLevel(e.target.value)}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="somewhat-active">Somewhat Active</MenuItem>
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
  );
};

export default PersonRow;
