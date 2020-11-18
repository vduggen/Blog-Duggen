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

		.link {
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

		.btn-callme {
			margin-top: 1rem;

			a {
				width: 100%;
				height: 100%;
			}
		}
	}

	@media (min-width: 300px) {
		position: fixed;
		left: 0;

		width: 0;
		padding: 0;
		height: 100vh;

		h2 {
			margin-top: 2rem;
		}

		img {
			height: 200px;
		}

		nav {
			.link {
				font-size: 1.3rem;
				margin: 1rem 0;

				svg {
					font-size: 1.5rem;
				}
			}

			.btn-callme {
				margin-top: 1.3rem;
				width: 180px;
				height: 50px;
			}
		}
	}

	@media (min-width: 992px) {
		position: relative;
		height: auto;

		padding: 1rem;
		width: 25%;
	}

	@media (min-width: 1200px) {
		padding: 1rem 2rem;
	}

	@media (min-width: 2000px) {
		padding: 1rem 3rem;
		width: 15%;
	}

	${(props: PropsContainer) =>
		props.close &&
		css`
			@media (min-width: 300px) {
				width: 260px;
				padding: 1rem 1rem;
				z-index: 999;
			}

			@media (min-width: 450px) {
				width: 309px;
				padding: 1rem 1rem;
			}

			@media (min-width: 992px) {
				padding: 0 0;
				transform: translateX(-100%);
				width: 0%;
				z-index: 1;
			}
		`}
`;
