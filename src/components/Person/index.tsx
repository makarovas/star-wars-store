import { Link } from "react-router-dom";
import { IPerson } from "../../types";

const Person = ({ person }: IPerson) => (
  <div className="card">
    <Link to={{ pathname: "/personDetails" }} state={{ ...person }}>
      <h3 data-testid="name">{person.name}</h3>
    </Link>
  </div>
);

export default Person;
