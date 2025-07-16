import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


const SliderDown = () => {
    const brands = [
        {
            src: "https://cdn2.nutrabay.com/page_manager/homepage/20230316075731720108.png",
            name: "All Brands"
        },
        {
            src: "https://cdn2.nutrabay.com/page_manager/homepage/20230722150636508158.png",
            name: "Nutrabuy"
        },
        {
            src: "https://cdn2.nutrabay.com/page_manager/homepage/20230722145307420109.png",
            name: "Atlab"
        },
        {
            src: "https://cdn2.nutrabay.com/page_manager/homepage/20230722150013170294.png",
            name: "Optimum Nutrition"
        },
        {
            src: "https://cdn2.nutrabay.com/page_manager/homepage/20230722150151704434.png",
            name: "ProSupps"
        },
        {
            src: "https://cdn2.nutrabay.com/page_manager/homepage/20230808105311089712.png",
            name: "MuscleBlaze"
        },
        {
            src: "https://cdn2.nutrabay.com/page_manager/homepage/20230722150403495188.png",
            name: "Dymatize"
        },
        {
            src: "https://cdn2.nutrabay.com/marketing-journey/Isopure_logo-2025-02-11T18:04:39.jpg",
            name: "Isopure"
        },
        {
            src: "https://cdn2.nutrabay.com/marketing-journey/GNC_Logo-2025-02-11T18:04:21.jpg",
            name: "GNC"
        },
        {
            src: "https://cdn2.nutrabay.com/page_manager/homepage/20230808105400667281.png",
            name: "One Science Nutrition"
        },
        {
            src: "https://cdn2.nutrabay.com/marketing-journey/Avvtar_logo-2025-02-11T18:04:04.jpg",
            name: "Avvatar"
        }
    ];

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow custom-prev`}
                style={{ ...style }}
                onClick={onClick}
            >
                &lt; {}
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow custom-next`}
                style={{ ...style }}
                onClick={onClick}
            >
                &gt; {/* Replace with appropriate icon or text */}
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="container mt-5 mb-5">
            <Slider {...settings}>
                {brands.map((brand, index) => (
                    <div className="text-center" key={index} style={{ margin: '0 5px' }}>
                        <div className="card p-2" style={{ width: '150px', height: '150px' }}>
                            <img src={brand.src} alt={brand.name} className="img-fluid mb-1" style={{ maxWidth: '100%', height: '80%' }} />
                            <p className="brand-name" style={{ fontSize: '1rem', margin: '0' }}>{brand.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderDown;
