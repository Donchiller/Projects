import React, { useState } from "react";

const Card = () => {
  const [qty, setQty] = useState(1);
  
  const handleAdd = () => {
    setQty(1);
  };

  const originalPrice = 899; // Original price
  const discountedPrice = 890; // Discounted price
  const discountPercentage = 15; // Discount percentage

  return (
    <div className="card w-100 m-2 text-center rounded-3 bg-white">
      <div className="card-header position-relative">
        <div className="discount-label position-absolute" style={{ top: "10px", left: "10px", color: "green", fontSize: "10px" }}>
          Upto {discountPercentage}% OFF
        </div>
        <img
          src="https://cdn.nutrabay.com/wp-content/uploads/2021/06/NB-OPT-1002-29-01x.jpg"
          className="img-fluid "
          style={{ height: "20vh" }}
          alt="Product"
        />
      </div>
      <div className="card-body fw-bold" style={{ fontSize: "12px" }}>
       Optimum Nutrition (ON) Gold Standard 100 Whey...
      </div>
      <div
        className="card-footer d-flex flex-column align-items-center pt-3"
        style={{ fontSize: "12px" }}
      >
        <div className="price-info">
          <span className="discounted-price fw-bold">From ₹{discountedPrice}</span>
          <span className="original-price text-decoration-line-through" style={{ color: "red" }}> ₹{originalPrice}</span>
        </div>
        <div className="gap-3 d-flex justify-content-around pb-3">
          {qty === 0 ? (
            <button
              onClick={handleAdd}
              className="btn btn-outline-success btn-sm"
            >
              Add to cart
            </button>
          ) : (
            <span className="fw-bold">{qty}</span> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
