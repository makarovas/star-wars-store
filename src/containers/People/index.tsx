import React, { useEffect, useState } from "react";
import { peopleActions } from "../../store/peopleSlice";
import { getPeopleData } from "../../api";
import { useAppDispatch, useAppSelector } from "../../hooks";
import People from "../../components/People";

const PeopleContainer = () => {
  const people = useAppSelector((state) => state.people.value);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    async function getPeople() {
      const personsData = await getPeopleData(
        `${process.env.REACT_APP_API_URL}/people/?search=${searchValue}`
      );
      dispatch(peopleActions(personsData.results));
    }
    getPeople();
  }, [searchValue, dispatch]);

  return (
    <People people={people} handleTextInputChange={handleTextInputChange} />
  );
};

export default PeopleContainer;
