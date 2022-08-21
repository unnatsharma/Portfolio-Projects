import Card from "../../shared/components/UIElements/Card";
import OrderItem from "./OrderItem";
import "./OrderList.css";

const OrderList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Order Found</h2>
          <button>Create Order </button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((order) => (
        <OrderItem
          key={order.id}
          id={order.id}
          customerName={order.customerName}//here consider as title
          phoneNumber={order.phoneNumber}
          creatorId={order.creator}
          orderDetail={order.orderDetail}
        />
      ))}
    </ul>
  );
};

export default OrderList;
