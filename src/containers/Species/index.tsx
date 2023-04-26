import { useState, useEffect } from "react";
import { getSpeciesData } from "../../api";
import Species from "../../components/Species";
import { ISpeciesContainer } from "../../types";

const SpeciesContainer = ({ speciesUrl }: ISpeciesContainer) => {
  const [speciesName, setSpeciesName] = useState<string>("");

  useEffect(() => {
    async function getSpeciesName() {
      const speciesData = await getSpeciesData(speciesUrl);
      setSpeciesName(speciesData.name);
    }
    getSpeciesName();
  }, [speciesUrl]);

  return <Species speciesUrl={speciesName} />;
};

export default SpeciesContainer;
