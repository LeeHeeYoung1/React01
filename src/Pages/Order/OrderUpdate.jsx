import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Order.module.css';

const OrderUpdate = ({ setOrders, orders }) => {

  const navi = useNavigate();

  const [order, setOrder] = useState({
    id: '',
    item: '',
    total: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    setOrders(orders.map((e) => {
      if (e.id == order.id) {
        return { ...e, item: order.item, total: order.total };
      } else {
        return e;
      }
    }));
     setOrder({ id: '', item: '', total: '' });
      navi('/admin/order/orderRead');

  };

 
  return (
    <div className={styles.content}>
      <h3>메뉴 수정</h3>

      <input type="text" placeholder="수정할 메뉴 id" name="id" value={order.id} onChange={handleChange} /><br></br>
      <input type="text" placeholder="새로운 메뉴이름" name="item" value={order.item} onChange={handleChange} /><br></br>
      <input type="text" placeholder="새로운 메뉴가격" name="total" value={order.total} onChange={handleChange} /><br></br>

      <button onClick={handleUpdate}>수정</button>
    </div>
  );
};

export default OrderUpdate;