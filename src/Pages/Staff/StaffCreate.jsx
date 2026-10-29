import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Staff.module.css';

  const StaffCreate = ({setStaffs, staffs}) => {

    const navi = useNavigate();

      const [staff, setstaff] = useState({
        id: '',
        name: '',
        phone: ''
      });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setstaff((prev) => ({ ...prev, [name]: value }));
    };

    const handleInsert = () => {
      setStaffs([...staffs, { id: order.id, name: order.name, phone: order.phone}]);

      setstaff({ id: '', name: '', phone: '' });
      navi('/admin/staff/staffRead');
    }

     return (
          <div className={styles.content}>
            <h3>메뉴 등록</h3>
    
            <input placeholder="메뉴 id" type="text" name="id" value={staff.id} onChange={handleChange} />
            <input type="text" placeholder="메뉴 이름" name="name" value={staff.name} onChange={handleChange} />
            <input type="text" placeholder="메뉴 가격" name="phone" value={staff.phone} onChange={handleChange} />
    
            <button onClick={handleInsert}>등록</button>
          </div>
        );

  }

  export default StaffCreate;