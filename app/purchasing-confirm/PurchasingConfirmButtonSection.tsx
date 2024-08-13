import Link from "next/link";

export function PurchasingConfirmButtonSection() {
  return (
    <>
      <Link href="/purchasing-procedure">戻る</Link>
      <Link href="/purchasing-complete" replace>
        次へ
      </Link>
    </>
  );
}
