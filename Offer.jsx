import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ReverseWatch from './ReverseWatch';

const coupons = [
  { discount: "10%", brand: "Absolute Nutrition", code: "ABS" },
  { discount: "10%", brand: "Gibbon Nutrition", code: "GIBBON" },
  { discount: "5%", brand: "Neuherbs", minCart: "₹499", code: "NEU5" },
  { discount: "15%", brand: "Neuherbs", minCart: "₹1499", code: "NEU15" },
  { discount: "₹100", brand: "Wellbeing Nutrition Marine Collagen", code: "WELL100" },
  { discount: "10%", brand: "Wellcore Creatine", code: "WELLCORE10", expiry: "28/02/2025" },
  { discount: "5%", brand: "Naturaltein", newUser: true },
  { discount: "5%", brand: "Sitewide", newUser: true, firstPurchase: true },
  // Additional coupon data from Image 12 (example entries)
  { discount: "20%", brand: "MuscleTech", code: "MTECH20" },
  { discount: "₹200", brand: "Optimum Nutrition", minCart: "₹1999", code: "ON200" },
  { discount: "10%", brand: "MyProtein", code: "MYPRO10", expiry: "31/03/2025" },
];

const freebies = [
  { text: 'Free Shaker with', brand: 'Muscle Asylum', suffix: 'products' },
  { text: 'Free GNC Mega Men with selected', brand: 'GNC', suffix: 'products.' },
  { text: 'Free Athlab Shaker with selected', brand: 'Athlab Products' },
  { text: 'Free Shaker with', brand: 'XLR8 Whey Protein 4lb', suffix: 'and bigger' },
  { text: 'Free Big Muscles Stringer with', brand: 'Big Muscle products' },
  { text: 'Free', brand: 'BPI Sports Multivitamin', suffix: 'worth ₹1399 with selective BPI products' },
  { text: 'Get Extra - Free sachet with', brand: 'Rule1 Whey Blend' },
  { text: 'Free Shaker with', brand: 'Neuherbs True Plant Protein Powder With Omega 3' },
  // Additional freebie data from Image 12 (example entries)
  { text: 'Free Towel with', brand: 'Optimum Nutrition', suffix: 'products' },
  { text: 'Free Protein Bar with', brand: 'MuscleBlaze', suffix: 'whey protein' },
  { text: 'Free Shaker with', brand: 'Dymatize ISO100' },
];

const Offer = () => {
  return (
    <>
      <div className="container py-5" style={{ backgroundColor: '#f5f5f5' }}>
        {/* Centered Heading */}
        <div className="bg-light py-3 mt-4 mb-4">
          <div className="d-flex align-items-center justify-content-center">
            <div className="border-top border-secondary w-25 me-3"></div>
            <h5 className="text-uppercase fw-bold mb-0" style={{ color: '#333' }}>
              Nutrabay Coupons & Offers
            </h5>
            <div className="border-top border-secondary w-25 ms-3"></div>
          </div>
        </div>

        {/* Coupon Section */}
        <h5 className="fw-bold mb-4" style={{ fontSize: '20px', color: '#333' }}>
          Coupon Offers
        </h5>
        <div className="row g-4">
          {coupons.map((coupon, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border rounded shadow-sm h-100">
                <div className="d-flex">
                  {/* Discount Box with Colored Background */}
                  <div
                    className="p-3 text-center border-end"
                    style={{ minWidth: '80px', backgroundColor: '#fff3e0' }}
                  >
                    <div className="text-muted" style={{ fontSize: '12px' }}>
                      FLAT
                    </div>
                    <div className="fw-bold" style={{ fontSize: '24px', color: '#333' }}>
                      {coupon.discount}
                    </div>
                    <div className="text-muted" style={{ fontSize: '12px' }}>
                      OFF
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      <div className="small" style={{ fontSize: '14px', color: '#666' }}>
                        Coupon applicable on <strong>{coupon.brand}</strong>
                        {coupon.minCart && ` products on cart above ${coupon.minCart}`}
                        {coupon.newUser && coupon.firstPurchase && ` sitewide on 1st purchase for new users`}
                        {coupon.newUser && !coupon.firstPurchase && ` for new users`}
                      </div>
                      {coupon.expiry && (
                        <div className="text-danger small mt-1" style={{ fontSize: '12px' }}>
                          Until {coupon.expiry}
                        </div>
                      )}
                    </div>
                    {coupon.code && (
                      <div className="mt-2 d-flex align-items-center">
                        <span
                          className="border border-secondary rounded p-1 px-2 d-inline-block bg-light fw-bold"
                          style={{ fontSize: '14px', color: '#333' }}
                        >
                          {coupon.code}
                        </span>
                        <i className="bi bi-clipboard ms-2" style={{ fontSize: '16px', color: '#666' }}></i>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Divider */}
        <div className="my-5" style={{ backgroundColor: 'black', opacity: '10%', height: '2px' }}></div>

        {/* Freebie Offers */}
        <h4 className="fw-bold mb-3" style={{ fontSize: '20px', color: '#333' }}>
          <i className="bi bi-gift-fill me-2" style={{ color: '#f38b58' }}></i>Freebie Offers
        </h4>
        <div className="row g-3">
          {freebies.map((item, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="bg-light p-3 rounded">
                <span style={{ fontSize: '14px', color: '#666' }}>
                  {item.text}{' '}
                  <a href="#" className="text-decoration-none" style={{ color: '#f38b58' }}>
                    {item.brand}
                  </a>{' '}
                  {item.suffix}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

               <h1 style={{ backgroundColor: 'black', opacity: '10%', fontSize: '25px' }}>.</h1>
            <h2 className='m-4' style={{ fontSize: '25px', fontWeight: 'bold', paddingLeft: '35px' }}></h2>
 <ReverseWatch />

 
               <h1 style={{ backgroundColor: 'black', opacity: '10%', fontSize: '25px' }}>.</h1>
            <h2 className='m-4' style={{ fontSize: '25px', fontWeight: 'bold', paddingLeft: '35px' }}></h2>




<h2 className='m-4' style={{ fontSize: '25px', fontWeight: 'bold', paddingLeft: '35px' }}>
  Deal of the Week
</h2>

<img
  src="https://cdn2.nutrabay.com/page_manager/Optimum_1-2025-04-06T23:56:36.jpg" 
  alt="Optimum Nutrition Whey Protein - Double Rich Chocolate" 
  style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} 
/>


       <h1 style={{ backgroundColor: 'black', opacity: '10%', fontSize: '25px' }}>.</h1>
   <h2 className='m-4' style={{ fontSize: '25px', fontWeight: 'bold', paddingLeft: '35px' }}></h2>

      
    </>
  );
};

export default Offer;