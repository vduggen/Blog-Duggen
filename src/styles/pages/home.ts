import styled from "styled-components";

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
`;
