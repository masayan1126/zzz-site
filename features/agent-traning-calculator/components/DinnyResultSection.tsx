"use client";

import { Typography } from "@mui/material";
import { agentBreakThroughDinnies } from "@/features/agent-traning-calculator/constants/dinny";

type Props = {
  needDinnyAmount: string;
  needBatteryForDinny: number;
  isBreakThrough: boolean;
  selectedLevel: number;
};

export default function DinnyResultSection({
  needDinnyAmount,
  needBatteryForDinny,
  isBreakThrough,
  selectedLevel,
}: Props) {
  return (
    <>
      {/* DinnyResultSection */}
      <Typography variant="subtitle2">必要なディニーの総額</Typography>

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
    </>
  );
}
