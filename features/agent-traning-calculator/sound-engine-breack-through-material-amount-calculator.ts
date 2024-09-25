import { soundEngineBreakThroughMaterials } from "@/features/agent-traning-calculator/constants/material";

export class SoundEngineBreakThroughMaterialAmountCalculator {
  public calculate(
    level: number,
    selectedRank: string,
    containBreakThrough: boolean
  ) {
    const totalSoundEngineBreakThroughMaterialAmount = {
      A: 0,
      B: 0,
      C: 0,
    };

    // レベルが0の場合は、突破素材はかからない
    if (level === 0) {
      return totalSoundEngineBreakThroughMaterialAmount;
    }

    // レベルが10の場合かつ、突破しない場合は素材はかからない
    if (level === 10 && !containBreakThrough) {
      return totalSoundEngineBreakThroughMaterialAmount;
    }

    if (containBreakThrough) {
      soundEngineBreakThroughMaterials.map(
        (soundEngineBreakThroughMaterial) => {
          if (soundEngineBreakThroughMaterial.level === level) {
            if (selectedRank === "S") {
              totalSoundEngineBreakThroughMaterialAmount.A +=
                soundEngineBreakThroughMaterial.material.S.A;
              totalSoundEngineBreakThroughMaterialAmount.B +=
                soundEngineBreakThroughMaterial.material.S.B;
              totalSoundEngineBreakThroughMaterialAmount.C +=
                soundEngineBreakThroughMaterial.material.S.C;
            }

            if (selectedRank === "A") {
              totalSoundEngineBreakThroughMaterialAmount.A +=
                soundEngineBreakThroughMaterial.material.A.A;
              totalSoundEngineBreakThroughMaterialAmount.B +=
                soundEngineBreakThroughMaterial.material.A.B;
              totalSoundEngineBreakThroughMaterialAmount.C +=
                soundEngineBreakThroughMaterial.material.A.C;
            }

            if (selectedRank === "B") {
              totalSoundEngineBreakThroughMaterialAmount.A +=
                soundEngineBreakThroughMaterial.material.B.A;
              totalSoundEngineBreakThroughMaterialAmount.B +=
                soundEngineBreakThroughMaterial.material.B.B;
              totalSoundEngineBreakThroughMaterialAmount.C +=
                soundEngineBreakThroughMaterial.material.B.C;
            }
          }
        }
      );
    }

    // レベル20,30,40,50の場合でかつ、突破しない場合は、自動的に加算する

    if (!containBreakThrough) {
      soundEngineBreakThroughMaterials.map(
        (soundEngineBreakThroughMaterial) => {
          if (soundEngineBreakThroughMaterial.level === level) {
            if (selectedRank === "S") {
              totalSoundEngineBreakThroughMaterialAmount.A +=
                soundEngineBreakThroughMaterial.material.S.A;
              totalSoundEngineBreakThroughMaterialAmount.B +=
                soundEngineBreakThroughMaterial.material.S.B;
              totalSoundEngineBreakThroughMaterialAmount.C +=
                soundEngineBreakThroughMaterial.material.S.C;
            }

            if (selectedRank === "A") {
              totalSoundEngineBreakThroughMaterialAmount.A +=
                soundEngineBreakThroughMaterial.material.A.A;
              totalSoundEngineBreakThroughMaterialAmount.B +=
                soundEngineBreakThroughMaterial.material.A.B;
              totalSoundEngineBreakThroughMaterialAmount.C +=
                soundEngineBreakThroughMaterial.material.A.C;
            }

            if (selectedRank === "B") {
              totalSoundEngineBreakThroughMaterialAmount.A +=
                soundEngineBreakThroughMaterial.material.B.A;
              totalSoundEngineBreakThroughMaterialAmount.B +=
                soundEngineBreakThroughMaterial.material.B.B;
              totalSoundEngineBreakThroughMaterialAmount.C +=
                soundEngineBreakThroughMaterial.material.B.C;
            }
          }
        }
      );
    }

    return totalSoundEngineBreakThroughMaterialAmount;
  }
}
