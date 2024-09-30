"use client";

import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DinnyCalculator } from "@/features/traning-calculator/driver-disk/dinny-calculator";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import DriverDiskLevelSelectBox from "@/features/traning-calculator/driver-disk/components/DriverDiskLevelSelectBox";
import DriverDiskRankSelectBox from "@/features/traning-calculator/driver-disk/components/DriverDiskRankSelectBox";
import { driverDiskExperiencePoints } from "@/features/agent-traning-calculator/constants/experience-point";
import { DriverDiskMaterialAmountCalculator } from "@/features/traning-calculator/driver-disk/driver-disk-material-amount-calculator";
import useBattery from "@/features/shared/hooks/useBattery";

type TotalDriverDiskMaterialAmount = {
  A: number;
  B: number;
  C: number;
};

export default function DriverDiskTraining() {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [selectedRank, setSelectedRank] = useState<string>("S");
  const [needDinnyAmount, setNeedDinnyAmount] = useState<string>("0");

  const {
    needBatteryForDinny,
    setNeedBatteryForDinny,
    calcNeedBatteryForDinny,
  } = useBattery();

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

    setNeedBatteryForDinny(
      calcNeedBatteryForDinny(
        new DinnyCalculator().calculate(selectedLevel, selectedRank, false)
      )
    );
  }, [
    selectedLevel,
    selectedRank,
    calcNeedBatteryForDinny,
    setNeedBatteryForDinny,
  ]);

  return (
    <Box
      display="flex"
      justifyContent="left"
      alignItems="left"
      flexDirection="column"
      gap={3}
    >
      <div>
        <Typography variant="h6">ドライバディスク育成計算機</Typography>
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

        <hr />

        <Typography variant="subtitle2">必要なディニーの総額</Typography>
        <span>{needDinnyAmount}</span>

        <hr />

        <Typography variant="subtitle2">
          必要な助剤（ドライバディスクの素材）
        </Typography>
        <Typography variant="caption">
          必要な素材の数を表示しています
        </Typography>

        {driverDiskExperiencePoints.map((driverDiskExperiencePoint) => {
          if (driverDiskExperiencePoint.level === selectedLevel) {
            return (
              <div key={driverDiskExperiencePoint.level}>
                <Typography variant="caption">
                  A級助剤：{needDriverDiskExperiencePointAmount.A}個
                </Typography>
                {/* <p>B級助剤：{needDriverDiskExperiencePointAmount.B}個</p>
                <p>C級助剤：{needDriverDiskExperiencePointAmount.C}個</p> */}
              </div>
            );
          }
        })}

        <hr />

        <Typography variant="caption">
          このディニーを稼ぐために必要なバッテリーの消費量：
          {needBatteryForDinny}
        </Typography>
        <Typography variant="subtitle2">機能追加予定</Typography>
        <Typography variant="caption">・ディスク枚の指定</Typography>
        <Typography variant="caption">
          ・A級、B級ドライバディスクの育成に必要な素材の数、ディニー
        </Typography>
      </Box>
    </Box>
  );
}
