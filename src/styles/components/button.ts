import styled, { css } from "styled-components";
import PropsButton from "../../interfaces/button";

export const Button = styled.button`
	width: ${(props: PropsButton) => props.width}px;
	height: ${(props: PropsButton) => props.height}px;
	border-radius: 3px;
	border: none;
	cursor: pointer;
	transition: 0.5s;
	box-shadow: 0 0 14px var(--box-shadow);
	text-decoration: none;
	font: 500 1em "Roboto", sans-serif;
	background: red;
	color: var(--light-color);

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		box-shadow: 0 0 14px var(--hover-shadow);
	}

	svg {
		margin-right: 0.4rem;
		font-size: 1.3rem;
	}

	${(props: PropsButton) =>
		props.primary &&
		css`
			background: var(--button-primary);
			color: var(--light-color);

			&:hover {
				background: var(--hover-primary);
			}
		`}

	${(props: PropsButton) =>
		props.secondary &&
		css`
			background: var(--button-secondary);
			color: var(--light-color);

			&:hover {
				background: var(--hover-secondary);
			}
		`}
`;
