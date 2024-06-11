import React from "react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./OurRangeProducts.style.scss";
import { products } from "../../Utils/constants";
const OurRangeProducts = () => {
  const renderOneProduct = (product) => {
    return (
      <div className="product-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src={product?.image_url}
            alt={product?.name}
          />
        </div>
        <div className="description-container">
          <div className="product-name">{product?.name}</div>
          <div className="product-price">{product?.price}</div>
        </div>
      </div>
    );
  };
  const renderViewMoreButton = () => {
    return (
      <div className="view-more-button-container">
        <button className="view-more-button">View More</button>
      </div>
    );
  };
  return (
    <div className="swiper-container">
      <div className="range-product-heading"> Our Range of Products </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        keyboard={{ enabled: true }}
        loopFillGroupWithBlank={true}
        autoplay={100}
        className="swiper-package"
      >
        {products?.map((product) => (
          <SwiperSlide className="swiper-slider-product">
            {renderOneProduct(product)}
          </SwiperSlide>
        ))}
      </Swiper>
      {renderViewMoreButton()}
    </div>
  );
};

export default OurRangeProducts;
