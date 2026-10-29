 import styles from './Menu.module.css';

const MenuRead = ({menus}) => {
    return (
      <div className={styles.content}>
        <h3>메뉴 목록</h3>

        <table border="1">
          <thead>
            <tr>
              <th>번호</th>
              <th>메뉴명</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.price}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default MenuRead;