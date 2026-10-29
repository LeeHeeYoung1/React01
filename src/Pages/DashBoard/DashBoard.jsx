import styles from './DashBoard.module.css';

const DashBoard = () => {

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
            <td>3</td>
          </tr>
          <tr>
            <td>재고</td>
            <td>5</td>
          </tr>
          <tr>
            <td>주문</td>
            <td>4</td>
          </tr>
          <tr>
            <td>직원</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;