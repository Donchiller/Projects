import React, { useEffect, useState } from 'react';

const categoryMap = {
  proteins: 'wheyProducts',
  gainers: 'gainerProducts',
  preworkout: 'preworkoutProducts',
  creatine: 'creatineProducts',
  multi: 'multivitaminProducts',
  shilajit: 'shilajitProducts',
  peanutbutter: 'peanutButterProducts',
  fishoil: 'fishoilProducts',
};

const CardRow = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./db.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        const key = categoryMap[category] || 'wheyProducts'; // fallback if no match
        setProducts(data[key] || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="row g-3">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2"> {/* Added more columns for more cards */}
            <div className="card h-100 shadow-sm position-relative border-0">
              {product.discount && (
                <span className="position-absolute top-0 start-0 bg-success text-white p-2 rounded-bottom">
                  {product.discount}% OFF
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top p-3 img-fluid"
                style={{ height: '150px', objectFit: 'contain' }} // Reduced image height
              />
              <div className="card-body text-center" style={{ padding: '8px' }}>
                <h5 className="card-title" style={{ fontSize: '13px' }}>
                  {product.name}
                </h5>
                <div className="d-flex justify-content-center gap-2 mb-2">
                  {product.discount ? (
                    <>
                      <span className="text-muted text-decoration-line-through">
                        ₹{Math.round(product.price / (1 - product.discount / 100))}
                      </span>
                      <span className="text-danger fw-bold">₹{product.price}</span>
                    </>
                  ) : (
                    <span className="text-danger fw-bold">₹{product.price}</span>
                  )}
                </div>
                <button className="btn btn-primary btn-sm w-100">
                  <i className="bi bi-cart-plus me-2"></i>Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <p className="text-center text-muted">No products found for selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default CardRow;
