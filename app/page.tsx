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
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import SelectBox from "@/shared/components/SelectBox";
import CoreSkillLevelSelectBox from "@/shared/components/CoreSkillLevelSelectBox";
import InfoIcon from "@mui/icons-material/Info";
import { agentBreakThroughDinnies } from "@/features/agent-traning-calculator/constants/dinny";
import { DinnyCalculator } from "@/features/agent-traning-calculator/dinny-calculator";

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<number>(60);
  const [isBreakThrough, setIsBreakThrough] = useState<boolean>(false);
  const [selectedCoreSkillLevel, setSelectedCoreSkillLevel] =
    useState<string>("");

  const [needDinnyAmount, setNeedDinnyAmount] = useState<number>(0);
  const [needBatteryForDinny, setNeedBatteryForDinny] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

  const handleSelectedCoreSkillLevel = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCoreSkillLevel(event.target.value);
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
    setNeedDinnyAmount(0);
    setNeedBatteryForDinny(0);
  };

  //   new DinnyCalculator().calculate(
  //     selectedLevel,
  //     selectedCoreSkillLevel,
  //     isBreakThrough
  //   )

  useEffect(() => {
    const needDinneyAmount = new DinnyCalculator().calculate(
      selectedLevel,
      selectedCoreSkillLevel,
      isBreakThrough
    );

    if (typeof needDinneyAmount === "number") {
      setNeedDinnyAmount(needDinneyAmount);
    }

    setNeedBatteryForDinny(
      calcNeedBatteryForDinny(
        new DinnyCalculator().calculate(
          selectedLevel,
          selectedCoreSkillLevel,
          isBreakThrough,
          false
        )
      )
    );
  }, [selectedLevel, selectedCoreSkillLevel, isBreakThrough]);

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
          selectedLevel={selectedCoreSkillLevel}
          handleChange={handleSelectedCoreSkillLevel}
        />

        {/* <Table /> */}

        {/* <h3>必要なエージェントの突破素材：</h3>
{agentBreakThroughMaterials.map((agentMaterial) => {
  if (agentMaterial.level === selectedLevel) {
    return (
      <div key={agentMaterial.level}>
        <p>レベル：{agentMaterial.level}</p>
        <p>素材A：{agentMaterial.material.A}</p>
        <p>素材B：{agentMaterial.material.B}</p>
        <p>素材C：{agentMaterial.material.C}</p>
      </div>
    );
  }
})}
<hr /> */}

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
        {/* <h3>必要な経験値素材（調査員の記録）：</h3>
        
<hr />
<h4>小計</h4>
{agentExperiencePoints.map((agentExperiencePoint) => {
  if (selectedLevel == agentExperiencePoint.level.to) {
    return (
      <div key={agentExperiencePoint.level.from}>
        <p>経験値：{agentExperiencePoint.amount.subtotal}</p>
        <p>素材（A）:{agentExperiencePoint.material.subtotal.A}</p>
      </div>
    );
  }
})}
<hr /> */}
        {/* <Typography variant="h4">合計</Typography>
{agentExperiencePoints.map((agentExperiencePoint) => {
  if (selectedLevel == agentExperiencePoint.level.to) {
    return (
      <div key={agentExperiencePoint.level.from}>
        <p>経験値：{agentExperiencePoint.amount.total}</p>
        <p>素材（A）:{agentExperiencePoint.material.total.A}</p>
      </div>
    );
  }
})}
<hr /> */}
        {/* <h3>必要なスタミナ（目安）：</h3>
<hr />
<h3>入手できる場所：</h3> */}

        {/* <Typography variant="h5">育成予備知識</Typography>

        <Typography variant="caption">
          ・ディニーは突破時（突破時のみ必要。レベル上げてる時は不要）とコアスキル上げる時に必要
        </Typography> */}

        <Typography variant="caption">
          {/* スタミナ100でディニーは125,000 */}
          {/* スタミナ60でディニーは75,000 */}
          {/* スタミナ1につき、1,250 */}
          このディニーを稼ぐために必要なバッテリーの消費量：
          {needBatteryForDinny}
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#F79174", color: "white", maxWidth: "300px" }}
          onClick={resetConditions}
        >
          条件をリセットする
        </Button>

        <Typography variant="h5">機能追加予定</Typography>
        <Typography variant="caption">
          ・必要なキャラのエキスパート素材、週ボス素材、経験値素材、スキルレベル素材、突破素材
        </Typography>
        <Typography variant="caption">・音同期育成</Typography>
      </Box>
    </main>
  );
}
