import { ISearchBar } from "../../types";

import React, { useEffect, useState } from "react";
import { peopleLoadDataAction } from "../../redux/peopleSlice";
import { getPeopleData } from "../../api";
import { useAppDispatch, useAppSelector } from "../../hooks";
import People from "../../components/People";
import { debounce } from "lodash";
import { PEOPLE } from "../../api/constants";
import { increasePageValueAction } from "../../redux/paginationSlice";
import SearchBar from "../../components/SearchBar";

const SearchBarContainer = () => {
  const dispatch = useAppDispatch();
  const getSelectedPeople = useAppSelector((state) => state.people.value);

  const [searchValue, setSearchValue] = useState<string>("");

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
    // async function getPeople() {
    //   const { results } = await getPeopleData(
    //     `${process.env.REACT_APP_API_URL}/people/?search=${searchValue}`
    //   );
    //   dispatch(peopleLoadDataAction(results));
    // }
    // getPeople();
  };
  const debouncedHandleTextInputChange = debounce(handleTextInputChange, 500);

  return <SearchBar handleTextInputChange={debouncedHandleTextInputChange} />;
};

export default SearchBarContainer;
