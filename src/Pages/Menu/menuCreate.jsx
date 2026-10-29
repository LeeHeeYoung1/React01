import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Menu.module.css';

  const MenuCreate = ({setMenus, menus}) => {

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

    const handleInsert = () => {
      setMenus([...menus, { id: menu.id, name: menu.name, price: menu.price}]);

      setMenu({ id: '', name: '', price: '' });
      navi('/admin/menu/menuRead');
    }

     return (
          <div className={styles.content}>
            <h3>메뉴 등록</h3>
    
             <input placeholder="메뉴 id" type="text" name="id" value={menu.id} onChange={handleChange} />
            <input type="text" placeholder="메뉴 이름" name="name" value={menu.name} onChange={handleChange} />
             <input type="text" placeholder="메뉴 가격" name="price" value={menu.price} onChange={handleChange} />
    
            <button onClick={handleInsert}>등록</button>
          </div>
        );

  }

  export default MenuCreate;