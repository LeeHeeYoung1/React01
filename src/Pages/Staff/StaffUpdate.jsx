import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Staff.module.css';

const StaffUpdate = ({ setStaffs, staffs }) => {

  const navi = useNavigate();

  const [staff, setStaff] = useState({
    id: '',
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    setStaffs(staffs.map((e) => {
      if (e.id == staff.id) {
        return { ...e, name: staff.name, phone: staff.phone };
      } else {
        return e;
      }
    }));
     setStaff({ id: '', name: '', phone: '' });
      navi('/admin/staff/staffRead');

  };

 
  return (
    <div className={styles.content}>
      <h3>메뉴 수정</h3>

      <input type="text" placeholder="수정할 메뉴 id" name="id" value={staff.id} onChange={handleChange} /><br></br>
      <input type="text" placeholder="새로운 메뉴이름" name="name" value={staff.name} onChange={handleChange} /><br></br>
      <input type="text" placeholder="새로운 메뉴가격" name="phone" value={staff.phone} onChange={handleChange} /><br></br>

      <button onClick={handleUpdate}>수정</button>
    </div>
  );
};

export default StaffUpdate;