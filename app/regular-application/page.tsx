import Link from "next/link";
import PageTitle from "../../shared/components/PageTitle";

export default function RegularApplication() {
  return (
    <div>
      <PageTitle title="申し込み・定期・商品選択・お届け頻度" />
      <Link href="/">戻る</Link>
      <Link href="/purchasing-procedure">次へ</Link>
    </div>
  );
}
