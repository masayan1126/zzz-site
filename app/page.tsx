"use client";

import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";

import { DinnyCalculator } from "@/features/agent-traning-calculator/dinny-calculator";
import { AgentBreakThroughMaterialAmountCalculator } from "@/features/agent-traning-calculator/agent-breack-through-material-amount-calculator";
import useAgentLevel from "@/features/agent-traning-calculator/hooks/useAgentLevel";
import useAgentCoreSkillLevel from "@/features/agent-traning-calculator/hooks/useAgentCoreSkillLevel";
import useBreakThrough from "@/features/agent-traning-calculator/hooks/useBreakThrough";
import SkillLevelChoiceSection from "@/features/agent-traning-calculator/components/SkillLevelChoiceSection";
import DinnyResultSection from "@/features/agent-traning-calculator/components/DinnyResultSection";
import AgentExperiencePointAmountResultSection from "@/features/agent-traning-calculator/components/AgentExperiencePointAmountResultSection";
import AgentBreakThroughMaterialAmountResultSection from "@/features/agent-traning-calculator/components/AgentBreakThroughMaterialAmountResultSection";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import { calcNeedBatteryByDinny } from "@/features/shared/battery-calculator";
import useBattery from "@/features/shared/hooks/useBattery";

export default function Home() {
  const { selectedLevel, setSelectedLevel, handleLevelChange } =
    useAgentLevel();

  const {
    isBreakThrough,
    setIsBreakThrough,
    handleIsBreakThroughChange,
    needAgentBreakThroughMaterialAmount,
    setNeedAgentBreakThroughMaterialAmount,
  } = useBreakThrough();

  const {
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
  } = useAgentCoreSkillLevel();

  const [needDinnyAmount, setNeedDinnyAmount] = useState<string>("0");

  const {
    needBatteryForDinny,
    setNeedBatteryForDinny,
    calcNeedBatteryForDinny,
  } = useBattery();

  const resetConditions = () => {
    setSelectedLevel(60);
    setIsBreakThrough(false);
    setSelectedCoreSkillLevel("");
    setSelectedNormalAttackSkillLevel(1);
    setSelectedAvoidanceSkillLevel(1);
    setSelectedSupportSkillLevel(1);
    setSelectedSpecialSkillLevel(1);
    setSelectedCollaborationSkillLevel(1);
    setNeedDinnyAmount("0");
    setNeedBatteryForDinny(0);
  };

  const maxConditions = () => {
    setSelectedLevel(60);
    setIsBreakThrough(false);
    setSelectedCoreSkillLevel("F");
    setSelectedNormalAttackSkillLevel(12);
    setSelectedAvoidanceSkillLevel(12);
    setSelectedSupportSkillLevel(12);
    setSelectedSpecialSkillLevel(12);
    setSelectedCollaborationSkillLevel(12);
  };

  useEffect(() => {
    let skillLevelCondition = undefined;
    // NEXT_PUBLIC_X_NILTO_API_KEY
    const NEXT_PUBLIC_X_NILTO_API_KEY =
      process.env.NEXT_PUBLIC_X_NILTO_API_KEY || "";
    if (
      selectedNormalAttackSkillLevel !== 1 ||
      selectedAvoidanceSkillLevel !== 1 ||
      selectedSupportSkillLevel !== 1 ||
      selectedSpecialSkillLevel !== 1 ||
      selectedCollaborationSkillLevel !== 1
    ) {
      skillLevelCondition = {
        normalAttackSkillLevel: selectedNormalAttackSkillLevel,
        avoidanceSkillLevel: selectedAvoidanceSkillLevel,
        supportSkillLevel: selectedSupportSkillLevel,
        specialSkillLevel: selectedSpecialSkillLevel,
        collaborationSkillLevel: selectedCollaborationSkillLevel,
      };
    }

    const needDinneyAmount = new DinnyCalculator().calculate(
      selectedLevel,
      selectedCoreSkillLevel,
      isBreakThrough,
      true,
      skillLevelCondition
    );

    if (typeof needDinneyAmount === "string") {
      setNeedDinnyAmount(needDinneyAmount);
    }

    setNeedBatteryForDinny(
      calcNeedBatteryForDinny(
        new DinnyCalculator().calculate(
          selectedLevel,
          selectedCoreSkillLevel,
          isBreakThrough,
          false,
          skillLevelCondition
        )
      )
    );

    setNeedAgentBreakThroughMaterialAmount(
      new AgentBreakThroughMaterialAmountCalculator().calculate(
        selectedLevel,
        isBreakThrough
      )
    );
  }, [
    selectedLevel,
    selectedCoreSkillLevel,
    isBreakThrough,
    selectedNormalAttackSkillLevel,
    selectedAvoidanceSkillLevel,
    selectedSupportSkillLevel,
    selectedSpecialSkillLevel,
    selectedCollaborationSkillLevel,
    setNeedAgentBreakThroughMaterialAmount,
    setNeedBatteryForDinny,
    calcNeedBatteryForDinny,
  ]);

  useEffect(() => {
    if (selectedLevel === 60) {
      setIsBreakThrough(false);
    }
  }, [selectedLevel, setIsBreakThrough]);

  return (
    <Box
      display="flex"
      justifyContent="left"
      alignItems="left"
      flexDirection="column"
      gap={3}
      maxWidth="850px"
      margin="auto"
    >
      <div>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <img className="mb-2" src="/hero.png" alt="" />
          <Grid2
            container
            sx={{
              "--Grid-borderWidth": "1px",
              borderTop: "var(--Grid-borderWidth) solid",
              borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
              "& > div": {
                borderRight: "var(--Grid-borderWidth) solid",
                borderBottom: "var(--Grid-borderWidth) solid",
                borderColor: "divider",
              },
            }}
          >
            {[
              { caption: "TIPS（準備中）", path: "/tips" },
              {
                caption: "エネミー攻略記事（準備中）",
                path: "/enemy-strategy",
              },
              {
                caption: "エージェント解説（準備中）",
                path: "/enemy-strategy",
              },
              {
                caption: "高難度タイムアタック（準備中）",
                path: "/enemy-strategy",
              },
              {
                caption: "エージェント育成計算機",
                path: "/training-calculator/agent",
              },
              {
                caption: "音動機育成計算機",
                path: "/training-calculator/sound-engine",
              },
              {
                caption: "ドライバディスク育成計算機",
                path: "/training-calculator/driver-disk",
              },
            ].map((menu, index) => (
              <Grid2
                key={index}
                minHeight={40}
                size={{
                  xs: 6,
                  sm: 4,
                  md: 3,
                  lg: 3,
                }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 10px 0 10px",
                }}
              >
                <Link href={menu.path}>
                  <Typography variant="caption">{menu.caption}</Typography>
                </Link>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        {/* <TabMenu /> */}
      </div>
    </Box>
  );
}
