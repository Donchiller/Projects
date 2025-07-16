import React from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Customer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  const customerCards = [
    {
      name: 'Yatharth',
      title: 'Gold medalist - Natural Bodybuilding',
      image: 'https://cdn2.nutrabay.com/images/yatharth.png',
      rating: 4,
      review: `“I recently made a purchase on Nutrabay.com and I have to say, I'm impressed with the genuine products and fast service. I feel confident in my purchase and will definitely be ordering from Nutrabay again.”`,
    },
    {
      name: 'Pratik Gupta',
      title: 'International Medalist in Rowing',
      image: 'https://cdn2.nutrabay.com/images/pratikGupta.png',
      rating: 4,
      review: `“Nutrabay sells genuine products, I have been a part of Nutrabay family for almost 2.5 years now and from starting to now it has never disappointed me, be it product quality or delivery time or discounts offered it just gets me back each month for my stack.”`,
    },
    {
      name: 'Monika Lamba',
      title: 'Fitness Influencer',
      image: 'https://cdn2.nutrabay.com/images/monikaLamba.png',
      rating: 5,
      review: `“I have been using Nutrabay.com for several months now, and I'm always blown away by how fast their shipping is. I never have to worry about waiting weeks for my supplements to arrive.”`,
    },
    {
      name: 'Gautam Hasija',
      title: 'Fitness Influencer',
      image: 'https://cdn2.nutrabay.com/images/gautam.png',
      rating: 5,
      review: `“I've tried a lot of online supplement stores, but Nutrabay.com stands out for their exceptional customer service and high-quality products. I appreciate that I can trust the authenticity of the products I receive and that the shipping is lightning-fast.”`,
    },
    {
      name: 'Keshav',
      title: 'Cricketer',
      image: 'https://cdn2.nutrabay.com/images/keshav.png',
      rating: 5,
      review: `“Protein is really big part of everyone's fitness. That's the reason I take Nutrabay gold isolate whey protein for the past 2 years because it's a 100% genuine product with 25 gm protein. Easy digest helps to fast recovery, build immunity & added some BCAA. Most important is totally certified, trusted & good quality.”`,
    },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < count ? 'text-warning' : 'text-secondary'}>
          ⭐
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container mt-4">
      <Slider {...settings}>
        {customerCards.map((customer, index) => (
          <div key={index} className="d-flex justify-content-center">
            <div
              className="card shadow bg-white rounded"
              style={{ width: '90%', maxWidth: '350px', minHeight: '450px' }}
            >
              <div className="text-center mt-3">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="img-fluid rounded-circle"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
              </div>
              <div className="card-body text-center px-3">
                <h5 className="card-title">{customer.name}</h5>
                <p className="card-text">{customer.title}</p>
                <span className="text-success">✅ Verified customer</span>
                <div className="my-2">{renderStars(customer.rating)}</div>
                <p className="card-text">
                  <small className="text-muted">{customer.review}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Customer;
