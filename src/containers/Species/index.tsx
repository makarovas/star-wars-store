import { useState, useEffect } from "react";
import { getSpeciesData } from "../../api";
import Species from "../../components/Species";

export type ISpeciesContainer = {
  speciesUrl: string;
};

const SpeciesContainer = ({ speciesUrl }: { speciesUrl: string }) => {
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
