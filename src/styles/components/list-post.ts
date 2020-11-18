import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	justify-content: center;
	margin: 2.5rem 0;

	&:last-child {
		margin: 2.5rem 0 0 0;
	}

	&:hover {
		img {
			transform: scale(1.1);
			cursor: pointer;
		}
	}

	div {
		border-radius: 4px;

		img {
			transition: ease-in-out 0.3s;
			border-radius: 4px;
		}
	}

	section {
		max-width: 637px;
		padding: 0 1rem;
		cursor: pointer;

		h5 {
			margin: 0.2rem 0;
			display: flex;
			align-items: center;

			span {
				&:nth-child(2) {
					margin: 0 0.3rem;
				}
			}
		}

		p {
			margin: 0.5rem 0;
		}

		a {
			display: flex;
			align-items: center;
			text-decoration: none;
			color: var(--primary-color);
			font: 400 1rem "Open Sans", sans-serif;
			transition: ease-in-out 0.3s;
			cursor: pointer;

			&:hover {
				opacity: 0.9;
			}

			svg {
				margin-left: 0.2rem;
			}
		}
	}
`;
