import React from "react";
import { ContactWords, ContactForm, Footer } from "../components";
import styled from "styled-components";

const Contact = () => {
	return (
		<Wrapper>
			<h2>Napisz do mnie</h2>
			<div className="bg">
				<div className="box-container">
					<ContactWords />
					<ContactForm />
				</div>
			</div>
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;

	.bg {
		background: rgba(0, 90, 52, 0.6);
		padding: 20px 0;
		margin-top: 4.3rem;
	}

	h2 {
		opacity: 0.8;
		font-family: "shamery";
		margin-top: 4.3rem;
		text-transform: capitalize;
		text-align: center;
		font-size: 2.6rem;
		font-weight: 400;

		@media screen and (min-width: 425px) {
			font-size: 3.6rem;
		}
	}

	.box-container {
		display: flex;
		flex-direction: column;

		@media screen and (min-width: 768px) {
			flex: 1;
			display: flex;
			flex-direction: row;
		}
		@media screen and (min-width: 1024px) {
			max-width: 1200px;
			margin: 0 auto;
		}
	}
`;

export default Contact;
