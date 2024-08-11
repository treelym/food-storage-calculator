import React from "react";
import Container from "@mui/material/Container";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import PeopleList from "./components/PeopleList";
// import NewUserDialog from "./components/NewUserDialog";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md" sx={{ backgroundColor: "#fff", py: 8 }}>
        <PeopleList />
      </Container>
    </div>
  );
}

export default App;
