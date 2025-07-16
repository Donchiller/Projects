import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReverseWatch from "./ReverseWatch";
import SliderDown from "./SliderDown";
import CardRow from "./CardRow";
import Supplements from "./Supplements";
import Category from "./Category";
import NewLaunches from "./NewLaunches";
import Customer from "./Customer";
import TextInfo from "./TextInfo";
import Footer from "./Footer";

const Slider = () => {
  const [activeTab, setActiveTab] = useState("Proteins");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const tabs = [
    "Proteins",
    "Gainers",
    "Pre Workout",
    "Creatine",
    "Vitamins",
    "BCAAs",
  ];

  const features = [
    { icon: "🛡️", text: "100% Original" },
    { icon: "⭐", text: "Certified by Brands" },
    { icon: "🚚", text: "Direct Sourcing" },
    { icon: "📦", text: "Secure Packaging" },
  ];

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="10000"
            onClick={() => handleNavigation("/wheyprotein")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://cdn2.nutrabay.com/page_manager/Gold-Whey-Protein-Conc---2-kg-BAU-Offer_Desktop_Banner-2025-04-25T11:26:45.jpg"
              className="d-block w-100"
              alt="Gold Whey Protein"
            />
          </div>
          <div
            className="carousel-item"
            data-bs-interval="2000"
            onClick={() => handleNavigation("/creatine")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://cdn2.nutrabay.com/page_manager/Pure-Creatine---400-gms-BAU-Offer_desktop-2025-04-28T09:33:41.jpg"
              className="d-block w-100"
              alt="Creatine"
            />
          </div>
          <div
            className="carousel-item"
            data-bs-interval="3000"
            onClick={() => handleNavigation("/Ayruv")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://cdn2.nutrabay.com/page_manager/Tata1mg_Desktop_Banner_-2025-04-24T12:10:53.jpg"
              className="d-block w-100"
              alt="Tata1mg"
            />
          </div>
          <div
            className="carousel-item"
            data-bs-interval="4000"
            onClick={() => handleNavigation("/wheyprotein")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://cdn2.nutrabay.com/page_manager/Optimum_RCB_Desktop_Banner-2025-04-06T23:56:06.jpg"
              className="d-block w-100"
              alt="ON"
            />
          </div>
          <div
            className="carousel-item"
            data-bs-interval="5000"
            onClick={() => handleNavigation("/Ayruv")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://cdn2.nutrabay.com/page_manager/Rasayanam_Ayurveda_Desktop_Banner-2025-03-02T19:00:34.jpg"
              className="d-block w-100"
              alt="Rasayanam Ayurveda"
            />
          </div>
          <div
            className="carousel-item"
            data-bs-interval="6000"
            onClick={() => handleNavigation("/Peanut")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://cdn2.nutrabay.com/page_manager/Superyou_Desktop_banner_upto_10_off_1-2025-03-31T12:28:16.jpg"
              className="d-block w-100"
              alt="Superyou"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-between gap-2 p-4">
        <div
          className="main"
          onClick={() => handleNavigation("/creatine")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://cdn2.nutrabay.com/page_manager/homepage/20230808214057806510.png"
            style={{ height: "110px" }}
            alt="Brand Logo 1"
          />
        </div>
        <div
          className="main"
          onClick={() => handleNavigation("/Preworkout")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://cdn2.nutrabay.com/page_manager/homepage/20230808214157781451.png"
            style={{ height: "110px" }}
            alt="Brand Logo 2"
          />
        </div>
        <div className="main">
          <img
            src="https://cdn2.nutrabay.com/page_manager/homepage/20230808214127587196.png"
            style={{ height: "110px" }}
            alt="Brand Logo 3"
          />
        </div>
      </div>

      <h1
        style={{ backgroundColor: "black", opacity: "10%", fontSize: "25px" }}
      >
        .
      </h1>
      <h2
        className="m-4"
        style={{ fontSize: "25px", fontWeight: "bold", paddingLeft: "35px" }}
      >
        Bestsellers
      </h2>

      <div className="container mt-5">{/* Bestseller Section */}</div>

      <div className="container mt-3">
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab}>
              <Link
                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
                style={{ cursor: "pointer" }}
              >
                {tab}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-3">
          <h5>{activeTab} Products</h5>
          {/* Display products based on selected tab */}
        </div>

        <hr />
      </div>

      <h1
        style={{ backgroundColor: "black", opacity: "10%", fontSize: "25px" }}
      >
        .
      </h1>

      <div className="container my-4">
        <div className="row justify-content-around">
          {features.map((feature, index) => (
            <div className="col-auto text-center mb-3" key={index}>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-circle border border-warning d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{feature.icon}</span>
                </div>
                <span className="mt-2">{feature.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-around mb-4">
        <img
          src="https://cdn2.nutrabay.com/page_manager/Myfitness_Bogo_Mobile_Banner-2025-04-29T13:26:25.jpg"
          alt="Myfitness BOGO"
          style={{ width: "30%", height: "auto", borderRadius: "1px" }}
        />
        <img
          src="https://cdn2.nutrabay.com/page_manager/BPI_HP_Mobile_Banner-2024-10-28T23:20:50.jpg"
          alt="BPI HP"
          style={{ width: "30%", height: "auto", borderRadius: "1px" }}
        />
        <img
          src="https://cdn2.nutrabay.com/page_manager/Superyou_Mobile_banner_upto_10_off_2-2025-03-31T12:29:00.jpg"
          alt="Superyou"
          style={{ width: "30%", height: "auto", borderRadius: "1px" }}
        />
      </div>

      <ReverseWatch />

      <h2
        className="m-4"
        style={{ fontSize: "25px", fontWeight: "bold", paddingLeft: "35px" }}
      >
        Top Brands
      </h2>
      <SliderDown />

      <h2
        className="m-4"
        style={{ fontSize: "25px", fontWeight: "bold", paddingLeft: "35px" }}
      >
        Categories
      </h2>
      <Category />

      <h2
        className="m-4"
        style={{ fontSize: "25px", fontWeight: "bold", paddingLeft: "35px" }}
      >
        Supplements
      </h2>
      <Supplements />

      <h2
        className="m-4"
        style={{ fontSize: "25px", fontWeight: "bold", paddingLeft: "35px" }}
      >
        New Brand Launches
      </h2>
      <NewLaunches />

      <h2
        className="m-4"
        style={{ fontSize: "25px", fontWeight: "bold", paddingLeft: "35px" }}
      >
        New Product Launches
      </h2>
      <CardRow />

      <h2
        className="m-4"
        style={{ fontSize: "25px", fontWeight: "bold", paddingLeft: "35px" }}
      >
        What customers say
      </h2>
      <Customer />

      <TextInfo />
    </>
  );
};

export default Slider;
