import styles from './DashBoard.module.css';

const DashBoard = ({menus, orders, stocks, staffs}) => {

  return (
    <div className={styles.content}>
      <table className={styles.manage} border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>갯수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>메뉴</td>
            <td>{menus.length}</td>
          </tr>
          <tr>
            <td>재고</td>
            <td>{stocks.length}</td>
          </tr>
          <tr>
            <td>주문</td>
            <td>{orders.length}</td>
          </tr>
          <tr>
            <td>직원</td>
            <td>{staffs.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;