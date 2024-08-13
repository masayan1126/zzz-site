import PageTitle from "@/shared/components/PageTitle";

type SubscriptionDetailParams = {
  params: {
    subscriptionId: string;
  };
};

export default function SubscriptionDetail({
  params,
}: SubscriptionDetailParams) {
  return (
    <div>
      <PageTitle title="定期詳細" />
      <p>定期ID: {params.subscriptionId}</p>
    </div>
  );
}
