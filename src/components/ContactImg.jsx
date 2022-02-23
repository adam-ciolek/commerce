import React from "react";
import styled from "styled-components";
import flo from "../assets/flo.png";
import ha from "../assets/ha.png";
import we from "../assets/we.png";

const ContactImg = () => {
	return (
		<Wrapper>
			<div className="box">
				<div className="box__img">
					<img src={flo} alt="flowers" />
				</div>
				<div className="box__img box__img--two">
					<img src={ha} alt="flowers" />
				</div>
				<div className="box__img box__img--three">
					<img src={we} alt="flowers" />
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 0 2rem;

	@media screen and (min-width: 768px) {
		order: -1;
		flex-basis: 50%;
	}

	.box {
		display: flex;
		flex-direction: column;
		justify-content: center;

		@media screen and (min-width: 575px) {
			justify-content: left;
		}

		@media screen and (min-width: 768px) {
			padding: 4.3rem 0 2.4rem 0;
		}

		&__img {
			:nth-child(1) {
				text-align: center;
				@media screen and (min-width: 768px) {
					text-align: left;
				}
			}
			:nth-child(2) {
				@media screen and (min-width: 768px) {
					margin: 0.5rem 0;
					text-align: right;
				}
			}

			&--two,
			&--three {
				display: none;

				@media screen and (min-width: 768px) {
					display: block;
				}
			}
		}
	}

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: column;
	}

	img {
		width: 100%;
		height: 100%;
		border-radius: 2rem;
		object-fit: cover;

		@media screen and (min-width: 768px) {
			width: 80%;
		}
		@media screen and (min-width: 850px) {
			width: 70%;
		}
		@media screen and (min-width: 942px) {
			width: 65%;
		}
`;

export default ContactImg;
