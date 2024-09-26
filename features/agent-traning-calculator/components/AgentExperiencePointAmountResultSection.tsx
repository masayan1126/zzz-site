"use client";

import { Typography } from "@mui/material";
import { agentExperiencePoints } from "@/features/agent-traning-calculator/constants/experience-point";

type Props = {
  selectedLevel: number;
};

export default function AgentExperiencePointAmountResultSection({
  selectedLevel,
}: Props) {
  return (
    <>
      <Typography variant="h6">必要な経験値素材（調査員の記録）</Typography>
      <Typography variant="caption">
        必要なA級素材の数と、経験値数を表示しています（指定したレベルに到達するのに必要な累計を表示しています。※小計ではありません）
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
    </>
  );
}
