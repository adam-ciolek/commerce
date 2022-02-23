import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<Wrapper>
			<p>made by ....</p>
			<p>copyright ©. wszelkie prawa zastrzeżone</p>
			<p>2022</p>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 4rem;
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
