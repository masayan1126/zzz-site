import { PurchasingConfirmButtonSection } from "@/app/purchasing-confirm/PurchasingConfirmButtonSection";
import PageTitle from "@/shared/components/PageTitle";

export default function PurchasingConfirm() {
  return (
    <div>
      <PageTitle title="購入確認" />
      <PurchasingConfirmButtonSection />
    </div>
  );
}
