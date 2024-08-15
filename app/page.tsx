"use client";

import PageTitle from "@/shared/components/PageTitle";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <PageTitle title="トップ" />

      <Link href="/regular-application">申し込み</Link>
    </main>
  );
}
