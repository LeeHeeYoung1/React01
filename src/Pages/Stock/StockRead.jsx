 import styles from './Stock.module.css';

const StockRead = ({stocks}) => {
    return (
      <div className={styles.content}>
        <h3>메뉴 목록</h3>

        <table border="1">
          <thead>
            <tr>
              <th>번호</th>
              <th>재고이름</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.stock}개</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default StockRead;