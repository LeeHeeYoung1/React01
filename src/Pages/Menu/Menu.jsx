import {useNavigate, Outlet} from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {

  const navi = useNavigate();

  return (
    <div>
      <div className={styles.topBar}>
        <button onClick={() => navi('/admin/menu/menuRead')}>목록</button>
        <button onClick={() => navi('/admin/menu/menuCreate')}>등록</button>
        <button onClick={() => navi('/admin/menu/menuUpdate')}>수정</button>
        <button onClick={() => navi('/admin/menu/menuDelete')}>삭제</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Menu;