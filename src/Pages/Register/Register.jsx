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
        // Doğrulama kodunu email ile gönderme işlemi burada yapılmalı
        // Bu örnekte sadece state'i değiştiriyoruz
        // Gerçek uygulamada burada backend'e istek yapmanız gerekecek
        setEmailSent(true);
    };

    const handleRegister = () => {
        // Doğrulama kodunu backend'e göndererek kontrol etme ve kayıt işlemi
        // API çağrısı burada yapılmalı
        const registrationData = {
            username,
            email,
            password,
            confirmPassword,
            code
        };

        // Burada bir API isteği yaparak kayıt işlemi gerçekleştirilmeli
        // Bu örnekte sadece navigate işlemi var, gerçek uygulamada API isteği ve yanıt kontrolü olmalı
        console.log(registrationData);
        // API isteği başarılı olursa navigate işlemi yapılmalı
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
