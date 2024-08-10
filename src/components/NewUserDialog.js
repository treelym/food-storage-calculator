import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

const NewUserDialog = ({ open }) => (
  <Dialog open={open}>
    <Box sx={{ px: 5 }}>
      <p>Fill out this form ya scrub!</p>
    </Box>
  </Dialog>
);

export default NewUserDialog;
