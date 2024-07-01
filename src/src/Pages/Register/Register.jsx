import React, { useState } from "react";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [code, setCode] = useState("");

    const handleEmailSend = () => {
        // Doğrulama kodunu email ile gönderme işlemi burada edilmelidir
        // Bu örnekte sadece state'i deyistiririk
        // Gerçek uygulamada burada backend'e istek etmeliyem
        setEmailSent(true);
    };

    const handleRegister = () => {
        // Doğrulama kodunu backend'e göndererek kontrol etme ve qeyd olma  prosesi
        // API çağrısı burada etmeliyem
        const registrationData = {
            username,
            email,
            password,
            confirmPassword,
            code
        };

        // Burda bir API isteği edib kayıt işlemi etmeliyem
        // Burda navigate işlemi var, gerçek uygulamada API isteği ve req almaq
        console.log(registrationData);
        // API isteği başarılı olursa navigate işlemi etmeliyem
        navigate("/success");
    };

    return (
        <div className={styles.log}>
            <div className={styles.containerLeft}>
                <div className={styles.leftL}>
                </div>
            </div>

            <div className={styles.containerLog}>
                <div className={styles.rightL}>
                    <div className={styles.title}>
                        <h1>Qeydiyyatdan keç</h1>
                    </div>
                    <div className={styles.name}>
                        <input
                            type="text"
                            placeholder="İstifadəçi adı"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={emailSent}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={emailSent}
                        />
                        {emailSent && (
                            <input
                                type="text"
                                placeholder="Doğrulama kodu"
                                required
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        )}
                        <input
                            type="password"
                            placeholder="Şifrə"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Şifrəni təsdiqlə"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.button}>
                        {!emailSent ? (
                            <button onClick={handleEmailSend}>Doğrulama kodu göndər</button>
                        ) : (
                            <button onClick={handleRegister}>Qeydiyyatdan keç</button>
                        )}
                    </div>
                    <div className={styles.pass}>
                        <h3>
                            Artıq bir hesabınız var? <a href="/login">Daxil ol</a>
                        </h3>
                        <a href="" onClick={() => navigate('/')}>Ana Səhifə</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
