import Species from "../components/Species";
import { render, screen } from "@testing-library/react";

describe("<Species />", () => {
  test("renders speciesName", async () => {
    render(
      <Species speciesUrl={`${process.env.REACT_APP_API_URL}/species/2/`} />
    );
    expect(await screen.findByText("Droid")).toBeInTheDocument();
  });
});
