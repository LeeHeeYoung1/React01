import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Admin.module.css';

const Admin = () => {

  const navi = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.logoutBar}>
        매장 관리 시스템
        <button>로그아웃</button>
      </div>

      <div className={styles.bigBox}>
        <div className={styles.barBox}>
          <div className={styles.bar} onClick={() => navi('/admin/dashBoard')}>대시보드</div>
          <div className={styles.bar} onClick={() => navi('/admin/menu')}>메뉴관리</div>
          <div className={styles.bar} onClick={() => navi('/admin/stock')}>재고관리</div>
          <div className={styles.bar} onClick={() => navi('/admin/order')}>주문관리</div>
          <div className={styles.bar} onClick={() => navi('/admin/staff')}>직원관리</div>
        </div>
         <div className={styles.crudBox}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;