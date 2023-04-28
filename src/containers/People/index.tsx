import React, { useEffect, useState } from "react";
import { peopleLoadDataAction } from "../../redux/peopleSlice";
import { getPeopleData } from "../../api";
import { useAppDispatch, useAppSelector } from "../../hooks";
import People from "../../components/People";
import { PEOPLE } from "../../api/constants";
import { increasePageValueAction } from "../../redux/paginationSlice";

const PeopleContainer = () => {
  const getSelectedPeople = useAppSelector((state) => state.people.value);
  const getSelectedPageCount = useAppSelector((state) => state.pagination.page);

  const dispatch = useAppDispatch();
  const loadMore = () => dispatch(increasePageValueAction());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getLoadData() {
      setLoading(true);
      const { results } = await getPeopleData(
        `${process.env.REACT_APP_API_URL}/${PEOPLE}/?page=${getSelectedPageCount}`
      );
      dispatch(peopleLoadDataAction(results));
      setLoading(false);
    }
    getLoadData();
  }, [dispatch, getSelectedPageCount]);

  return (
    <People people={getSelectedPeople} loadMore={loadMore} loading={loading} />
  );
};

export default PeopleContainer;
