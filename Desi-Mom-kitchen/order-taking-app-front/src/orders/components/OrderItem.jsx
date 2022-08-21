import "./OrderItem.css";

const OrderItem = (props) => {
  return (
    <li className="place-item">
      <div className="place-item__info">
        <h2>{props.customerName}</h2>
        <h3>{props.phoneNumber}</h3>
        <p>{props.orderDetail}</p>
      </div>
      <div className="place-item__actions">
          <button>Print Receipt </button>
          <button>Email Receipt </button>
      </div>
    </li>
  );
};

export default OrderItem;
