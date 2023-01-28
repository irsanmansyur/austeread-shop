import CardOrderUser from "@client/product/card-order-user";

export default function OrdersUser() {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {[1, 2].map((i) => {
          return <CardOrderUser key={i} />;
        })}
      </div>
    </div>
  );
}
