import React from "react";
import styled from "styled-components";
import friends from "../assets/img/friends.png";
import weedings from "../assets/img/weddings.png";
import party from "../assets/img/party.png";

const PortfolioImg = () => {
	return (
		<Wrapper>
			{/* made data img in data.js */}
			<div>
				<img src={weedings} alt="wedding" />
				<img src={friends} alt="wedding" />
			</div>
			<div>
				<img src={friends} alt="wedding" />
				<img src={weedings} alt="wedding" />
			</div>
			<div>
				<img src={weedings} alt="wedding" />
				<img src={party} alt="party" />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 5.4rem 0;
	display: flex;
	gap: 2rem;
	padding: 2rem;

	@media screen and (min-width: 1025px) {
		padding: 0;
	}

	img {
		width: 100%;
		padding: 1rem 0;
	}
`;

export default PortfolioImg;
