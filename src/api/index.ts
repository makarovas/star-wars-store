import { Error, FilmProp, SpeciesProp, FetchedPersonData } from "../types";

const fetchApi = async (url: string) => {
  const response = await fetch(url)
    .then((result) => result.json())
    .catch((error: Error) => console.log("Error: ", error));
  return response;
};

export const getFilmData = async (url: string) => {
  const filmData: FilmProp = await fetchApi(url);
  return filmData;
};

export const getSpeciesData = async (url: string) => {
  const speciesData: SpeciesProp = await fetchApi(url);
  return speciesData;
};

export const getPeopleData = async (url: string) => {
  const peopleData: FetchedPersonData = await fetchApi(url);
  return peopleData;
};
