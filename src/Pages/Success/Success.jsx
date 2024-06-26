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
            <h1>Registration Successful!</h1>
            <p>Your account has been created successfully.</p>
            <button onClick={handleGoHome}>Go to Home Page</button>
        </div>
    );
};

export default Success;