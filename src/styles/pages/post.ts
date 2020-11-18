import styled from "styled-components";

interface PropsBanner {
	image: string;
}

export const Banner = styled.div`
	width: 100%;
	height: 300px;
	background-image: url(${(props: PropsBanner) => props.image});
	background-position: center center;
	background-size: cover;
	border-radius: 4px;
	box-shadow: 0 0 14px var(--box-shadow);
`;

export const Container = styled.article`
	margin-top: 1rem;

	header {
		display: flex;
		align-items: center;
		flex-direction: column;

		margin: 2rem 0;

		p {
			margin: 1rem 0;
			text-transform: uppercase;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		color: var(--light-color);
	}

	.post {
		h2 {
			font: 500 2rem "Roboto",sans-serif;
		}

		p {
			font: 400 1rem "Open Sans", sans-serif;
			margin: 1.5rem 0;
			line-height: 1.5;
			color: var(--light-color);
		}
	}
`;
