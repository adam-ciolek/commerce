import React from "react";
import styled from "styled-components";

const ContactForm = () => {
	return (
		<Wrapper>
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
	margin-top: 4.3rem;
	padding: 0 2rem;
	font-family: 'Montserrat Alternates', sans-serif;

	@media screen and (min-width:768px) {
		flex-basis: 50%;
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
		display:block;
		width:100%;
		text-align:center;
		width:100%;
	}

	button {
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
`;

export default ContactForm;
