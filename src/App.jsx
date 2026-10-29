import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import DashBoard from './Pages/DashBoard/DashBoard'
import MenuRead from './Pages/Menu/menuRead'
import MenuCreate from './Pages/Menu/menuCreate'
import MenuUpdate from './Pages/Menu/menuUpdate'
import MenuDelete from './Pages/Menu/menuDelete'
import Admin from './Pages/Admin/Admin'
import Menu from './Pages/Menu/Menu'


function App() {

  const [menus, setMenus] = useState([
    { id: 1, name: '아메리카노', price: 4500 },
    { id: 2, name: '카페라떼', price: 5000 },
    { id: 3, name: '바닐라라떼', price: 5500 },
    { id: 4, name: '딸기스무디', price: 6000 },
    { id: 5, name: '치즈케이크', price: 6500 },
  ]);

  const [stocks, setStocks] = useState([
    { id: 1, name: '원두 200g', stock: 25 },
    { id: 2, name: '바닐라 시럽 1L', stock: 10 },
    { id: 3, name: '종이컵 1박스', stock: 500 },
    { id: 4, name: '우유 1L', stock: 30 },
  ]);

  const [orders, setOrders] = useState([
    { id: 101, item: '아메리카노 2잔', total: 9000 },
    { id: 102, item: '카페라떼 1잔', total: 5000 },
    { id: 103, item: '치즈케이크 1개', total: 6500 },
    { id: 104, item: '바닐라라떼 1잔', total: 5500 },
    { id: 105, item: '딸기스무디 2잔', total: 12000 },
    { id: 106, item: '아메리카노 1잔, 카페라떼 1잔', total: 9500 },
  ]);

  const [staffs, setStaffs] = useState([
    { id: 1, name: '김철수', phone: '010-1234-5678' },
    { id: 2, name: '이영희', phone: '010-9876-5432' },
  ]);

  return (
    <>
   <Routes>
  <Route path="/" element={<Login />} />

  <Route path="/admin" element={<Admin />}>
    <Route path="dashBoard" element={<DashBoard />} />

    <Route path="menu" element={<Menu menus={menus} setMenus={setMenus} />}>
      <Route path="menuRead" element={<MenuRead menus={menus} />} />
      <Route path="menuCreate" element={<MenuCreate menus={menus} setMenus={setMenus} />} />
      <Route path="menuUpdate" element={<MenuUpdate menus={menus} setMenus={setMenus} />} />
      <Route path="menuDelete" element={<MenuDelete menus={menus} setMenus={setMenus} />} />
    </Route>
  </Route>
</Routes>

    {/* <Route path="/stock" element={<Stock stocks={stocks} setStocks={setStocks} />}>
      <Route index element={<StockRead stocks={stocks} />} />
      <Route path="stockCreate" element={<StockCreate />} />
      <Route path="stockUpdate" element={<StockUpdate />} />
      <Route path="stockDelete" element={<StockDelete />} />
    </Route>

    <Route path="/order" element={<Order orders={orders} setOrders={setOrders} />}>
      <Route index element={<OrderRead orders={orders} />} />
      <Route path="orderCreate" element={<OrderCreate />} />
      <Route path="orderUpdate" element={<OrderUpdate />} />
      <Route path="orderDelete" element={<OrderDelete />} />
    </Route>

    <Route path="/staff" element={<Staff staffs={staffs} setStaffs={setStaffs} />}>
      <Route index element={<StaffRead staffs={staffs} />} />
      <Route path="staffCreate" element={<StaffCreate />} />
      <Route path="staffUpdate" element={<StaffUpdate />} />
      <Route path="staffDelete" element={<StaffDelete />} />
    </Route> */}


    </>
  )
}

export default App;
