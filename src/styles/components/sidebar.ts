import styled, { css } from "styled-components";

interface PropsContainer {
	close: boolean;
}

export const Container = styled.aside`
	background: var(--primary-color);
	padding: 1rem 2rem;
	width: 25%;

	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;
	overflow: hidden;
	transition: 0.3s;

	.btn-close-sidebar {
		color: #fff;
		font-size: 2rem;
		position: absolute;
		right: 1rem;
		cursor: pointer;
		transition: ease-in-out 0.3s;

		&:hover {
			opacity: 0.7;
		}
	}

	h2 {
		margin: 1rem 0;
		font: 900 2rem "Roboto", sans-serif;
		color: var(--light-color);
	}

	img {
		border-radius: 50%;
	}

	h4 {
		text-align: center;
		margin: 1.1rem 0;
		font: bold 1.2rem "Roboto", sans-serif;
		color: var(--light-color);
	}

	.container-social-networks {
		display: flex;
		justify-content: space-between;
		width: 100%;

		a {
			color: var(--primary-color);
			background: var(--light-color);
			width: 45px;
			height: 45px;
			box-shadow: 0 0 14px var(--box-shadow);
			text-decoration: none;

			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			transition: 0.5s;

			&:hover {
				transform: scale(1.2) rotate(360deg);
				background: #ffffffaa;
			}

			svg {
				font-size: 1.7rem;
			}
		}
	}

	nav {
		display: flex;
		flex-direction: column;

		a {
			color: var(--light-color);
			margin: 0.5rem 0;
			text-decoration: none;
			font: 500 1em "Roboto", sans-serif;
			transition: 0.8s;

			display: flex;
			align-items: center;

			&:hover {
				opacity: 0.5;
			}

			svg {
				margin-right: 0.5rem;
				font-size: 1.3rem;
			}
		}

		.active {
			opacity: 0.5;
		}

		button {
			margin-top: 1rem;

			a {
				width: 100%;
				height: 100%;
			}
		}
	}

	${(props: PropsContainer) =>
		props.close &&
		css`
			padding: 0 0;
			width: 0;
			transform: translateX(-100%);
			width: 0%;
		`}
`;
