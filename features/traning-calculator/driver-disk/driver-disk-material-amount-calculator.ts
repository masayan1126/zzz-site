import { driverDiskExperiencePoints } from "@/features/agent-traning-calculator/constants/experience-point";

export class DriverDiskMaterialAmountCalculator {
  public calculate(level: number, rank: string) {
    const totalDriverDiskMaterialAmount = {
      A: 0,
      B: 0,
      C: 0,
    };

    // レベルが0の場合は、突破素材はかからない
    if (level === 0) {
      return totalDriverDiskMaterialAmount;
    }

    driverDiskExperiencePoints.map((driverDiskExperiencePoint) => {
      if (driverDiskExperiencePoint.level === level) {
        const targetRank = driverDiskExperiencePoint.amount;
        if (rank === "S") {
          totalDriverDiskMaterialAmount.A += targetRank.A;
          totalDriverDiskMaterialAmount.B += targetRank.B;
          totalDriverDiskMaterialAmount.C += targetRank.C;
        }
        // if (rank === "A") {
        //   totalDriverDiskMaterialAmount.A += targetRank.A;
        // }
        // if (rank === "B") {
        //   totalDriverDiskMaterialAmount.B += targetRank.B;
        // }
      }
    });

    return totalDriverDiskMaterialAmount;
  }
}
