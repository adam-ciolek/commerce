import React from "react";
import styled from "styled-components";
import avatar from "../assets/img/avatar.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const PortfolioOpinion = () => {
	return (
		<Wrapper>
			{/* <h2>Opinie</h2> */}
			<div className="slider">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					loop={true}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="slider__info">
							<img src={avatar} alt="avatar" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
								asperiores fugiat! Id fugiat, alias ullam ducimus laudantium
								mollitia hic vero, quisquam aperiam iusto, molestiae dolor
								asperiores aut ea. Cum, ducimus.*$
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider__info">
							<img src={avatar} alt="avatar" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
								asperiores fugiat! Id fugiat, alias ullam ducimus laudantium
								mollitia hic vero, quisquam aperiam iusto, molestiae dolor
								asperiores aut ea. Cum, ducimus.*$
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider__info">
							<img src={avatar} alt="avatar" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
								asperiores fugiat! Id fugiat, alias ullam ducimus laudantium
								mollitia hic vero, quisquam aperiam iusto, molestiae dolor
								asperiores aut ea. Cum, ducimus.*$
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin: 1.1rem 0 8.4rem;

	.slider {
		@media screen and (min-width: 1025px) {
			margin: 8rem 0;
		}

		&__info {
			padding: 2rem;

			img {
				margin-bottom: 3rem;
			}
		}

		p {
			margin: 0 auto;
			font-size: 1.8rem;
			width: 90%;

			@media screen and (min-width: 660px) {
				width: 70%;
			}
			@media screen and (min-width: 1025px) {
				width: 70%;
			}
		}
	}
	h2 {
		margin: 4.3rem 0;
		text-align: center;
		font-size: 3.6rem;
		position: relative;
		display: inline-block;
		&:before {
			position: absolute;
			z-index: -1;
			content: "";
			bottom: 5px;
			left: 0;
			right: 0;
			width: 100%;
			height: 25%;
			background-color: rgba(0, 90, 52, 0.4);
		}
	}
`;

export default PortfolioOpinion;
