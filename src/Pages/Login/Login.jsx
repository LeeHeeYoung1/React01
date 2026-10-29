import { useNavigate } from "react-router-dom";
import styles from './Login.module.css'

const Login = () => {

  const navi = useNavigate();

  return (
      <div className={styles.container}>
        <fieldset className={styles.mainBox}>
          <legend>로그인</legend>
          <p>매장 관리 시스템 로그인</p>
          <input type='text' placeholder='id를 입력하세요'></input><br></br>
          <input type='password' placeholder='pw를 입력하세요'></input><br></br>
          <button onClick={()=>{navi("/dashBoard")}}>로그인</button>
        </fieldset>
      </div>
  )
}

export default Login;