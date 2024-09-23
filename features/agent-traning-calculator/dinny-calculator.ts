import {
  agentBreakThroughDinnies,
  agentCoreSkillDinnies,
  agentSkillDinnies,
} from "@/features/agent-traning-calculator/constants/dinny";

type SkillLevelCondition =
  | {
      normalAttackSkillLevel: number;
      avoidanceSkillLevel: number;
    }
  | undefined;

export class DinnyCalculator {
  public calculate(
    level: number,
    coreSkillLevel: string,
    containBreakThrough: boolean,
    withComma: boolean = true,
    skillLevelCondition: SkillLevelCondition = undefined
  ) {
    let total_need_dinny = 0;

    // レベルが0の場合は、ディニーはかからない
    // レベル0の場合でもコアスキルレベルが指定されている場合は、コアスキルレベルに応じたディニーがかかる
    if (level === 0 && coreSkillLevel == "") {
      return withComma ? total_need_dinny.toLocaleString() : total_need_dinny;
    }

    if (containBreakThrough) {
      agentBreakThroughDinnies.map((agentBreakThroughDinny) => {
        if (agentBreakThroughDinny.level === level) {
          total_need_dinny += agentBreakThroughDinny.amount;
        }
      });
    }

    if (!containBreakThrough) {
      // 突破しない、コアスキルレベル指定なし、レベルが10の場合、ディニーはかからない
      if (level === 10 && coreSkillLevel == "" && !skillLevelCondition) {
        return withComma ? total_need_dinny.toLocaleString() : total_need_dinny;
      }

      // 突破しない、コアスキルレベル指定なし、レベルが20の場合、レベル10突破分のディニーがかかる
      if (level === 20) {
        total_need_dinny += agentBreakThroughDinnies[1].amount;
      }
      // 突破しない、コアスキルレベル指定なし、レベルが30の場合、レベル10突破分、レベル20突破分のディニーがかかる
      if (level === 30) {
        total_need_dinny += agentBreakThroughDinnies[2].amount;
      }
      if (level === 40) {
        total_need_dinny += agentBreakThroughDinnies[3].amount;
      }
      if (level === 50) {
        total_need_dinny += agentBreakThroughDinnies[4].amount;
      }

      if (level === 60) {
        total_need_dinny += agentBreakThroughDinnies[5].amount;
      }
    }

    if (coreSkillLevel !== "") {
      agentCoreSkillDinnies.map((agentCoreSkillDinny) => {
        if (agentCoreSkillDinny.level === coreSkillLevel) {
          total_need_dinny += agentCoreSkillDinny.amount;
        }
      });
    }

    if (skillLevelCondition && skillLevelCondition.normalAttackSkillLevel > 1) {
      agentSkillDinnies.map((agentSkillDinny) => {
        if (
          agentSkillDinny.level === skillLevelCondition.normalAttackSkillLevel
        ) {
          total_need_dinny += agentSkillDinny.amount;
        }
      });
    }

    if (skillLevelCondition && skillLevelCondition.avoidanceSkillLevel > 1) {
      agentSkillDinnies.map((agentSkillDinny) => {
        if (agentSkillDinny.level === skillLevelCondition.avoidanceSkillLevel) {
          total_need_dinny += agentSkillDinny.amount;
        }
      });
    }

    return withComma ? total_need_dinny.toLocaleString() : total_need_dinny;
  }
}
