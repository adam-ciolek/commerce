import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";

import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

const Home = () => {
	return (
		<Swiper
			modules={[Autoplay, EffectFade]}
			slidesPerView={1}
			loop={true}
			allowTouchMove={false}
			autoplay={{
				delay: 6000,
				disableOnInteraction: false,
			}}
			effect={"fade"}
			className="mySwiper"
		>
			<SwiperSlide>
				<div className="bg-one"></div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="bg-two"></div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="bg-three"></div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="bg-four"></div>
			</SwiperSlide>
		</Swiper>
	);
};

export default Home;
