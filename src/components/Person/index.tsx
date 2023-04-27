import { Link } from "react-router-dom";
import { IPerson } from "../../types";

const Person = ({ person }: IPerson) =>
  person.name ? (
    <div className="card">
      <Link to={{ pathname: "/person-details" }} state={{ ...person }}>
        <h3 data-testid="name">{person.name}</h3>
      </Link>
    </div>
  ) : null;

export default Person;
