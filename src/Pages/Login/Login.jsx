import React from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigation = useNavigate();
  return (
    <div className={styles.log}> 
      <div className={styles.containerLeft}>
        <div className={styles.leftL}>
        
        </div>
      </div>

      <div className={styles.containerLog}>
        <div className={styles.rightL}>
          <div className={styles.title}>
            <h1>Login</h1>
          </div>
          <div className={styles.name}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot Password?</a>
          </div>
          <div className={styles.button}>
            <button>LOGIN</button>
          </div>
          <div className={styles.pass}>
            <h3>
              Don't have an account? <a href="#">Register</a>
            </h3>
            <a href="" onClick={() => navigation('/')}>Ana Səhifə</a>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Login;