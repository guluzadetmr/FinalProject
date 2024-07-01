import React, { useState } from "react";
import styles from "./ResetPassword.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || "";
    const [verificationCode, setVerificationCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleResetPassword = () => {
        // Backend'e parola sıfırlama isteği etmek
        // Bu kodu gerçek API çağrısı ile deyistirmek
        fetch('/api/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, verificationCode, newPassword }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setMessage("Parolun sıfırlanması uğurlu oldu.");
                navigate("/login");
            } else {
                setMessage("Parolun sıfırlanması xətası.");
            }
        });
    };

    return (
        <div className={styles.resetPassword}>
            <h1>Reset Password</h1>
            <input
                type="text"
                placeholder="Doğrulama kodu"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
            />
            <input
                type="password"
                placeholder="Yeni şifrə"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Reset Password</button>
            {message && <div className={styles.message}>{message}</div>}
        </div>
    );
};

export default ResetPassword;
