import React from "react";
import styled from "styled-components";

import {
	PortfolioMe,
	PortfolioImg,
	PortfolioOpinion,
	Footer,
} from "../components";

const Portfolio = () => {
	return (
		<>
			<Wrapper className="container">
				<div className="box">
					<h2>O mnie</h2>
					<PortfolioMe />
					<div className="background"></div>
					<PortfolioImg />
					<div className="background-two"></div>
					<PortfolioOpinion />
				</div>
			</Wrapper>
			<Footer />
		</>
	);
};

const Wrapper = styled.div`
	.box {
		text-align: center;
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

	.background {
		padding: 0 2rem;
		margin-top: 12rem;
		width: 100%;
		height: 1px;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.background-two {
		padding: 0 2rem;
		// margin-top: 12rem;
		width: 100%;
		height: 1px;
		background-color: rgba(0, 0, 0, 0.2);
	}
`;

export default Portfolio;
