import PageTitle from "@/shared/components/PageTitle";
import Link from "next/link";

export default function PurchasingProcedure() {
  return (
    <div>
      <PageTitle title="購入手続き" />
      <Link href="/regular-application">戻る</Link>
      <Link href="/purchasing-confirm">次へ</Link>
    </div>
  );
}
