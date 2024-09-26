import { driverDiskDinnies } from "@/features/agent-traning-calculator/constants/dinny";

export class DinnyCalculator {
  public calculate(level: number, rank: string, withComma: boolean = true) {
    let total_need_dinny = 0;

    // レベルが0の場合は、ディニーはかからない
    if (level === 0) {
      return withComma ? total_need_dinny.toLocaleString() : total_need_dinny;
    }

    driverDiskDinnies.map((driverDiskDinny) => {
      if (driverDiskDinny.level === level) {
        const targetRank = driverDiskDinny.amount;
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

    return withComma ? total_need_dinny.toLocaleString() : total_need_dinny;
  }
}
