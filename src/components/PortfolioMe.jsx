import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Girl from "../assets/girl.png";

const PortfolioMe = () => {
	let text = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		gsap.to([text.current], {
			x: "-30px",
			y: "30px",
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: "#img",
				start: "60px center",
			},
		});
	});

	return (
		<Wrapper>
			<div className="about">
				<div className="about__background"></div>
				<img src={Girl} alt="girl" className="about__img" ref={text} id="img" />
			</div>
			<div className="text">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores
					labore ipsa necessitatibus cumque aperiam qui, ipsam, nulla quo
					maiores sapiente soluta sequi reprehenderit beatae molestias odio non
					consectetur sit!
				</p>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 2rem 0;
	display: flex;
	padding: 0 2rem;
	flex-direction: column;

	@media screen and (min-width: 900px) {
		margin: 8rem 0;
		flex-direction: row;
	}

	@media screen and (min-width: 1024px) {
		margin: 8rem 0;
		padding: 0;
		flex-direction: row;
	}

	.about {
		flex-basis: 50%;
		position: relative;

		&__background {
			@media screen and (min-width: 1024px) {
				position: absolute;
				content: "";
				top: -30px;
				right: -30px;
				width: 100%;
				height: 100%;
				background-color: rgba(228, 187, 71, 0.3);
				z-index: -1;
			}
		}

		&__img {
			width: 100%;
			position: relative;
			content: "";
			top: -30px;
			right: -30px;
		}
	}

	.text {
		flex: 50%;
		margin-top: 2rem;

		@media screen and (min-width: 900px) {
			margin-top: 0;
		}

		p {
			line-height: 1.4;
			text-align: justify;
			margin: 0 auto;
			max-width: 100%;
			font-size: 1.7rem;
			opacity: 0.9;

			@media screen and (min-width: 900px) {
				max-width: 90%;
			}
			@media screen and (min-width: 1024px) {
				margin-left: 7rem;
				font-size: 1.9rem;
			}
		}
	}
`;

export default PortfolioMe;
