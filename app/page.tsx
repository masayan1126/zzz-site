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
  SelectChangeEvent,
  Snackbar,
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

type totalAgentBreakThroughMaterialAmount = {
  A: number;
  B: number;
  C: number;
};

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<number>(60);
  const [isBreakThrough, setIsBreakThrough] = useState<boolean>(false);
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

  const [needDinnyAmount, setNeedDinnyAmount] = useState<string>("0");
  const [needBatteryForDinny, setNeedBatteryForDinny] = useState<number>(0);
  const [
    needAgentBreakThroughMaterialAmount,
    setNeedAgentBreakThroughMaterialAmount,
  ] = useState<totalAgentBreakThroughMaterialAmount>({
    A: 0,
    B: 0,
    C: 0,
  });

  const handleChange = (event: SelectChangeEvent<number>) => {
    if (Number(event.target.value) === 60) {
      setIsBreakThrough(false);
    }
    setSelectedLevel(Number(event.target.value));
  };

  const handleIsBreakThroughChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (selectedLevel === 60) {
      alert("レベル60を指定している場合、突破できません");
      return;
    }
    setIsBreakThrough(!isBreakThrough);
  };

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
  ]);

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
            handleChange={handleChange}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isBreakThrough}
                  onChange={handleIsBreakThroughChange}
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
            handleSelectedAvoidanceSkillLevel={
              handleSelectedAvoidanceSkillLevel
            }
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

        {/* <Table /> */}

        <Typography variant="h6">必要なディニーの総額</Typography>

        {agentBreakThroughDinnies.map((agentBreakThroughDinny) => {
          if (agentBreakThroughDinny.level === selectedLevel) {
            return (
              <p key={agentBreakThroughDinny.level}>
                <span>
                  {needDinnyAmount}
                  {isBreakThrough ? (
                    <Typography variant="caption">（突破分込み）</Typography>
                  ) : (
                    ""
                  )}
                </span>
              </p>
            );
          }
        })}

        <Typography variant="caption">
          このディニーを稼ぐために必要なバッテリーの消費量：
          {needBatteryForDinny}
        </Typography>
        <hr />
        <Typography variant="h6">必要な経験値素材（調査員の記録）</Typography>
        <Typography variant="caption">
          必要なA級素材の数と、経験値数を表示しています
        </Typography>

        {agentExperiencePoints.map((agentExperiencePoint) => {
          if (selectedLevel == agentExperiencePoint.level.to) {
            return (
              <div key={agentExperiencePoint.level.from}>
                <p>
                  経験値：{agentExperiencePoint.amount.total.toLocaleString()}
                </p>
                <p>素材（A級）:{agentExperiencePoint.material.total.A}個</p>
              </div>
            );
          }
        })}
        <hr />
        <Typography variant="h6">必要なエージェントの突破素材</Typography>
        <Typography variant="caption">
          必要な突破素材の数を表示しています
        </Typography>

        {agentBreakThroughMaterials.map((agentMaterial) => {
          if (agentMaterial.level === selectedLevel) {
            return (
              <div key={agentMaterial.level}>
                <p>A級突破素材：{needAgentBreakThroughMaterialAmount.A}個</p>
                <p>B級突破素材：{needAgentBreakThroughMaterialAmount.B}個</p>
                <p>C級突破素材：{needAgentBreakThroughMaterialAmount.C}個</p>
              </div>
            );
          }
        })}

        {/* <h3>入手できる場所：</h3> */}

        {/* <Typography variant="h5">育成予備知識</Typography>

        <Typography variant="caption">
          ・ディニーは突破時（突破時のみ必要。レベル上げてる時は不要）とコアスキル上げる時に必要
        </Typography> */}

        {/* スタミナ100でディニーは125,000 */}
        {/* スタミナ60でディニーは75,000 */}
        {/* スタミナ1につき、1,250 */}

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
