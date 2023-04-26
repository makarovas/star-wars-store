import { render, screen } from "@testing-library/react";
import Person from "../components/Person";
import { HashRouter as Router } from "react-router-dom";

describe("<Person />", () => {
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
    species: "process.env.REACT_APP_API_URL/species/2/",
    starships: [""],
    url: "process.env.REACT_APP_API_URL/people/2/",
    vehicles: [""],
  };
  test("renders person name", () => {
    render(
      <Router>
        <Person person={person} />
      </Router>
    );
    screen.getByText("C-3PO");
  });
});
