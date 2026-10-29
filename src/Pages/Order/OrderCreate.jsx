import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Order.module.css';

  const OrderCreate = ({setOrders, orders}) => {

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

    const handleInsert = () => {
      setOrders([...orders, { id: order.id, item: order.item, total: order.total}]);

      setOrder({ id: '', item: '', total: '' });
      navi('/admin/order/orderRead');
    }

     return (
          <div className={styles.content}>
            <h3>메뉴 등록</h3>
    
            <input placeholder="메뉴 id" type="text" name="id" value={order.id} onChange={handleChange} />
            <input type="text" placeholder="메뉴 이름" name="item" value={order.item} onChange={handleChange} />
            <input type="text" placeholder="메뉴 가격" name="total" value={order.total} onChange={handleChange} />
    
            <button onClick={handleInsert}>등록</button>
          </div>
        );

  }

  export default OrderCreate;