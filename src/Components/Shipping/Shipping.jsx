import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Shipping.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Shipping = () => {
  return (
    <>
      <div className="shippingContainer">
        <div className="wrapper">
          <div className="shippingTitle">
            <h1>Shipping Method</h1>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow]}
            className="swip"
          >
            <SwiperSlide>
              <div className="cardText">
                <div className="cardTitle">
                  <h1>LAND</h1>
                </div>
                <div className="cardDesc">
                  <p>
                    A semi-truck efficiently transports goods across a highway.
                  </p>
                </div>
              </div>
              <img src="./assets/truck.png" />
            </SwiperSlide>
            <SwiperSlide className="swipSlide">
              <div className="cardText">
                <div className="cardTitle">
                  <h1>AIR</h1>
                </div>
                <div className="cardDesc">
                  <p>A cargo plane soars through the sky, carrying goods. </p>
                </div>
              </div>
              <img src="./assets/air.png" />
            </SwiperSlide>
            <SwiperSlide className="swipSlide">
              <div className="cardText">
                <div className="cardTitle">
                  <h1>SEA</h1>
                </div>
                <div className="cardDesc">
                  <p>
                    A large cargo ship navigates the ocean, loaded with
                    containers.
                  </p>
                </div>
              </div>
              <img src="./assets/sea.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Shipping;
