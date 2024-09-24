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
  Tooltip,
  Typography,
} from "@mui/material";
import SelectBox from "@/shared/components/SelectBox";
import CoreSkillLevelSelectBox from "@/shared/components/CoreSkillLevelSelectBox";
import InfoIcon from "@mui/icons-material/Info";
import { agentBreakThroughDinnies } from "@/features/agent-traning-calculator/constants/dinny";
import { DinnyCalculator } from "@/features/agent-traning-calculator/dinny-calculator";
import { agentExperiencePoints } from "@/features/agent-traning-calculator/constants/experience-point";
import { agentBreakThroughMaterials } from "@/features/agent-traning-calculator/constants/material";
import { AgentBreakThroughMaterialAmountCalculator } from "@/features/agent-traning-calculator/agent-breack-through-material-amount-calculator";
import NormalAttackSkillLevelSelectBox from "@/shared/components/NormalAttackSkillLevelSelectBox";
import AvoidanceSkillLevelSelectBox from "@/shared/components/AvoidanceSkillLevelSelectBox";
import SupportSkillLevelSelectBox from "@/shared/components/SupportSkillLevelSelectBox";
import SpecialSkillLevelSelectBox from "@/shared/components/SpecialSkillLevelSelectBox";
import CollaborationSkillLevelSelectBox from "@/shared/components/CollaborationSkillLevelSelectBox";
import useAgentLevel from "@/features/agent-traning-calculator/hooks/useAgentLevel";
import useAgentCoreSkillLevel from "@/features/agent-traning-calculator/hooks/useAgentCoreSkillLevel";
import useBreakThrough from "@/features/agent-traning-calculator/hooks/useBreakThrough";
import { generateMetadata } from "@/features/agent-traning-calculator/meta";
import SkillLevelChoiceSection from "@/features/agent-traning-calculator/components/SkillLevelChoiceSection";
import DinnyResultSection from "@/features/agent-traning-calculator/components/DinnyResultSection";
import AgentExperiencePointAmountResultSection from "@/features/agent-traning-calculator/components/AgentExperiencePointAmountResultSection";
import AgentBreakThroughMaterialAmountResultSection from "@/features/agent-traning-calculator/components/AgentBreakThroughMaterialAmountResultSection";

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
  const [needBatteryForDinny, setNeedBatteryForDinny] = useState<number>(0);

  const calcNeedBatteryForDinny = (dinny: number | string) => {
    if (typeof dinny === "string") {
      return 0;
    }
    return Math.round(dinny / 1250);
  };

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
  ]);

  useEffect(() => {
    if (selectedLevel === 60) {
      setIsBreakThrough(false);
    }
  }, [selectedLevel, setIsBreakThrough]);

  return (
    <main>
      <Box
        display="flex"
        justifyContent="left"
        alignItems="left"
        // minHeight="100vh"
        flexDirection="column"
        gap={3}
      >
        <div>
          <Typography variant="h5">エージェント育成計算機</Typography>
          <div>
            <Typography variant="caption">
              シュミレートしたいエージェントのレベルとコアスキルレベル、突破の有無を選択すると、必要なディニーの金額とスタミナが計算できます
              <br />
              ※このエージェントのレベルだと、そもそもこのスキルレベルは選択できない、みたいな細かな制御はありませんので、あくまで目安としてご利用ください
            </Typography>
          </div>
          <Tooltip
            title="エージェントのタイプ（撃破、強化・・・）ごとに必要な素材。A（赤）,B（青）,C（緑）"
            arrow
          >
            <Typography variant="caption">
              エージェントの突破素材とは
              <InfoIcon fontSize="small" />
            </Typography>
          </Tooltip>
        </div>

        <div>
          <SelectBox
            selectedLevel={selectedLevel}
            handleChange={handleLevelChange}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isBreakThrough}
                  onChange={(event) =>
                    handleIsBreakThroughChange(event, selectedLevel)
                  }
                />
              }
              label={
                <Typography variant="caption">
                  このレベルの突破時に必要な分を含める（※EX.)レベルを20で指定し、このチェックがついてない場合はレベル10突破分が自動的に含まれます）
                </Typography>
              }
            />
          </FormGroup>
        </div>

        <SkillLevelChoiceSection
          selectedCoreSkillLevel={selectedCoreSkillLevel}
          handleSelectedCoreSkillLevel={handleSelectedCoreSkillLevel}
          selectedNormalAttackSkillLevel={selectedNormalAttackSkillLevel}
          handleSelectedNormalAttackSkillLevel={
            handleSelectedNormalAttackSkillLevel
          }
          selectedAvoidanceSkillLevel={selectedAvoidanceSkillLevel}
          handleSelectedAvoidanceSkillLevel={handleSelectedAvoidanceSkillLevel}
          selectedSupportSkillLevel={selectedSupportSkillLevel}
          handleSelectedSupportSkillLevel={handleSelectedSupportSkillLevel}
          selectedSpecialSkillLevel={selectedSpecialSkillLevel}
          handleSelectedSpecialSkillLevel={handleSelectedSpecialSkillLevel}
          selectedCollaborationSkillLevel={selectedCollaborationSkillLevel}
          handleSelectedCollaborationSkillLevel={
            handleSelectedCollaborationSkillLevel
          }
        />

        <DinnyResultSection
          needDinnyAmount={needDinnyAmount}
          needBatteryForDinny={needBatteryForDinny}
          isBreakThrough={isBreakThrough}
          selectedLevel={selectedLevel}
        />

        <AgentExperiencePointAmountResultSection
          selectedLevel={selectedLevel}
        />

        <hr />

        <AgentBreakThroughMaterialAmountResultSection
          selectedLevel={selectedLevel}
          needAgentBreakThroughMaterialAmount={
            needAgentBreakThroughMaterialAmount
          }
        />

        {/* <h3>入手できる場所：</h3> */}

        {/* <Typography variant="h5">育成予備知識</Typography>

        <Typography variant="caption">
          ・ディニーは突破時（突破時のみ必要。レベル上げてる時は不要）とコアスキル上げる時に必要
        </Typography> */}

        {/* スタミナ100でディニーは125,000 */}
        {/* スタミナ60でディニーは75,000 */}
        {/* スタミナ1につき、1,250 */}

        {/* UsefulButtonSection */}
        <div className="flex gap-2">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F79174",
              color: "white",
              maxWidth: "300px",
            }}
            onClick={resetConditions}
          >
            条件リセット
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#57C40B",
              color: "white",
              maxWidth: "300px",
            }}
            onClick={maxConditions}
          >
            全てMAXで指定
          </Button>
        </div>

        <Typography variant="h5">機能追加予定</Typography>
        <Typography variant="caption">
          ・必要なキャラのエキスパート素材、週ボス素材。必要なバッテリーの消費量
        </Typography>
        <Typography variant="caption">・音同期育成の計算</Typography>
      </Box>
    </main>
  );
}
