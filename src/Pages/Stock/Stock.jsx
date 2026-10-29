import {useNavigate, Outlet} from 'react-router-dom';
import styles from './Stock.module.css';

const Stock = () => {

  const navi = useNavigate();

  return (
    <div>
      <div className={styles.topBar}>
        <button onClick={() => navi('/admin/stock/stockRead')}>목록</button>
        <button onClick={() => navi('/admin/stock/stockCreate')}>등록</button>
        <button onClick={() => navi('/admin/stock/stockUpdate')}>수정</button>
        <button onClick={() => navi('/admin/stock/stockDelete')}>삭제</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Stock;