import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const WheyProtein = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);

  // Fetch data from JSON Server
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/wheyProducts")
  //     .then((res) => {
  //       const cleanData = res.data.filter(
  //         (item) =>
  //           item.name && item.price && item.category && item.brand && item.image
  //       );
  //       setProducts(cleanData);
  //     })
  //     .catch((err) => console.error("Error fetching products:", err));
  // }, []);
  const fetchWheyProtienProduct = async () => {
    const response = await axios.get("http://localhost:3000/wheyProducts");
    console.log("Whey Protien Products", response.data);
    setProducts(response.data);
  };
  useEffect(() => {
    fetchWheyProtienProduct();
  }, []);

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesDiscount =
      selectedDiscounts.length === 0 ||
      selectedDiscounts.some((d) => {
        const minDiscount = parseInt(d);
        return product.discount && product.discount >= minDiscount;
      });
    return matchesCategory && matchesPrice && matchesBrand && matchesDiscount;
  });

  // Filter options
  const categories = [
    "All",
    "Whey Protein",
    "Mass Gainers",
    "Vitamins",
    "Pre-Workouts",
  ];
  const brands = ["Nutrabay", "Optimum Nutrition", "MuscleBlaze", "Dymatize"];
  const discountOptions = ["10","20"];

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleDiscountChange = (discount) => {
    setSelectedDiscounts((prev) =>
      prev.includes(discount)
        ? prev.filter((d) => d !== discount)
        : [...prev, discount]
    );
  };

  return (
    <div className="container py-5" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="row">
        {/* Sidebar with filters */}
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-sm p-3">
            <h5 className="fw-bold mb-3">Categories</h5>
            <ul className="list-group list-group-flush mb-4">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`list-group-item border-0 p-2 ${
                    selectedCategory === category ? "bg-light fw-bold" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  style={{ cursor: "pointer" }}
                >
                  {category}
                </li>
              ))}
            </ul>

            {/* Brand filter */}
            <h5 className="fw-bold mb-3">Brands</h5>
            {brands.map((brand, index) => (
              <div className="form-check mb-2" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`brand-${index}`}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <label className="form-check-label" htmlFor={`brand-${index}`}>
                  {brand}
                </label>
              </div>
            ))}

            {/* Discount filter */}
            <h5 className="fw-bold mt-4 mb-3">Discount</h5>
            {discountOptions.map((discount, index) => (
              <div className="form-check mb-2" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`discount-${index}`}
                  checked={selectedDiscounts.includes(discount)}
                  onChange={() => handleDiscountChange(discount)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`discount-${index}`}
                >
                  {discount}% and above
                </label>
              </div>
            ))}

            {/* Price range */}
            <h5 className="fw-bold mt-4 mb-3">Price Range</h5>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            />
            <div className="d-flex justify-content-between">
              <span>₹0</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Product list */}
        <div className="col-md-9">
          <h3 className="fw-bold mb-4 text-center">Whey Protein Products</h3>
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div className="col-6 col-md-4" key={product.id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/wheydynamic/" + product.id}
                >
                  <div className="card h-100 shadow-sm position-relative border-0">
                    {product.discount && (
                      <span className="position-absolute top-0 start-0 bg-success text-white p-2 rounded-bottom">
                        {product.discount}% OFF
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top p-3"
                      style={{ height: "200px", objectFit: "contain" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <div className="d-flex justify-content-center gap-2 mb-2">
                        {product.discount ? (
                          <>
                            <span className="text-muted text-decoration-line-through">
                              ₹
                              {Math.round(
                                product.price / (1 - product.discount / 100)
                              )}
                            </span>
                            <span className="text-danger fw-bold">
                              ₹{product.price}
                            </span>
                          </>
                        ) : (
                          <span className="text-danger fw-bold">
                            ₹{product.price}
                          </span>
                        )}
                      </div>
                      
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <p className="text-center text-muted">
                No products found for selected filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheyProtein;
