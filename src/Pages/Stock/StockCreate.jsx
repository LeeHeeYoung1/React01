import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Stock.module.css';

  const StockCreate = ({setStocks, stocks}) => {

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

    const handleInsert = () => {
      setStocks([...stocks, { id: stock.id, name: stock.name, stock : stock.stock}]);

      setStock({ id: '', name: '', stock: '' });
      navi('/admin/stock/stockRead');
    }

     return (
          <div className={styles.content}>
            <h3>메뉴 등록</h3>
    
             <input placeholder="재고 id" type="text" name="id" value={stock.id} onChange={handleChange} />
            <input type="text" placeholder="재고 이름" name="name" value={stock.name} onChange={handleChange} />
             <input type="text" placeholder="재고 수량" name="stock" value={stock.stock} onChange={handleChange} />
    
            <button onClick={handleInsert}>등록</button>
          </div>
        );

  }

  export default StockCreate;