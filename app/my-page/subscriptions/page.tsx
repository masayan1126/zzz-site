import PageTitle from "@/shared/components/PageTitle";
import Link from "next/link";

export default function Subscriptions() {
  return (
    <div>
      <PageTitle title="定期一覧" />
      <ul>
        <li>
          <Link href="/my-page/subscriptions/1">定期1</Link>
        </li>
        <li>
          <Link href="/my-page/subscriptions/2">定期2</Link>
        </li>
        <li>
          <Link href="/my-page/subscriptions/3">定期3</Link>
        </li>
      </ul>
    </div>
  );
}
