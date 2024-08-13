import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function Page() {
  return (
    <div>
      <h1>404ページ</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link href={"/"}>{"トップページに戻る"}</Link>
    </div>
  );
}
