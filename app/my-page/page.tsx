// "use client";

import { SlowComponent } from "@/app/my-page/_slow";
import { UserList } from "@/app/my-page/_UserList";
import PageTitle from "@/shared/components/PageTitle";
import Link from "next/link";
import { Suspense } from "react";

export default function MyPageTop() {
  return (
    <div>
      <PageTitle title="マイページトップ" />
      <Suspense fallback={<div>Loading...</div>}>
        {/* <SlowComponent /> */}
        <UserList />
      </Suspense>
      <Link href="/my-page/subscriptions">定期一覧</Link>
    </div>
  );
}
