import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="bg-red-500 relative top-10">
          {i}
        </a>
      );
    },
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className="h-[200px] bg-yellow-300">
      <div className="bg-blue-300">
        <h3>1</h3>
      </div>
      <div className="bg-blue-300">
        <h3>2</h3>
      </div>
      <div className="bg-blue-300">
        <h3>3</h3>
      </div>
      <div className="bg-blue-300">
        <h3>4</h3>
      </div>
      <div className="bg-blue-300">
        <h3>5</h3>
      </div>
      <div className="bg-blue-300">
        <h3>6</h3>
      </div>
    </Slider>
  );
}