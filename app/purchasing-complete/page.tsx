import PageTitle from "@/shared/components/PageTitle";
import Link from "next/link";

export default function PurchasingComplete() {
  return (
    <div>
      <PageTitle title="購入完了" />
      <Link href="/">戻る</Link>
      <Link href="/my-page">マイページへ</Link>
    </div>
  );
}
