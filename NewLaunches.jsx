import React from 'react';
import './NewLaunches.css'; // Assuming you'll create this CSS file for additional styles

const NewLaunches = () => {
  const brands = [
    {
      logo: "https://cdn2.nutrabay.com/marketing-journey/tata_1mg_logo-2025-04-24T12:18:10.jpg",
      name: "Tata 1mg"
    },
    {
      logo: "https://cdn2.nutrabay.com/marketing-journey/Aesthetic-Nutrition_logo-2025-03-31T17:33:01.jpg",
      name: "Aesthetic Nutrition"
    },
    {
      logo: "https://cdn2.nutrabay.com/marketing-journey/Gladful_logo-2025-03-07T10:21:21.jpg",
      name: "Gladful"
    },
    {
      logo: "https://cdn2.nutrabay.com/marketing-journey/setu-logo-black-2025-03-07T10:21:07.jpg",
      name: "Setu"
    },
    {
      logo: "https://cdn2.nutrabay.com/marketing-journey/Superyou_logo-2025-03-07T10:20:51.jpg",
      name: "SuperYou"
    },
    {
      logo: "https://cdn2.nutrabay.com/marketing-journey/Rasayanam_1-2025-02-16T22:49:04.jpg",
      name: "Rasayanam"
    },
    {
      logo: "https://cdn2.nutrabay.com/marketing-journey/Logo-guideline_SM-01-2-2025-03-26T12:12:34.jpg",
      name: "Sweetmate"
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row text-center">
        {brands.map((brand, index) => (
          <div className="col" key={index}>
            <div className="card shadow h-100">
              <img src={brand.logo} className="card-img-top" alt={brand.name} />
              <div className="card-body">
                <h5 className="card-title">{brand.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Heading below the cards */}
    </div>
  );
};

export default NewLaunches;
