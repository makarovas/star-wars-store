import Home from "../components/Home";
import { render, screen } from "@testing-library/react";

describe("<Home />", () => {
  test("renders div for home page", () => {
    render(<Home />);
    screen.getByTestId("home");
  });
});
