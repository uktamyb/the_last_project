import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "./style";

export const Root = () => {
  return (
    <Container>
      <h1>Navbar</h1>
      <h1>Body</h1>
    </Container>
  );
};

export default Root;
