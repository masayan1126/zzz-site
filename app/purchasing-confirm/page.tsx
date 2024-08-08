import PageTitle from "@/shared/components/PageTitle";
import Link from "next/link";

export default function PurchasingConfirm() {
  return (
    <div>
      <PageTitle title="購入確認" />
      <Link href="/purchasing-procedure">戻る</Link>
      <Link href="/purchasing-complete">次へ</Link>
    </div>
  );
}
