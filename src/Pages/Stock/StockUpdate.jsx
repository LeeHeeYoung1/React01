import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Stock.module.css';

const StockUpdate = ({ setStocks, stocks }) => {

  const navi = useNavigate();

  const [stock, setStock] = useState({
    id: '',
    name: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    setStocks(stocks.map((e) => {
      if (e.id == Number(stock.id)) {
        return { ...e, name: stock.name, stock: stock.stock };
      } else {
        return e;
      }
    }));
     setStock({ id: '', name: '', stock: '' });
      navi('/admin/stock/stockRead');

  };

 
  return (
    <div className={styles.content}>
      <h3>메뉴 수정</h3>

      <input type="text" placeholder="수정할 메뉴 id" name="id" value={stock.id} onChange={handleChange} /><br></br>
      <input type="text" placeholder="새로운 재고이름" name="name" value={stock.name} onChange={handleChange} /><br></br>
      <input type="text" placeholder="새로운 재고수량" name="stock" value={stock.stock} onChange={handleChange} /><br></br>

      <button onClick={handleUpdate}>수정</button>
    </div>
  );
};

export default StockUpdate;