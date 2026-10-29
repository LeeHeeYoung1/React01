import styles from './DashBoard.module.css';
import {outlet, Routes, Route} from 'react-router-dom'

const DashBoard = () => {

  const Index = () => {
     <div class="content">
              <table class="manage" border="1">
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
  }

  return(
    <>
     <div className={styles.container}>
        <div className={styles.logoutBar}>매장 관리 시스템<button>로그아웃</button></div>
        <div className={styles.bigBox}>
          <div className={styles.barBox}>
          <div className={styles.bar}>대시보드</div>
          <div className={styles.bar}>메뉴관리</div>
          <div className={styles.bar}>재고관리</div>
          <div className={styles.bar}>주문관리</div>
          <div className={styles.bar}>직원관리</div>
          </div>
          <div className={styles.curdBox}>
             <Outlet />
          </div>
        </div>
     </div> 

    <Routes>
      <Route index element={<Index />}></Route>
    </Routes>
    </>
  );
}

export default DashBoard;