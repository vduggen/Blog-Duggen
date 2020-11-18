import styled, {css} from "styled-components";

export const Container = styled.article`
	header {
		display: flex;
		justify-content: center;

		.column-left {
			width: 650px;
			padding-right: 4rem;

			h5 {
				margin-top: 0.2rem;
			}

			p {
				margin: 1rem 0;
				line-height: 1.5;
			}

			button {
				&:hover {
					opacity: 0.8;
				}
			}
		}

		.column-right {
			img {
				border-radius: 4px;
			}
		}
	}

	.container-posts {
		margin-top: 3rem;

		.post {
			width: 750px;
		}
	}


	@media (min-width: 300px) {
		header {
			.column-left {
				width: 100%;
				padding-right: 0;
				margin: 2rem 1rem;
			}

			.column-right {
				display: none;
			}
		}
	}

	@media (min-width: 576px) {
		header {
			.column-left {
				width: 100%;
				padding-right: 0;
				margin: 2rem 1rem;
			}

			.column-right {
				display: none;
			}
		}
	}

	@media (min-width: 768px) {
		header {
			.column-left {
				margin: 2rem 0;
			}
		}
	}

	@media (min-width: 1200px) {
		header {
			.column-left {
				padding-right: 4rem;
				margin: 0;
			}

			.column-right {
				display: flex;
				width: 550px;
			}
		}
	}
`;
