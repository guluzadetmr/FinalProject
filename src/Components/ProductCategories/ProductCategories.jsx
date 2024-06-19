import React from "react";
import styles from "./ProductCategories.module.scss";

const categories = [
  {
    id: 1,
    title: "Böyük məişət texnikası",
    description: "300-dən çox iri və kiçik məişət texnikası",
    image: "https://mstore.az/public/img/bg/Homepage2.png",
    bgColor: "#d91d4b",
  },
  {
    id: 2,
    title: "Smartfonlar",
    description: "Ən yeni modellər, ən son texnologiya",
    image: "https://mstore.az/public/img/bg/Homepage3.png",
    bgColor: "#d91d4b",
  },
  {
    id: 3,
    title: "Televizorlar",
    description: "Ən yeni LED televizorlar",
    image: "https://mstore.az/public/img/bg/Homepage4.png",
    bgColor: "#004aad",
  },
  {
    id: 4,
    title: "Aksessuarlar",
    description: "Kompüter və telefon aksessuarlarının geniş seçimi",
    image: "https://mstore.az/public/img/bg/Homepage5.png",
    bgColor: "#004aad",
  },
  {
    id: 5,
    title: "Kompüter texnikası",
    description: "İş və oyun kompüterlərinin geniş assortimenti",
    image: "https://mstore.az/public/img/bg/Homepage6.png",
    bgColor: "#004aad",
  },
];

const ProductCategories = () => {
  return (
    <div className={styles.category}>
      <div className={styles.container}>
        <div className={styles.question}>
          <h2>Nə almaq istəyirsiniz?</h2>
        </div>
        <div className={styles.cardsWrapper}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={styles.card}
              style={{ backgroundColor: category.bgColor }}
            >
              <div className={styles.text}>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <img src={category.image} alt={category.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
