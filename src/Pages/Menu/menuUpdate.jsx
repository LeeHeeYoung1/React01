import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Menu.module.css';

const MenuUpdate = ({ setMenus, menus }) => {

  const navi = useNavigate();

  const [menu, setMenu] = useState({
    id: '',
    name: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenu((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    setMenus(menus.map((e) => {
      if (e.id == Number(menu.id)) {
        return { ...e, name: menu.name, price: menu.price };
      } else {
        return e;
      }
    }));
     setMenu({ id: '', name: '', price: '' });
      navi('/admin/menu/menuRead');

  };

 
  return (
    <div className={styles.content}>
      <h3>메뉴 수정</h3>

      <input type="text" placeholder="수정할 메뉴 id" name="id" value={menu.id} onChange={handleChange} /><br></br>
      <input type="text" placeholder="새로운 메뉴이름" name="name" value={menu.name} onChange={handleChange} /><br></br>
      <input type="text" placeholder="새로운 메뉴가격" name="price" value={menu.price} onChange={handleChange} /><br></br>

      <button onClick={handleUpdate}>수정</button>
    </div>
  );
};

export default MenuUpdate;