import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../Redux/Slices/AuthSlice';
import styles from './ChangePassword.module.scss'

const ChangePasswordPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleChangePassword = () => {
    if (password.length < 5) {
      setError('Parol ən azı 5 simvol uzunluğunda olmalıdır');
    } else {
      setError('');
      // Dispatch action to change password
      dispatch(changePassword(password));
    }
  };

  return (
    <div className={styles.changePasswordPage}>
      <h1>Şifrəni dəyiş</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Yeni şifrə"
      />
      <button onClick={handleChangePassword}>Şifrəni dəyiş</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ChangePasswordPage;