import React from "react";
import styled from "styled-components";

const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<Wrapper>
			<p>made by ....</p>
			<p>copyright ©. wszelkie prawa zastrzeżone</p>
			<p>{date}</p>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 2rem;
	padding: 0 2rem 2rem 2rem;

	@media screen and (min-width: 500px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	p:nth-child(2) {
		margin: 0.5rem 0;
	}
`;

export default Footer;
