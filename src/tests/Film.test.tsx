import Film from "../containers/Film";
import { render, screen } from "@testing-library/react";

describe("<Film />", () => {
  test("renders filmName", async () => {
    render(<Film filmsUrl="process.env.REACT_APP_API_URL/films/1/" />);
    expect(await screen.findByText("- A New Hope")).toBeInTheDocument();
  });
});
