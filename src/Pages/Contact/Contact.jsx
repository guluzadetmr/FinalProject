// import React, { useState } from "react";
// import styles from "./Contact.module.scss";
// import Header from "../../Components/Header/Header";
// import Footer from "../../Components/Footer/Footer";
// import Advantages from "../../Components/Advantages/Advantages";
// import { BiSolidMapAlt } from "react-icons/bi";
// import { IoMdCall } from "react-icons/io";
// import { IoMdSend } from "react-icons/io";
// import Dropdowns from "../../Components/Dropdowns/Dropdowns";
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div>
//       <Header />
//       <Dropdowns />
//       <div className={styles.contacts}>
//         <div className={styles.containerContacts}>
//           <div className={styles.border}>
//             <iframe
//               title="Google Harita"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2701838271046!2d49.845388!3d40.380704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da74efacb81%3A0xcb1e7b9e4819965a!2zOVJKVytDNjgsIEJha8Sx!5e0!3m2!1saz!2saz!4v1686832140760!5m2!1saz!2saz"
//               width="100%"
//               height="100%"
//               style={{ border: 0, position: "absolute", overflow: "hidden" }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </div>

//       <div className={styles.contactformcontainer}>
//         <h2>Bizimlə əlaqə saxlayın</h2>
//         <form onSubmit={handleSubmit} className={styles.contactform}>
//           <div className={styles.formrow}>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Adı"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Soyad"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <input
//             type="email"
//             name="email"
//             placeholder="E-mail"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Mesaj"
//             className={styles.inputMsg}
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Göndər</button>
//         </form>
//       </div>

//       <Advantages />
//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import styles from "./Contact.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Advantages from "../../Components/Advantages/Advantages";
import { BiSolidMapAlt } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import Dropdowns from "../../Components/Dropdowns/Dropdowns";

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
      <Dropdowns />
      <div className={styles.contacts}>
        <div className={styles.containerContacts}>
          <div className={styles.border}>
            <iframe
              title="Google Harita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2701838271046!2d49.845388!3d40.380704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da74efacb81%3A0xcb1e7b9e4819965a!2zOVJKVytDNjgsIEJha8Sx!5e0!3m2!1saz!2saz!4v1686832140760!5m2!1saz!2saz"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", overflow: "hidden" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

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
      </div>
      <Advantages />
      <Footer />
    </div>
  );
};

export default Contact;
