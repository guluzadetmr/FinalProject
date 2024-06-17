import React, { useState } from "react";
import styles from "./Contact.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Advantages from "../../Components/Advantages/Advantages";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <div className={styles.contactformcontainer}>
        <h2>Bizimlə əlaqə saxlayın</h2>
        <form onSubmit={handleSubmit} className={styles.contactform}>
          <div className={styles.formrow}>
            <input
              type="text"
              name="firstName"
              placeholder="Adı"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Soyad"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Mesaj"
            className={styles.inputMsg}
            value={formData.message}
            onChange={handleChange}
            required

          />
          <button type="submit">Göndər</button>
        </form>
      </div>
      <Advantages />
      <Footer />
    </div>
  );
};

export default Contact;
