import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfilePicture } from '../../Redux/Slices/AuthSlice';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload and dispatch action to update profile picture
      dispatch(updateProfilePicture(file));
    }
  };

  return (
    <div className={styles['profile-page']}>
      <Link to="/" className={styles['home-link']}>Home</Link>
      <h1>Profile</h1>
      <div className={styles['profile-picture-container']}>
        <img src={user?.profilePicture || '/path/to/default/avatar.jpg'} alt="Profile" />
        <label htmlFor="profilePictureInput">Change Profile Picture</label>
        <input
          type="file"
          id="profilePictureInput"
          onChange={handleProfilePictureChange}
        />
      </div>
    </div>
  );
};

export default ProfilePage;