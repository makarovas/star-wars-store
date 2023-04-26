import { render, screen } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import Navigation from "../components/Navigation";

describe("<Navigation />", () => {
  test("renders home header link", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    screen.getByText("Home");
  });

  test("renders people header link", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    screen.getByText("People");
  });
});
