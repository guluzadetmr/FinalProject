// import React, { useState } from 'react';
// import styles from './ProfileEdit.module.scss';

// const ProfileEdit = () => {
//     const [username, setUsername] = useState("John Doe");
//     const [email, setEmail] = useState("john.doe@example.com");

//     const handleSave = () => {
//         // Save profile information
//         console.log('Profil yadda saxlandı:', { username, email });
//         alert('Profil uğurla yeniləndi!');
//     };

//     return (
//         <div className={styles.profileEdit}>
//             <h1>Profilə düzəliş et</h1>
//             <div>
//                 <label>Istifadəçi adı:</label>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <button onClick={handleSave}>Yadda saxla</button>
//         </div>
//     );
// };

// export default ProfileEdit;

import React, { useState } from 'react';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');

    const handleSaveProduct = () => {
        // Save product information (simulated)
        console.log('Məhsul qeyd edildi', { productName, productPrice, productDescription, productCategory });
        alert('Məhsul uğurla əlavə edildi!');
        // Eklenen ürünü veritabanına kaydetme veya başka işlemler yapılabilir.
    };

    return (
        <div className={styles.dashboard}>
            <h1>Admin panel</h1>
            <div>
                <label>Məhsulun adı:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div>
                <label>Məhsulun qiyməti:</label>
                <input
                    type="text"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Məhsul təsviri:</label>
                <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Məhsul Kateqoriyası:</label>
                <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                >
                    <option value="">Kategori Seçiniz</option>
                    <option value="electronics">Elektronik</option>
                    <option value="phones">Telefon</option>
                    <option value="equipment">Məişət əşyaları</option>
                    {/* Diğer kategori seçenekleri buraya eklenebilir */}
                </select>
            </div>
            <button onClick={handleSaveProduct}>Məhsulu Saxla</button>
        </div>
    );
};

export default Dashboard;
