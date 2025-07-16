import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Star } from "lucide-react"; // Ensure you have this package installed
import { Button } from "react-bootstrap";
import "./App.css"; // Ensure you import your CSS file here

const flavors = ["Unflavored", "Lemon", "Berry", "Chocolate"];
const weights = [
  "100 g (0.22 lb)",
  "200 g (0.44 lb)",
  "300 g (0.66 lb)",
  "500 g (1.1 lb)",
];

function Fishoildynamic() {
  const { id } = useParams();
  console.log("Fish Oil Id", id);

  const [product, setProduct] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(flavors[0]);
  const [selectedWeight, setSelectedWeight] = useState(weights[0]);

  const fetchDataById = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/fishoilProducts/${id}`
      );
      console.log(resp.data);
      setProduct(resp.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchDataById();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const originalPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : product.price;
  const savings = product.discount ? originalPrice - product.price : 0;

  return (
    <div className="container">
      <div className="row">
        {/* Left Side */}
        <div className="col-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <img
              src={product.image || "/default-image.png"}
              alt={product.name}
              width={400}
              height={400}
              onError={(e) => (e.target.src = "/default-image.png")}
              className="img-fluid"
            />
          </div>
        </div>

        <div className="col-8">
          <div
            className="product-details overflow-auto"
            style={{ maxHeight: "600px" }}
          >
            <h2 className="font-bold text-xl mb-2">
              {product.name} - {selectedWeight}, {selectedFlavor}
            </h2>
            <div className="d-flex align-items-center mb-2 text-orange-600">
              <span className="display-5 font-weight-bold">
                ₹{product.price}
              </span>
              {product.discount && (
                <>
                  <span className="text-decoration-line-through text-muted ms-2">
                    ₹{originalPrice}
                  </span>
                  <span className="text-success ms-2">
                    Save ₹{savings} ({product.discount}%)
                  </span>
                </>
              )}
            </div>

            <div className="text-success font-weight-semibold mt-2">
              <h1 className="h5">In stock!</h1>
              {/* Quantity + Add to Cart */}
              <div className="d-flex align-items-center mt-2">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="form-control me-2"
                />
                <Button className="custom-button">Add to Cart</Button>
              </div>
            </div>

            {/* Flavors Section */}
            <div className="mt-4">
              <p className="font-weight-bold">Flavor: {selectedFlavor}</p>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {flavors.map((flavor) => (
                  <Button
                    key={flavor}
                    className={`custom-button ${
                      flavor === selectedFlavor ? "" : "outline"
                    } m-1`}
                    onClick={() => setSelectedFlavor(flavor)}
                  >
                    {flavor}
                  </Button>
                ))}
              </div>
            </div>

            {/* Weight Section */}
            <div className="mt-4">
              <p className="font-weight-bold">Weight: {selectedWeight}</p>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {weights.map((weight) => (
                  <Button
                    key={weight}
                    className={`custom-button ${
                      weight === selectedWeight ? "" : "outline"
                    } m-1`}
                    onClick={() => setSelectedWeight(weight)}
                  >
                    {weight}
                  </Button>
                ))}
              </div>
            </div>

            {/* Ratings & Reviews Section */}
            <div className="mt-4 bg-light p-4 rounded shadow-sm">
              <h3 className="h5 font-weight-bold mb-3">Ratings & Reviews</h3>
              <div className="d-flex justify-content-between mb-3">
                <div className="text-warning display-6">4.7/5</div>
                <Button variant="primary">Rate Product</Button>
              </div>
              <div className="d-flex justify-content-center text-warning mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-5 h-5" />
                ))}
                <Star
                  className="w-5 h-5"
                  fill="currentColor"
                  style={{ clipPath: "inset(0 40% 0 0)" }}
                />
              </div>
              <div className="text-muted mb-3">(971 Ratings & 262 Reviews)</div>

              <div className="w-100">
                {[
                  { star: 5, count: 718 },
                  { star: 4, count: 212 },
                  { star: 3, count: 41 },
                  { star: 2, count: 0 },
                  { star: 1, count: 0 },
                ].map(({ star, count }) => (
                  <div key={star} className="d-flex align-items-center mb-2">
                    <span className="me-2">{star}★</span>
                    <div className="flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: `${(count / 971) * 100}%` }}
                          aria-valuenow={count}
                          aria-valuemin="0"
                          aria-valuemax="971"
                        />
                      </div>
                    </div>
                    <span className="ms-2">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fishoildynamic;
