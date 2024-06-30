import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Success.module.scss";

const Success = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className={styles.success}>
            <h1>Qeydiyyat Uğurludur!</h1>
            <p>Hesabınız uğurla yaradıldı.</p>
            <button onClick={handleGoHome}>Ana Səhifəyə keçin</button>
        </div>
    );
};

export default Success;