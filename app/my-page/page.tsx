import PageTitle from "@/shared/components/PageTitle";
import Link from "next/link";

export default function MyPageTop() {
  return (
    <div>
      <PageTitle title="マイページトップ" />
      <Link href="/my-page/subscriptions">定期一覧</Link>
    </div>
  );
}
