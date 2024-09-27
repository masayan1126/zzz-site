import { calcNeedBatteryByDinny } from "@/features/shared/battery-calculator";
import { useCallback, useState } from "react";

const useBattery = () => {
  const [needBatteryForDinny, setNeedBatteryForDinny] = useState<number>(0);

  const calcNeedBatteryForDinny = useCallback((dinny: number | string) => {
    if (typeof dinny === "string") {
      return 0;
    }
    return calcNeedBatteryByDinny(dinny);
  }, []);

  return {
    needBatteryForDinny,
    setNeedBatteryForDinny,
    calcNeedBatteryForDinny,
  };
};

export default useBattery;
