import React from "react";
import styled from "styled-components";

const ContactWords = () => {
	return (
		<Wrapper>
			<p>I walk.</p>
			<p>I look.</p>
			<p>I see.</p>
			<p>I photograph.</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 4.3rem;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	align-self: center;
	margin-bottom: 4.3rem;
	padding: 0 2rem;

	@media screen and (min-width: 768px) {
		flex-basis: 50%;
	}

	p {
		font-size: 2.8rem;
		text-transform: capitalize;
		font-family: "Yatra One", cursive;
		color: #fff;
		@media screen and (min-width: 500px) {
			font-size: 4.8rem;
		}
		@media screen and (min-width: 1024px) {
			font-size: 6.8rem;
		}
	}
`;

export default ContactWords;
