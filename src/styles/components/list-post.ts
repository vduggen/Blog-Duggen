import styled from "styled-components";

interface PropsBanner {
	image: string;
}

export const Container = styled.section`
	display: grid;
	grid-template-columns: 40% 60%;

	border-radius: 4px;
	margin: 2rem auto;

	header {
		overflow: hidden;
		border-radius: 4px;

		div {
			width: 300px;
			height: 200px;
			margin-left: auto;
		}
	}


	section {
		padding: 0 1.5rem;

		h5 {
			text-transform: uppercase;
		}

		p {
			margin-top: 1rem;
		}
	}

	&:hover {
		header {
			div {
				transform: scale(1.1);
			}
		}
	}

	@media (min-width: 300px) {
		justify-content: flex-start;
		grid-template-columns: 1fr;
		width: 288px;

		section {
			padding: 1.5rem 0;
		}
	}

	@media (min-width: 768px) {
		grid-template-columns: 40% 60%;
		width: 100%;

		header {
			height: 115%;

			div {
				height: 100%;
			}
		}

		section {
			padding: 0 1.5rem;
		}
	}

	@media (min-width: 992px) {
		width: 100%;

		header {
			div {
				width: 100%;
			}
		}
	}

	@media (min-width: 1200px) {
		width: 100%;

		header {
			div {
				width: 100%;
			}
		}
	}
`;

export const Banner = styled.div`
	background-image: url(${(props: PropsBanner) => props.image});
	background-position: center center;
	background-size: cover;
	border-radius: 4px 4px 0 0;
	transition: ease-in-out .3s;	
`;
