import {useNavigate, Outlet} from 'react-router-dom';
import styles from './Order.module.css';

const Order = () => {

  const navi = useNavigate();

  return (
    <div>
      <div className={styles.topBar}>
        <button onClick={() => navi('/admin/order/orderRead')}>목록</button>
        <button onClick={() => navi('/admin/order/orderCreate')}>등록</button>
        <button onClick={() => navi('/admin/order/orderUpdate')}>수정</button>
        <button onClick={() => navi('/admin/order/orderDelete')}>삭제</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Order;