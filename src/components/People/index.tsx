import SearchBar from "../SearchBar";
import Person from "../Person";
import { IPeople } from "../../types";

const People = ({ people, handleTextInputChange }: IPeople) => (
  <div className="char-film-container">
    <div>
      <h2>Star Wars People</h2>
      <SearchBar handleTextInputChange={handleTextInputChange} />
      <div>
        {people.map((person, i) => (
          <Person person={person} key={i} />
        ))}
      </div>
    </div>
  </div>
);

export default People;
