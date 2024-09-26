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
import { DinnyCalculator } from "@/features/traning-calculator/driver-disk/dinny-calculator";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import { soundEngineBreakThroughMaterials } from "@/features/agent-traning-calculator/constants/material";
import { SoundEngineBreakThroughMaterialAmountCalculator } from "@/features/agent-traning-calculator/sound-engine-breack-through-material-amount-calculator";
import DriverDiskLevelSelectBox from "@/features/traning-calculator/driver-disk/components/DriverDiskLevelSelectBox";
import DriverDiskRankSelectBox from "@/features/traning-calculator/driver-disk/components/DriverDiskRankSelectBox";
import { driverDiskExperiencePoints } from "@/features/agent-traning-calculator/constants/experience-point";
import { DriverDiskMaterialAmountCalculator } from "@/features/traning-calculator/driver-disk/driver-disk-material-amount-calculator";

type TotalDriverDiskMaterialAmount = {
  A: number;
  B: number;
  C: number;
};

export default function DriverDiskTraining() {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [selectedRank, setSelectedRank] = useState<string>("S");
  const [needDinnyAmount, setNeedDinnyAmount] = useState<string>("0");
  const [needBatteryForDinny, setNeedBatteryForDinny] = useState<number>(0);

  const [
    needDriverDiskExperiencePointAmount,
    setNeedDriverDiskExperiencePointAmount,
  ] = useState<TotalDriverDiskMaterialAmount>({
    A: 0,
    B: 0,
    C: 0,
  });

  const handleLevelChange = (event: SelectChangeEvent<number>) => {
    setSelectedLevel(Number(event.target.value));
  };

  useEffect(() => {
    const needDinneyAmount = new DinnyCalculator().calculate(
      selectedLevel,
      selectedRank
    );

    if (typeof needDinneyAmount === "string") {
      setNeedDinnyAmount(needDinneyAmount);
    }

    setNeedDriverDiskExperiencePointAmount(
      new DriverDiskMaterialAmountCalculator().calculate(
        selectedLevel,
        selectedRank
      )
    );
  }, [selectedLevel, selectedRank]);

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
        <Typography variant="h5">ドライバディスク育成計算機</Typography>
        <MuiLink component={Link} href="/" underline="none">
          <Typography variant="subtitle1" component="p">
            エージェント育成計算機はこちら
          </Typography>
        </MuiLink>
        <MuiLink
          component={Link}
          href="/training-calculator/sound-engine"
          underline="none"
        >
          <Typography variant="subtitle1" component="p">
            音動機育成計算機はこちら
          </Typography>
        </MuiLink>
        <div>
          <Typography variant="caption">
            シュミレートしたいドライバディスクのレベルとランクを選択すると、必要なディニーの金額とスタミナ、各種素材の数が計算できます
          </Typography>
        </div>
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
          <DriverDiskLevelSelectBox
            selectedLevel={selectedLevel}
            handleChange={handleLevelChange}
          />
        </div>
        <DriverDiskRankSelectBox
          selectedRank={selectedRank}
          handleChange={(event) => setSelectedRank(event.target.value)}
        />
        <Typography variant="caption">※現在、S級のみ対応しています</Typography>

        <Typography variant="h6">必要なディニーの総額</Typography>
        <span>{needDinnyAmount}</span>

        <Typography variant="h6">
          必要な助剤（ドライバディスクの素材）
        </Typography>
        <Typography variant="caption">
          必要な素材の数を表示しています
        </Typography>

        {driverDiskExperiencePoints.map((driverDiskExperiencePoint) => {
          if (driverDiskExperiencePoint.level === selectedLevel) {
            return (
              <div key={driverDiskExperiencePoint.level}>
                <p>A級助剤：{needDriverDiskExperiencePointAmount.A}個</p>
                {/* <p>B級助剤：{needDriverDiskExperiencePointAmount.B}個</p>
                <p>C級助剤：{needDriverDiskExperiencePointAmount.C}個</p> */}
              </div>
            );
          }
        })}

        {/* <Typography variant="caption">
          このディニーを稼ぐために必要なバッテリーの消費量：
          {needBatteryForDinny}
        </Typography> */}
      </Box>
    </Box>
  );
}
