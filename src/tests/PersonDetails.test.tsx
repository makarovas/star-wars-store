import PersonDetails from "../components/PersonDetails";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("<PersonDetails />", () => {
  const person = {
    birth_year: "112BBY",
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    eye_color: "yellow",
    films: [
      "process.env.REACT_APP_API_URL/films/1/",
      "process.env.REACT_APP_API_URL/films/2/",
      "process.env.REACT_APP_API_URL/films/3/",
      "process.env.REACT_APP_API_URL/films/4/",
      "process.env.REACT_APP_API_URL/films/5/",
      "process.env.REACT_APP_API_URL/films/6/",
    ],
    gender: "n/a",
    hair_color: "n/a",
    height: "167",
    homeworld: "process.env.REACT_APP_API_URL/planets/1/",
    mass: "75",
    name: "C-3PO",
    skin_color: "gold",
    species: ["process.env.REACT_APP_API_URL/species/2/"],
    starships: [""],
    url: "process.env.REACT_APP_API_URL/people/2/",
    vehicles: [""],
  };

  const renderPersonDetailsComponent = () => {
    return (
      <MemoryRouter
        initialEntries={[{ pathname: "/person-details", state: { person } }]}
      >
        <PersonDetails />
      </MemoryRouter>
    );
  };

  test("renders name", () => {
    render(renderPersonDetailsComponent());
    screen.getByText("C-3PO");
  });

  test("renders birth_year", () => {
    render(renderPersonDetailsComponent());
    screen.getByText("Birth Year: 112BBY");
  });

  test("renders eye_color", () => {
    render(renderPersonDetailsComponent());
    screen.getByText("Eye Color: yellow");
  });

  test("renders height", () => {
    render(renderPersonDetailsComponent());
    screen.getByText("Height: 167 cm");
  });

  test("renders mass", () => {
    render(renderPersonDetailsComponent());
    screen.getByText("Mass: 75 kg");
  });

  test("renders gender", () => {
    render(renderPersonDetailsComponent());
    screen.getByText("Gender: n/a");
  });

  test("renders species", () => {
    render(renderPersonDetailsComponent());
    screen.getByText("Species:");
  });

  test("renders films", () => {
    render(renderPersonDetailsComponent());
    screen.getByText("Films:");
  });
});
