import React, { useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        // Simulate a login attempt (replace this with actual login logic)
        if (email === "test@example.com" && password === "password") {
            navigate("/dashboard");
        } else {
            setError("Yanlış email və ya şifrə.");
        }
    };

    return (
        <div className={styles.log}> 
            <div className={styles.containerLeft}>
                <div className={styles.leftL}></div>
            </div>

            <div className={styles.containerLog}>
                <div className={styles.rightL}>
                    <div className={styles.title}>
                        <h1>Daxil ol</h1>
                    </div>
                    <div className={styles.name}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Şifrə"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href="" onClick={() => navigate('/forgot-password')}>Parolu unutdunuz?</a>
                    </div>
                    {error && <div className={styles.error}>{error}</div>}
                    <div className={styles.button}>
                        <button onClick={handleLogin}>LOGIN</button>
                    </div>
                    <div className={styles.pass}>
                        <h3>
                            Hesabınız yoxdur? <a href="#">Qeydiyyatdan keç</a>
                        </h3>
                        <a href="" onClick={() => navigate('/')}>Ana Səhifə</a>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Login;
