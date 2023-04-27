import Person from "../Person";
import { IPeople } from "../../types";
import SearchBar from "../../containers/SearchBar";

const People = ({ people, loadMore }: IPeople) => (
  <div className="char-film-container">
    <div>
      <h2>Star Wars People</h2>
      <SearchBar />
      <div>
        {people.map((person, i) => (
          <Person person={person} key={i} />
        ))}
      </div>
      <div>
        <button className="button-next" type="button" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  </div>
);

export default People;
