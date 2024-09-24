"use client";

import { Typography } from "@mui/material";
import { agentBreakThroughMaterials } from "@/features/agent-traning-calculator/constants/material";
import { TotalAgentBreakThroughMaterialAmount } from "@/features/agent-traning-calculator/hooks/useBreakThrough";

type Props = {
  selectedLevel: number;
  needAgentBreakThroughMaterialAmount: TotalAgentBreakThroughMaterialAmount;
};

export default function AgentBreakThroughMaterialAmountResultSection({
  selectedLevel,
  needAgentBreakThroughMaterialAmount,
}: Props) {
  return (
    <>
      {/* AgentBreakThroughMaterialAmountResultSection */}
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
    </>
  );
}
