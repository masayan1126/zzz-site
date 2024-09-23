import { agentBreakThroughMaterials } from "@/features/agent-traning-calculator/constants/material";

export class AgentBreakThroughMaterialAmountCalculator {
  public calculate(level: number, containBreakThrough: boolean) {
    const totalAgentBreakThroughMaterialAmount = {
      A: 0,
      B: 0,
      C: 0,
    };

    // レベルが0の場合は、突破素材はかからない
    if (level === 0) {
      return totalAgentBreakThroughMaterialAmount;
    }

    // レベルが10の場合かつ、突破しない場合は素材はかからない
    if (level === 10 && !containBreakThrough) {
      return totalAgentBreakThroughMaterialAmount;
    }

    if (containBreakThrough) {
      agentBreakThroughMaterials.map((agentBreakThroughMaterial) => {
        if (agentBreakThroughMaterial.level === level) {
          totalAgentBreakThroughMaterialAmount.A +=
            agentBreakThroughMaterial.material.A;
          totalAgentBreakThroughMaterialAmount.B +=
            agentBreakThroughMaterial.material.B;
          totalAgentBreakThroughMaterialAmount.C +=
            agentBreakThroughMaterial.material.C;
        }
      });
    }

    // レベル20,30,40,50の場合でかつ、突破しない場合は、自動的に加算する

    if (!containBreakThrough) {
      // 突破しない、コアスキルレベル指定なし、レベルが20の場合、レベル10突破分のディニーがかかる
      agentBreakThroughMaterials.map((agentBreakThroughMaterial) => {
        if (agentBreakThroughMaterial.level === level) {
          totalAgentBreakThroughMaterialAmount.A +=
            agentBreakThroughMaterial.material.A;
          totalAgentBreakThroughMaterialAmount.B +=
            agentBreakThroughMaterial.material.B;
          totalAgentBreakThroughMaterialAmount.C +=
            agentBreakThroughMaterial.material.C;
        }
      });
    }

    return totalAgentBreakThroughMaterialAmount;
  }
}
