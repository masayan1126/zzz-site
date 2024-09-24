import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const useAgentCoreSkillLevel = () => {
  const [selectedCoreSkillLevel, setSelectedCoreSkillLevel] =
    useState<string>("");

  const [selectedNormalAttackSkillLevel, setSelectedNormalAttackSkillLevel] =
    useState<number>(1);

  const [selectedAvoidanceSkillLevel, setSelectedAvoidanceSkillLevel] =
    useState<number>(1);

  const [selectedSupportSkillLevel, setSelectedSupportSkillLevel] =
    useState<number>(1);

  const [selectedSpecialSkillLevel, setSelectedSpecialSkillLevel] =
    useState<number>(1);

  const [selectedCollaborationSkillLevel, setSelectedCollaborationSkillLevel] =
    useState<number>(1);

  const handleSelectedCoreSkillLevel = (event: SelectChangeEvent<string>) => {
    setSelectedCoreSkillLevel(event.target.value);
  };

  const handleSelectedNormalAttackSkillLevel = (
    event: SelectChangeEvent<string>
  ) => {
    setSelectedNormalAttackSkillLevel(Number(event.target.value));
  };

  const handleSelectedAvoidanceSkillLevel = (
    event: SelectChangeEvent<string>
  ) => {
    setSelectedAvoidanceSkillLevel(Number(event.target.value));
  };

  const handleSelectedSupportSkillLevel = (
    event: SelectChangeEvent<string>
  ) => {
    setSelectedSupportSkillLevel(Number(event.target.value));
  };

  const handleSelectedSpecialSkillLevel = (
    event: SelectChangeEvent<string>
  ) => {
    setSelectedSpecialSkillLevel(Number(event.target.value));
  };

  const handleSelectedCollaborationSkillLevel = (
    event: SelectChangeEvent<string>
  ) => {
    setSelectedCollaborationSkillLevel(Number(event.target.value));
  };

  return {
    selectedCoreSkillLevel,
    setSelectedCoreSkillLevel,
    handleSelectedCoreSkillLevel,
    selectedNormalAttackSkillLevel,
    setSelectedNormalAttackSkillLevel,
    handleSelectedNormalAttackSkillLevel,
    selectedAvoidanceSkillLevel,
    setSelectedAvoidanceSkillLevel,
    handleSelectedAvoidanceSkillLevel,
    selectedSupportSkillLevel,
    setSelectedSupportSkillLevel,
    handleSelectedSupportSkillLevel,
    selectedSpecialSkillLevel,
    setSelectedSpecialSkillLevel,
    handleSelectedSpecialSkillLevel,
    selectedCollaborationSkillLevel,
    setSelectedCollaborationSkillLevel,
    handleSelectedCollaborationSkillLevel,
  };
};

export default useAgentCoreSkillLevel;
