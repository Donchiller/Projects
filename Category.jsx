import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Category = () => {
  const categories = [
    {
      imgSrc: "https://cdn2.nutrabay.com/others/Category-Card-Concentrate-2024-05-31T17:25:16.png",
      title: "Whey Protein"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/Category-Card-Large-2024-05-31T17:25:34.png",
      title: "Whey Isolate"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/category-card_peanut-butter-large-2024-05-27T16:19:05.png",
      title: "Peanut Butter"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/Plant-Protein-Category-Card-2024-05-31T17:25:45.png",
      title: "Vegan Protein"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/category-card_l-carnitine-large-2024-05-27T16:18:22.png",
      title: "L Carnitine"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/category-card_arginine-large-2024-05-27T15:30:16.png",
      title: "L Arginine"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/category-card_glutamine-large-2024-05-27T16:17:42.png",
      title: "L Glutamine"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/category-card_citrulline-large-2024-05-27T16:16:41.png",
      title: "Citrulline"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/category-card_protein-bars-large-2024-05-27T16:19:54.png",
      title: "Protein Bars"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/category-card_testosterone-large-2024-05-27T16:20:12.png",
      title: "Testosterone Boosters"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/category-card_multi-vitamin-large-2024-05-27T16:18:38.png",
      title: "Vitamins"
    },
    {
      imgSrc: "https://cdn2.nutrabay.com/others/category-card_fish-oil-large-2024-05-27T16:17:15.png",
      title: "Omega Fats"
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row g-5"> {/* Add gap utility class here */}
        {categories.map((category, index) => (
          <div className="col-6 col-md-4 col-lg-2" key={index}>
            <div className="card text-center mb-3"> {/* Add bottom margin for spacing */}
              <img src={category.imgSrc} className="card-img-top" alt={category.title} />
              <div className="card-body">
                <h5 className="card-title">{category.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
