// Carousel.js
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shoe from "../../../../assets/Images/shoe.png";
import shoe1 from "../../../../assets/Images/show1.png";
import shoe2 from "../../../../assets/Images/shoe2.png";
import shoe3 from "../../../../assets/Images/shoe3.png";

const testimonials = [
  {
    type: "Walking",
    description:
      "Lisa, a dedicated nurse, praises these shoes for their exceptional comfort during long shifts. She loves how her feet stay pain-free even after hours of walking.",
    image: shoe,
    rating: 5,
  },
  {
    type: "Comfort",
    description:
      "Sarah, a CEO, highlights the exceptional comfort of these shoes, perfect for her busy lifestyle. Whether in meetings or traveling, these shoes provide the support she needs.",
    image: shoe1,
    rating: 4,
  },
  {
    type: "Stylish",
    description:
      "Michael, a renowned athlete, appreciates the unparalleled performance and stylish design of these shoes. They not only enhance his performance but also make a fashion statement.",
    image: shoe3,
    rating: 4,
  },
  {
    type: "Versatile",
    description:
      "Emma, a fashion blogger, raves about the stylish design and versatility of these shoes. She finds them perfect for both casual outings and formal events.",
    image: shoe2,
    rating: 4,
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-screen  py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        About Our Shoes
      </h2>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>  
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.type}
                  className="w-20 h-20 mx-auto mb-6"
                />
                <h3 className="text-2xl font-freckle text-center mb-4">
                  {testimonial.type}
                </h3>
                <p className="text-center text-gray-700 mb-6">
                  {testimonial.description}
                </p>
                <div className="flex justify-center">
                  {[...Array(testimonial.rating)].map((star, i) => (
                    <FaStar key={i} className="text-orange-500 text-lg" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{
        ...style,
        display: "block",
        background: "orange",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{
        ...style,
        display: "block",
        background: "orange",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export default Carousel;
