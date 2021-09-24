import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Body } from "./style";
import Sidebar from "../components/Sidebar";

export const Root = () => {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Body>Body</Body>
      </Container>
    </Router>
  );
};

export default Root;
