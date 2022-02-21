import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoBig from "../assets/logoBig.png";
import logo from "../assets/logo.png";

const LogoSocial = () => {
	return (
		<Wrapper>
			<Link to="/" className="sm">
				<img src={logo} alt="W obiektywie Wiki" />
			</Link>
			<Link to="/" className="lg">
				<img src={logoBig} alt="W obiektywie Wiki" />
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	@media screen and (min-width: 1024px) {
		text-align: center;
	}

	.lg {
		display: none;
		@media screen and (min-width: 1024px) {
			display: block;
			width: min-content;
			margin: 0 auto;
		}
	}

	@media screen and (min-width: 1024px) {
		.sm {
			display: none;
		}
	}
`;

export default LogoSocial;
