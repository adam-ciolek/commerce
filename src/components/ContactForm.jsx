import React from "react";
import styled from "styled-components";

const ContactForm = () => {
	return (
		<Wrapper>
			<div className="info-personal">
				<h3>Wiki w Obiektywie</h3>
				<p>Lorem ipsum dolor sit amet</p>
				<p className="info-personal__space">Straszęcin</p>
				<p className="info-personal__space">+14 676 900 050</p>
				<p>lorem@gmail.com</p>
			</div>
			<form>
				<div>
					<label htmlFor="name">Imię</label>
					<input name="name" type="text" id="name" required />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input name="email" type="text" id="email" required />
				</div>
				<div>
					<label htmlFor="message">Wiadomość</label>
					<textarea id="message" name="message" rows="16" required></textarea>
				</div>
				<div className="btn">
					<button>Wyślij</button>
				</div>
			</form>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 0 0 4.3rem;
	padding: 0 2rem;
	font-family: "Roboto", sans-serif;

	@media screen and (min-width: 768px) {
		flex-basis: 50%;
		margin: 4.3rem 0;
	}

	.info-personal {
		color: #fff;
		font-size: 1.5rem;
		line-height: 1.5;
	}

	form {
		width: 100%;
	}
	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 2.4rem;
	}
	label {
		margin-bottom: 0.9rem;
		color: #fff;
	}
	input {
		min-height: 4rem;
		padding: 0 0.5rem;
	}

	textarea {
		padding: 0.5rem 0.5rem;
		resize: vertical;
	}
	input,
	textarea {
		border: none;
		outline-color: #005a34;
		background-color: #f6f6f6;
	}
	input,
	textarea,
	label {
		font-size: 1.7rem;
	}

	.btn {
		display: block;
		width: 100%;
		text-align: center;
		width: 100%;
		margin: 0;
	}

	button {
		cursor: pointer;
		font-family: "Roboto", sans-serif;
		text-align: center;
		padding: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 1.2px;
		background-color: #005a34;
		border: none;
		color: white;
		border-radius: 0.5rem;
		width: 100%;
		justify-self: center;
		transition: all 0.2s ease-in;
		:hover {
			background: rgba(0, 90, 52, 0.7);
		}
	}
`;

export default ContactForm;
