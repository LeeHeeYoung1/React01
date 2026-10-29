import { useNavigate } from "react-router-dom";
import { useState } from 'react'

const Staff = ({staffs, setStaffs}) => {

  const List = () => {
    return (
      <>
      <table border={1}>
        <thead>
          <tr>
            <th>직원 번호</th>
            <th>이름</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {
            staffs.map((e,i) => {
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.phone}</td>
              </tr>
            })
          }
        </tbody>
        </table>
      </>
    )
  }

  const Add = () => {

    const navi = useNavigate();

    const [staff, setStaff] = useState({
      id:"", name:"", phone:""
    });

    const handleText = (e) => {
      const {name, value} = e.target;
      setStaff(prev => ({...prev, [name]:value}))
    }
    const Addbtn = () => {
      setStaffs([...prev, staff]);
      navi("list");
      setStaff({id:"", name:"", phone:""})
    }

    return (
      <>
        <input 
        type='number' 
        placeholder='input id to add' 
        name='id'
        onChange={handleText}
        />
        <input 
        type='number' 
        placeholder='input name to add' 
        name='name'
        onChange={handleText}
        />
        <input 
        type='number' 
        placeholder='input phone to add' 
        name='phone'
        onChange={handleText}
        />
        <button onClick={Addbtn}>Add</button>
      </>
    )
  }

  const Edit = () => {

    return(
      <>
        <input 
        type='number' 
        placeholder='input id to edit' 
        name='id'
        onChange={handelText}
        />
        <input 
        type='text' 
        placeholder='input name to edit' 
        name='name'
        onChange={handelText}
        />
        <input 
        type='text' 
        placeholder='input phone to edit' 
        name='phone'
        onChange={handelText}
        />
        <button onClick={handleEdit}>Edit</button>
      </>
    )
  }

  const Del = () => {
    return(
      <>
      </>
    )
  }

  return(
    <>
      <div className={styles.header}>
        <div onClick={()=>{navi('list')}}>목록(Read)</div>
        <div onClick={()=>{navi('add')}}>등록(Create)</div>
        <div onClick={()=>{navi('edit')}}>수정(Update)</div>
        <div onClick={()=>{navi('del')}}>삭제(Delete)</div>
      </div>
      <Outlet />

      <Routes>
          <Route path='list' element={<List />}></Route>
          <Route path='add' element={<Add />}></Route>
          <Route path='edit' element={<Edit />}></Route>
          <Route path='del' element={<Del />}></Route>
      </Routes>
    </>
  )
}

export default Staff;