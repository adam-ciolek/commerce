import React, { useState } from "react";
import styled from "styled-components";
import LogoSocial from "./LogoSocial";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import { links } from "../data";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
	const [sidebar, setSidebar] = useState({
		initial: false,
		clicked: null,
		menuName: "Menu",
	});

	// state for disabled button
	const [disabled, setDisabled] = useState(false);

	const handleMenu = () => {
		disabledMenu();
		if (sidebar.initial === false) {
			setSidebar({
				initial: null,
				clicked: true,
				menuName: "Close",
			});
		} else if (sidebar.clicked === true) {
			setSidebar({
				clicked: !sidebar.clicked,
				menuName: "Menu",
			});
		} else if (sidebar.clicked === false) {
			setSidebar({
				clicked: !sidebar.clicked,
				menuName: "Close",
			});
		}
	};

	// Determine if our menu button should be disabled

	const disabledMenu = () => {
		setDisabled(!disabled);
		setTimeout(() => {
			setDisabled(false);
		}, 1200);
	};

	return (
		<>
			<Wrapper>
				<div className="container">
					<div className="hamburger">
						<LogoSocial />
						<div className="header-social">
							<a
								href="https://pl-pl.facebook.com/"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									width="27"
									height="26"
									viewBox="0 0 27 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M24.1071 0H2.89286C2.12562 0 1.38981 0.286439 0.847298 0.796304C0.304782 1.30617 0 1.99769 0 2.71875L0 22.6562C0 23.3773 0.304782 24.0688 0.847298 24.5787C1.38981 25.0886 2.12562 25.375 2.89286 25.375H11.1646V16.7481H7.36775V12.6875H11.1646V9.59266C11.1646 6.07244 13.3945 4.12797 16.8099 4.12797C18.4456 4.12797 20.156 4.40211 20.156 4.40211V7.85719H18.2714C16.4146 7.85719 15.8354 8.94016 15.8354 10.0509V12.6875H19.9806L19.3177 16.7481H15.8354V25.375H24.1071C24.8744 25.375 25.6102 25.0886 26.1527 24.5787C26.6952 24.0688 27 23.3773 27 22.6562V2.71875C27 1.99769 26.6952 1.30617 26.1527 0.796304C25.6102 0.286439 24.8744 0 24.1071 0V0Z"
										fill="black"
									/>
								</svg>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									width="27"
									height="26"
									viewBox="0 0 27 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.5 9.66629C12.8642 9.66651 12.2428 9.84389 11.7143 10.176C11.1859 10.5081 10.774 10.98 10.5309 11.5321C10.2877 12.0842 10.2243 12.6916 10.3484 13.2776C10.4726 13.8636 10.7789 14.4018 11.2285 14.8242C11.6781 15.2466 12.2509 15.5343 12.8745 15.6507C13.498 15.7672 14.1444 15.7073 14.7317 15.4786C15.319 15.2499 15.821 14.8627 16.1742 14.3659C16.5274 13.8691 16.7159 13.285 16.7159 12.6875C16.7153 11.8862 16.3762 11.1179 15.7732 10.5514C15.1702 9.98495 14.3526 9.66659 13.5 9.66629V9.66629ZM21.016 7.34402C20.8524 6.95425 20.6052 6.60023 20.29 6.30393C19.9747 6.00764 19.598 5.77539 19.1833 5.62158C17.9176 5.15203 14.9042 5.25738 13.5 5.25738C12.0958 5.25738 9.08538 5.14807 7.81614 5.62158C7.4014 5.77539 7.02471 6.00764 6.70944 6.30393C6.39417 6.60023 6.14705 6.95425 5.98339 7.34402C5.48438 8.53348 5.59587 11.3683 5.59587 12.6869C5.59587 14.0055 5.48438 16.837 5.9858 18.0304C6.14946 18.4202 6.39658 18.7742 6.71185 19.0705C7.02712 19.3668 7.40381 19.599 7.81855 19.7529C9.08417 20.2224 12.0976 20.1171 13.5024 20.1171C14.9073 20.1171 17.9164 20.2264 19.1857 19.7529C19.6004 19.599 19.9771 19.3668 20.2924 19.0705C20.6076 18.7742 20.8548 18.4202 21.0184 18.0304C21.5217 16.841 21.4059 14.0061 21.4059 12.6875C21.4059 11.3689 21.5217 8.53801 21.0184 7.34459L21.016 7.34402ZM13.5 17.332C12.5226 17.332 11.5671 17.0596 10.7544 16.5493C9.94169 16.0389 9.30827 15.3136 8.93422 14.4649C8.56018 13.6162 8.46231 12.6823 8.65299 11.7814C8.84368 10.8804 9.31436 10.0529 10.0055 9.40332C10.6966 8.75377 11.5772 8.31142 12.5359 8.13221C13.4945 7.953 14.4882 8.04498 15.3912 8.39651C16.2942 8.74805 17.0661 9.34335 17.6091 10.1071C18.1521 10.8709 18.442 11.7689 18.442 12.6875C18.4428 13.2976 18.3155 13.9019 18.0674 14.4658C17.8193 15.0296 17.4553 15.5419 16.9963 15.9733C16.5372 16.4048 15.9921 16.7469 15.3921 16.98C14.7922 17.2132 14.1492 17.3328 13.5 17.332V17.332ZM18.6457 8.93223C18.4175 8.93234 18.1944 8.86885 18.0046 8.7498C17.8149 8.63074 17.6669 8.46147 17.5795 8.26339C17.4921 8.0653 17.4692 7.84731 17.5136 7.63697C17.5581 7.42664 17.6679 7.23342 17.8292 7.08175C17.9905 6.93008 18.196 6.82677 18.4198 6.7849C18.6436 6.74302 18.8755 6.76446 19.0864 6.84649C19.2972 6.92853 19.4774 7.06748 19.6041 7.24577C19.7309 7.42406 19.7986 7.63369 19.7986 7.84812C19.7992 7.99053 19.7699 8.13165 19.7124 8.26339C19.6549 8.39513 19.5703 8.5149 19.4634 8.61583C19.3565 8.71676 19.2294 8.79686 19.0895 8.85155C18.9496 8.90623 18.7996 8.93442 18.6481 8.93449L18.6457 8.93223ZM24.1071 0H2.89286C2.12562 0 1.38981 0.286439 0.847298 0.796304C0.304782 1.30617 0 1.99769 0 2.71875L0 22.6562C0 23.3773 0.304782 24.0688 0.847298 24.5787C1.38981 25.0886 2.12562 25.375 2.89286 25.375H24.1071C24.8744 25.375 25.6102 25.0886 26.1527 24.5787C26.6952 24.0688 27 23.3773 27 22.6562V2.71875C27 1.99769 26.6952 1.30617 26.1527 0.796304C25.6102 0.286439 24.8744 0 24.1071 0V0ZM23.0754 16.4258C22.9976 17.8775 22.645 19.1638 21.5174 20.2207C20.3898 21.2776 19.0223 21.6158 17.4795 21.6849C15.8878 21.7693 11.1158 21.7693 9.52413 21.6849C7.97946 21.6118 6.6156 21.2799 5.48618 20.2207C4.35676 19.1615 4.00179 17.8746 3.92826 16.4258C3.83846 14.9293 3.83846 10.444 3.92826 8.94922C4.006 7.49752 4.35435 6.21121 5.48618 5.1543C6.61801 4.09738 7.98549 3.7632 9.52413 3.6941C11.1158 3.60971 15.8878 3.60971 17.4795 3.6941C19.0242 3.76717 20.3922 4.09908 21.5174 5.15826C22.6426 6.21744 23.0018 7.50432 23.0754 8.95602C23.1652 10.4468 23.1652 14.9282 23.0754 16.4258Z"
										fill="black"
									/>
								</svg>
							</a>
						</div>
						<button
							className="hamburger__menu"
							onClick={handleMenu}
							disabled={disabled}
						>
							<img src={hamburger} alt="menu" />
						</button>
					</div>
					<Sidebar
						handleMenu={handleMenu}
						sidebar={sidebar}
						disabled={disabled}
					/>
					<ul className="link-nav">
						{links.map((link) => {
							const { id, title, url } = link;
							return (
								<li key={id}>
									<Link to={url}>{title}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.nav`
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	position: relative;
	z-index: 100;

	.hamburger {
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__menu {
			border: none;
		}

		@media screen and (min-width: 1024px) {
			display: block;
			position: relative;

			&__menu {
				display: none;
			}
		}
	}

	.header-social {
		display: none;

		@media screen and (min-width: 1024px) {
			display: block;
			position: absolute;
			top: 2rem;
			right: 0;
		}

		a svg path {
			fill: #005a34;
		}
		a:nth-child(1) {
			margin-right: 1.7rem;
		}
	}

	.link-nav {
		display: none;
		@media screen and (min-width: 1024px) {
			display: flex;
			justify-content: center;
			margin-bottom: 2rem;
		}

		li {
			margin-left: 2.9rem;
		}

		a {
			font-size: 1.9rem;
			text-transform: uppercase;
			color: black;
			opacity: 0.7;
		}
	}
`;

export default Navbar;
