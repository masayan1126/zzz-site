import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const useAgentLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(60);

  const handleLevelChange = (event: SelectChangeEvent<number>) => {
    setSelectedLevel(Number(event.target.value));
  };

  return {
    selectedLevel,
    setSelectedLevel,
    handleLevelChange,
  };
};

export default useAgentLevel;
