import { useState } from "react";

export type TotalAgentBreakThroughMaterialAmount = {
  A: number;
  B: number;
  C: number;
};

const useBreakThrough = () => {
  const [isBreakThrough, setIsBreakThrough] = useState<boolean>(false);
  const [
    needAgentBreakThroughMaterialAmount,
    setNeedAgentBreakThroughMaterialAmount,
  ] = useState<TotalAgentBreakThroughMaterialAmount>({
    A: 0,
    B: 0,
    C: 0,
  });

  const handleIsBreakThroughChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    selectedLevel: number
  ) => {
    if (selectedLevel === 60) {
      alert("レベル60を指定している場合、突破できません");
      return;
    }
    setIsBreakThrough(!isBreakThrough);
  };

  return {
    isBreakThrough,
    setIsBreakThrough,
    handleIsBreakThroughChange,
    needAgentBreakThroughMaterialAmount,
    setNeedAgentBreakThroughMaterialAmount,
  };
};

export default useBreakThrough;
