import { useState, useEffect } from "react";
import { getFilmData } from "../../api";
import Film from "../../components/Film";
import { IFilmContainer } from "../../types";

const FilmContainer = ({ filmsUrl }: IFilmContainer) => {
  const [filmName, setFilmName] = useState<string>("");

  useEffect(() => {
    async function getFilmName() {
      const filmData = await getFilmData(filmsUrl);
      setFilmName(filmData.title);
    }
    getFilmName();
  }, [filmsUrl]);

  return <Film filmName={filmName} />;
};

export default FilmContainer;
