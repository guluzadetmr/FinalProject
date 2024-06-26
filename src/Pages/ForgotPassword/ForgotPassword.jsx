import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSendCode = () => {
        // Backend'e e-posta gönderme isteği yapın
        // Bu kodu gerçek API çağrısı ile değiştirin
        fetch('/api/send-verification-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setMessage("Doğrulama kodu emailinizə göndərildi.");
                navigate("/reset-password", { state: { email } });
            } else {
                setMessage("Doğrulama kodunu göndərərkən xəta baş verdi.");
            }
        });
    };

    return (
        <div className={styles.forgotPassword}>
            <h1>Parolu Unutdum</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendCode}>Doğrulama kodunu göndər</button>
            {message && <div className={styles.message}>{message}</div>}
        </div>
    );
};

export default ForgotPassword;
