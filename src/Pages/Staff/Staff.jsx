import {useNavigate, Outlet} from 'react-router-dom';
import styles from './Staff.module.css';

const Staff = () => {

  const navi = useNavigate();

  return (
    <div>
      <div className={styles.topBar}>
        <button onClick={() => navi('/admin/staff/staffRead')}>목록</button>
        <button onClick={() => navi('/admin/staff/staffCreate')}>등록</button>
        <button onClick={() => navi('/admin/staff/staffUpdate')}>수정</button>
        <button onClick={() => navi('/admin/staff/staffDelete')}>삭제</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Staff;