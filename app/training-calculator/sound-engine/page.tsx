"use client";

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  SelectChangeEvent,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SoundEngineLevelSelectBox from "@/features/traning-calculator/sound-engine/components/SoundEngineLevelSelectBox";
import { useEffect, useState } from "react";
import SoundEngineRankSelectBox from "@/features/traning-calculator/sound-engine/components/SoundEngineRankSelectBox";
import { soundEngineBreakThroughDinnies } from "@/features/agent-traning-calculator/constants/dinny";
import { DinnyCalculator } from "@/features/traning-calculator/sound-engine/dinny-calculator";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import { soundEngineBreakThroughMaterials } from "@/features/agent-traning-calculator/constants/material";
import { SoundEngineBreakThroughMaterialAmountCalculator } from "@/features/agent-traning-calculator/sound-engine-breack-through-material-amount-calculator";

export type TotalSoundEngineBreakThroughMaterialAmount = {
  A: number;
  B: number;
  C: number;
};

export default function SoundEngineTraining() {
  const [selectedLevel, setSelectedLevel] = useState<number>(60);
  const [selectedRank, setSelectedRank] = useState<string>("S");
  const [needDinnyAmount, setNeedDinnyAmount] = useState<string>("0");
  const [needBatteryForDinny, setNeedBatteryForDinny] = useState<number>(0);

  const handleLevelChange = (event: SelectChangeEvent<number>) => {
    setSelectedLevel(Number(event.target.value));
  };
  const [isBreakThrough, setIsBreakThrough] = useState<boolean>(false);

  const [
    needSoundEngineBreakThroughMaterialAmount,
    setNeedSoundEngineBreakThroughMaterialAmount,
  ] = useState<TotalSoundEngineBreakThroughMaterialAmount>({
    A: 0,
    B: 0,
    C: 0,
  });

  const handleIsBreakThroughChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    selectedLevel: number
  ) => {
    if (selectedLevel === 60) {
      alert("レベル60を指定している場合、突破できません");
      return;
    }
    setIsBreakThrough(!isBreakThrough);
  };

  useEffect(() => {
    const needDinneyAmount = new DinnyCalculator().calculate(
      selectedLevel,
      isBreakThrough,
      selectedRank
    );

    if (typeof needDinneyAmount === "string") {
      setNeedDinnyAmount(needDinneyAmount);
    }

    // setNeedBatteryForDinny(
    //   calcNeedBatteryForDinny(
    //     new DinnyCalculator().calculate(
    //       selectedLevel,
    //       selectedCoreSkillLevel,
    //       isBreakThrough,
    //       false,
    //       skillLevelCondition
    //     )
    //   )
    // );

    setNeedSoundEngineBreakThroughMaterialAmount(
      new SoundEngineBreakThroughMaterialAmountCalculator().calculate(
        selectedLevel,
        selectedRank,
        isBreakThrough
      )
    );
  }, [isBreakThrough, selectedLevel, selectedRank]);

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
      // minHeight="100vh"
      flexDirection="column"
      gap={3}
    >
      <div>
        <Typography variant="h6">音動機育成計算機</Typography>
        <Tooltip
          title="音動機のタイプ（撃破、強化・・・）ごとに必要な素材。A（赤）,B（青）,C（緑）"
          arrow
        >
          <Typography variant="caption">
            音動機の突破素材とは
            <InfoIcon fontSize="small" />
          </Typography>
        </Tooltip>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          flexDirection: {
            xs: "column", // Extra-small screens (default)
            sm: "column", // Small screens
            md: "column", // Medium screens and up
          },
          gap: 3,
        }}
      >
        <div>
          <SoundEngineLevelSelectBox
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
        <SoundEngineRankSelectBox
          selectedRank={selectedRank}
          handleChange={(event) => setSelectedRank(event.target.value)}
        />
        <Typography variant="subtitle2">必要なディニーの総額</Typography>
        {soundEngineBreakThroughDinnies.map((soundEngineBreakThroughDinnie) => {
          if (soundEngineBreakThroughDinnie.level === selectedLevel) {
            return (
              <p key={soundEngineBreakThroughDinnie.level}>
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

        <Typography variant="subtitle2">必要な音動機の突破素材</Typography>
        <Typography variant="caption">
          必要な突破素材の数を表示しています
        </Typography>

        {soundEngineBreakThroughMaterials.map(
          (soundEngineBreakThroughMaterial) => {
            if (soundEngineBreakThroughMaterial.level === selectedLevel) {
              return (
                <div key={soundEngineBreakThroughMaterial.level}>
                  <p>
                    A級突破素材：{needSoundEngineBreakThroughMaterialAmount.A}個
                  </p>
                  <p>
                    B級突破素材：{needSoundEngineBreakThroughMaterialAmount.B}個
                  </p>
                  <p>
                    C級突破素材：{needSoundEngineBreakThroughMaterialAmount.C}個
                  </p>
                </div>
              );
            }
          }
        )}

        {/* <Typography variant="caption">
          このディニーを稼ぐために必要なバッテリーの消費量：
          {needBatteryForDinny}
        </Typography> */}
      </Box>
    </Box>
  );
}
