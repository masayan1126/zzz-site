export function calcNeedBatteryByDinny(dinny: number) {
  // 指定した金額のディニーを稼ぐために必要なバッテリーの数を計算する
  return Math.round(dinny / 1250);
}
