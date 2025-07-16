import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Button } from "@/components/ui/button"; // Add missing Button import
// import { Card, CardContent } from "@/components/ui/card";
import { Star, View } from "lucide-react";
import { Button } from "react-bootstrap";

const flavors = [
  "Cafe Mocha",
  "Cold Coffee",
  "Double Rich Chocolate",
  "Kesar Badam Pista",
  "Malai Kulfi",
  "Mango",
  "Rich Chocolate Creme",
  "Strawberry Milkshake",
  "Vanilla Ice Cream",
];

const weights = [
  "35 g (0.07 lb)",
  "500 g (1.1 lb)",
  "1 kg (2.2 lb)",
  "1.5 kg (3.3 lb)",
  "2 kg (4.4 lb)",
];

function Wheydynamic() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState("Strawberry Milkshake");
  const [selectedWeight, setSelectedWeight] = useState("1 kg (2.2 lb)");
  console.log("Categoires", id);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const categories = [
  //         "wheyProducts",
  //         "creatineProducts",
  //         "gainerProducts",
  //         "shilajitProducts",
  //         "preworkoutProducts",
  //         "multivitaminProducts",
  //         "peanutButterProducts",
  //         "fishoilProducts",
  //         "bcaaProducts",
  //         "plantProteinProducts",
  //         "ayurvedaProducts",
  //       ];

  //       let foundProduct = null;
  //       for (const category of categories) {
  //         const response = await axios.get(
  //           `http://localhost:3000/wheyProducts/${id}`
  //         );

  //         const product = response.data.find(
  //           (item) => item.id === parseInt(id)
  //         );
  //         if (product) {
  //           if (product.image.startsWith("[") && product.image.endsWith(")")) {
  //             const cleanImage =
  //               product.image.match(/\(([^)]+)\)/)?.[1] || product.image;
  //             product.image = cleanImage;
  //           }
  //           foundProduct = product;
  //           break;
  //         }
  //       }

  //       if (foundProduct) {
  //         setProduct(foundProduct);
  //       } else {
  //         console.error("Product not found");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);

  const fetchDataById = async () => {
    const resp = await axios.get(`http://localhost:3000/wheyProducts/${id}`);
    console.log(resp.data);
    setProduct(resp.data);
  };
  useEffect(() => {
    fetchDataById();
  });
  if (!product) {
    return <div>Loading...</div>;
  }

  const originalPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : product.price;
  const savings = product.discount ? originalPrice - product.price : 0;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="">
        {/* Left Side - Image */}
        <div className="">
          <img
            src={product.image}
            alt={product.name}
            className=""
            onError={(e) => (e.target.src = "/whey-image.png")}
          />
        </div>
      </div>
{/* 
      {/* Right Side - Details */}
      <div className="">
        <h2 className="">
          {product.name} - {selectedWeight}, {selectedFlavor}
        </h2>
        <div className="flex items-center space-x-2 text-orange-600">
          <span className="text-xl font-bold">₹{product.price}</span>
          {product.discount && (
            <>
              <span className="line-through text-gray-500">
                ₹{originalPrice}
              </span>
              <span className="text-green-600">
                Save ₹{savings} ({product.discount}%)
              </span>
            </>
          )}
        </div>
      </div>

      <div className="text-green-600 font-semibold">
        <h1>In stock!</h1>
        {/* Quantity + Add to Cart */}
        <div className="flex items-center space-x-4">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-16 px-2 py-1 border rounded"
          />
          <Button>Add to Cart</Button>
        </div>
      </div>
      {/* Flavors */}
      <div>
        <p className="font-semibold">Flavour: {selectedFlavor}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {flavors.map((flavor) => (
            <Button
              key={flavor}
              variant={flavor === selectedFlavor ? "default" : "outline"}
              onClick={() => setSelectedFlavor(flavor)}
            >
              {flavor}
            </Button>
          ))}
        </div>
      </div>

      {/* Weight */}
      <div>
        <p className="font-semibold">Weight: {selectedWeight}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {weights.map((weight) => (
            <Button
              key={weight}
              variant={weight === selectedWeight ? "default" : "outline"}
              onClick={() => setSelectedWeight(weight)}
            >
              {weight}
            </Button>
          ))}
        </div>
      </div>

      {/* Ratings & Reviews Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Ratings & Reviews</h3>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold">4.7/5</div>
            <div className="flex justify-center text-orange-500 mt-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-5 h-5" />
              ))}
              <Star
                className="w-5 h-5"
                fill="currentColor"
                style={{ clipPath: "inset(0 40% 0 0)" }}
              />
            </div>
            <div className="text-sm text-gray-600 mt-1">
              (948 Ratings & 257 Reviews)
            </div>
          </div>

          <div className="w-full md:w-2/3">
            {[
              { star: 5, count: 699 },
              { star: 4, count: 208 },
              { star: 3, count: 41 },
              { star: 2, count: 0 },
              { star: 1, count: 0 },
            ].map(({ star, count }) => (
              <div key={star} className="flex items-center gap-2 mb-1">
                <span className="w-6 text-sm">{star}★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div
                    className={`h-full ${
                      count > 0 ? "bg-green-600" : "bg-transparent"
                    }`}
                    style={{ width: `${(count / 948) * 100}%` }}
                  />
                </div>
                <span className="w-10 text-right text-sm">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheydynamic;
