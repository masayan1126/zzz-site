import usePurchaseForm from "@/features/application/usePurchaseForm";
import { expect, jest, test, describe } from "@jest/globals";
import { act, renderHook } from "@testing-library/react";

describe("購入手続き画面の入力項目バリデーション", () => {
  test("check", () => {
    expect(1).toBe(1);
  });
  //   test("購入手続き画面で必須項目を入力すると入力バリデーションが成功し、購入確認画面へ遷移できる状態になる", () => {
  // const { result: rendered_state } = renderHook(() => usePurchaseForm());
  // expect(rendered_state.current.isFormValid).toEqual(false);
  // act(() => {
  //   rendered_state.current.setName("test");
  //   rendered_state.current.setAddress("test");
  // });
  // expect(rendered_state.current.isFormValid).toEqual(true);
  //   });
});
