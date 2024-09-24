"use client";

import { Box } from "@mui/material";
import CoreSkillLevelSelectBox from "@/shared/components/CoreSkillLevelSelectBox";
import NormalAttackSkillLevelSelectBox from "@/shared/components/NormalAttackSkillLevelSelectBox";
import AvoidanceSkillLevelSelectBox from "@/shared/components/AvoidanceSkillLevelSelectBox";
import SupportSkillLevelSelectBox from "@/shared/components/SupportSkillLevelSelectBox";
import SpecialSkillLevelSelectBox from "@/shared/components/SpecialSkillLevelSelectBox";
import CollaborationSkillLevelSelectBox from "@/shared/components/CollaborationSkillLevelSelectBox";

type Props = {
  selectedCoreSkillLevel: string;
  handleSelectedCoreSkillLevel: (event: any) => void;

  selectedNormalAttackSkillLevel: number;
  handleSelectedNormalAttackSkillLevel: (event: any) => void;

  selectedAvoidanceSkillLevel: number;
  handleSelectedAvoidanceSkillLevel: (event: any) => void;

  selectedSupportSkillLevel: number;
  handleSelectedSupportSkillLevel: (event: any) => void;

  selectedSpecialSkillLevel: number;
  handleSelectedSpecialSkillLevel: (event: any) => void;

  selectedCollaborationSkillLevel: number;
  handleSelectedCollaborationSkillLevel: (event: any) => void;
};

export default function SkillLevelChoiceSection({
  selectedCoreSkillLevel,
  handleSelectedCoreSkillLevel,
  selectedNormalAttackSkillLevel,
  handleSelectedNormalAttackSkillLevel,
  selectedAvoidanceSkillLevel,
  handleSelectedAvoidanceSkillLevel,
  selectedSupportSkillLevel,
  handleSelectedSupportSkillLevel,
  selectedSpecialSkillLevel,
  handleSelectedSpecialSkillLevel,
  selectedCollaborationSkillLevel,
  handleSelectedCollaborationSkillLevel,
}: Props) {
  return (
    <Box
      display="flex"
      justifyContent="left"
      alignItems="left"
      flexDirection="column"
      gap={3}
    >
      <CoreSkillLevelSelectBox
        selectedCoreSkillLevel={selectedCoreSkillLevel}
        handleSelectedCoreSkillLevel={handleSelectedCoreSkillLevel}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          flexDirection: {
            xs: "column", // Extra-small screens (default)
            sm: "row", // Small screens
            md: "row", // Medium screens and up
          },
          gap: 2,
        }}
      >
        <NormalAttackSkillLevelSelectBox
          selectedNormalAttackSkillLevel={selectedNormalAttackSkillLevel}
          handleSelectedNormalAttackSkillLevel={
            handleSelectedNormalAttackSkillLevel
          }
        />

        <AvoidanceSkillLevelSelectBox
          selectedAvoidanceSkillLevel={selectedAvoidanceSkillLevel}
          handleSelectedAvoidanceSkillLevel={handleSelectedAvoidanceSkillLevel}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          flexDirection: {
            xs: "column", // Extra-small screens (default)
            sm: "row", // Small screens
            md: "row", // Medium screens and up
          },
          gap: 2,
        }}
      >
        <SupportSkillLevelSelectBox
          selectedSupportSkillLevel={selectedSupportSkillLevel}
          handleSelectedSupportSkillLevel={handleSelectedSupportSkillLevel}
        />

        <SpecialSkillLevelSelectBox
          selectedSpecialSkillLevel={selectedSpecialSkillLevel}
          handleSelectedSpecialSkillLevel={handleSelectedSpecialSkillLevel}
        />
      </Box>

      <CollaborationSkillLevelSelectBox
        selectedCollaborationSkillLevel={selectedCollaborationSkillLevel}
        handleSelectedCollaborationSkillLevel={
          handleSelectedCollaborationSkillLevel
        }
      />
    </Box>
  );
}
