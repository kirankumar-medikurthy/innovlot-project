import React from "react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import style from "./OurRangeProducts.module.scss";
import { PRODUCTS } from "../../constants/Products";
const OurRangeProducts = () => {
  const renderOneProduct = (product) => {
    return (
      <div className={style.productcontainer}>
        <div className={style.productimagecontainer}>
          <img
            className={style.productimage}
            src={product?.image_url}
            alt={product?.name}
          />
        </div>
        <div className={style.descriptioncontainer}>
          <div className={style.productname}>{product?.name}</div>
          <div className={style.productprice}>{product?.price}</div>
        </div>
      </div>
    );
  };
  const renderViewMoreButton = () => {
    return (
      <div className={style.viewmorebuttoncontainer}>
        <button className={style.viewmorebutton}>View More</button>
      </div>
    );
  };
  return (
    <div className={style.swipercontainer}>
      <div className={style.rangeproductheading}> Our Range of Products </div>
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
        className={style.swiperpackage}
      >
        {PRODUCTS?.map((product) => (
          <SwiperSlide className={style.swipersliderproduct}>
            {renderOneProduct(product)}
          </SwiperSlide>
        ))}
      </Swiper>
      {renderViewMoreButton()}
    </div>
  );
};

export default OurRangeProducts;
