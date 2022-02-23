import React from "react";
import { ContactImg, ContactForm, Footer } from "../components";
import styled from "styled-components";

const Contact = () => {
	return (
		<Wrapper>
			<h2>Napisz do mnie</h2>
			<div className="box-container">
				<ContactForm />
				<ContactImg />
			</div>
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	h2 {
		font-family: "Montserrat Alternates", sans-serif;
		margin-top: 4.3rem;
		text-transform: capitalize;
		text-align: center;
		font-size: 2.4rem;
		font-weight: 400;
	}

	.box-container {
		@media screen and (min-width: 768px) {
			flex: 1;
			display: flex;
		}
		@media screen and (min-width: 1024px) {
			max-width: 1200px;
			margin: 0 auto;
		}
	}
`;

export default Contact;
