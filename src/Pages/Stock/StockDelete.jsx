import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from './Stock.module.css';

const StockDelete = ({setStocks, stocks}) => {

  const navi = useNavigate();
  const [delTarget, setDelTarget] = useState('');

    const handleDelete = () => {


      setStocks(stocks.filter((e) => e.id != delTarget));
      setDelTarget('');
      navi('/admin/stock/stockRead');
    };

    return (
      <div className={styles.content}>
        <h3>메뉴 삭제</h3>

          <input type="text" placeholder="삭제할 재고 번호" value={delTarget} onChange={(e) => setDelTarget(e.target.value)}></input>


        <button onClick={handleDelete}>삭제</button>
      </div>
    );
  };

  export default StockDelete;