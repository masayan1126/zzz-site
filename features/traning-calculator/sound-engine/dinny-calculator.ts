import {
  soundEngineBreakThroughDinnies,
  agentCoreSkillDinnies,
  agentSkillDinnies,
} from "@/features/agent-traning-calculator/constants/dinny";

type SkillLevelCondition =
  | {
      normalAttackSkillLevel: number;
      avoidanceSkillLevel: number;
      supportSkillLevel: number;
      specialSkillLevel: number;
      collaborationSkillLevel: number;
    }
  | undefined;

export class DinnyCalculator {
  public calculate(
    level: number,
    containBreakThrough: boolean,
    rank: string,
    withComma: boolean = true
  ) {
    let total_need_dinny = 0;

    // レベルが0の場合は、ディニーはかからない
    if (level === 0) {
      return withComma ? total_need_dinny.toLocaleString() : total_need_dinny;
    }

    if (containBreakThrough) {
      soundEngineBreakThroughDinnies.map((soundEngineBreakThroughDinny) => {
        if (soundEngineBreakThroughDinny.level === level) {
          const targetRank = soundEngineBreakThroughDinny.amount;
          if (rank === "S") {
            total_need_dinny += targetRank.S;
          }
          if (rank === "A") {
            total_need_dinny += targetRank.A;
          }
          if (rank === "B") {
            total_need_dinny += targetRank.B;
          }
        }
      });
    }

    if (!containBreakThrough) {
      // 突破しない、コアスキルレベル指定なし、レベルが10の場合、ディニーはかからない
      if (level === 10) {
        return withComma ? total_need_dinny.toLocaleString() : total_need_dinny;
      }

      // 突破しない、レベルが20の場合、レベル10突破分のディニーがかかる
      if (level === 20) {
        const targetRank = soundEngineBreakThroughDinnies[2].amount;
        if (rank === "S") {
          total_need_dinny += targetRank.S;
        }

        if (rank === "A") {
          total_need_dinny += targetRank.A;
        }

        if (rank === "B") {
          total_need_dinny += targetRank.B;
        }
        // 突破しない、レベルが30の場合、レベル10突破分、レベル20突破分のディニーがかかる
      }

      if (level === 30) {
        const targetRank = soundEngineBreakThroughDinnies[3].amount;
        if (rank === "S") {
          total_need_dinny += targetRank.S;
        }

        if (rank === "A") {
          total_need_dinny += targetRank.A;
        }

        if (rank === "B") {
          total_need_dinny += targetRank.B;
        }
      }

      // 突破しない、レベルが40の場合、レベル10突破分、レベル20突破分、レベル30突破分のディニーがかかる
      if (level === 40) {
        const targetRank = soundEngineBreakThroughDinnies[4].amount;
        if (rank === "S") {
          total_need_dinny += targetRank.S;
        }

        if (rank === "A") {
          total_need_dinny += targetRank.A;
        }

        if (rank === "B") {
          total_need_dinny += targetRank.B;
        }
      }

      // 突破しない、レベルが50の場合、レベル10突破分、レベル20突破分、レベル30突破分、レベル40突破分のディニーがかかる
      if (level === 50) {
        const targetRank = soundEngineBreakThroughDinnies[5].amount;
        if (rank === "S") {
          total_need_dinny += targetRank.S;
        }

        if (rank === "A") {
          total_need_dinny += targetRank.A;
        }

        if (rank === "B") {
          total_need_dinny += targetRank.B;
        }
      }

      // 突破しない、レベルが60の場合、レベル10突破分、レベル20突破分、レベル30突破分、レベル40突破分、レベル50突破分のディニーがかかる
      if (level === 60) {
        const targetRank = soundEngineBreakThroughDinnies[6].amount;
        if (rank === "S") {
          total_need_dinny += targetRank.S;
        }

        if (rank === "A") {
          total_need_dinny += targetRank.A;
        }

        if (rank === "B") {
          total_need_dinny += targetRank.B;
        }
      }
    }

    return withComma ? total_need_dinny.toLocaleString() : total_need_dinny;
  }
}
