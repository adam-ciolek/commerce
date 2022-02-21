import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Animation = () => {
	const divRef = useRef();
	const textOne = useRef();
	const textTwo = useRef();

	useEffect(() => {
		gsap.to([textOne.current], {
			y: "0%",
			duration: 1,
			delay: 0.5,
			ease: "power1.out",
		});
		gsap.to([textTwo.current], {
			y: "0%",
			duration: 1,
			delay: 0.75,
			ease: "power1.out",
		});
		gsap.to([divRef.current], {
			y: -100 + "%",
			duration: 1,
			delay: 3,
			ease: "power1.out",
		});
	}, []);

	return (
		<Wrapper ref={divRef}>
			<div>
				<h1>
					<span ref={textOne}>Lorem impsum</span>
				</h1>
				<h1>
					<span ref={textTwo}>Animation for page</span>
				</h1>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: black;
	z-index: 99999;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3rem;

	span {
		transform: translateY(100%);
		display: inline-block;
	}

	h1 {
		background: black;
		overflow: hidden;
	}
`;

export default Animation;
