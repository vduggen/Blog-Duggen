import styled, { css } from "styled-components";

interface PropsContainer {
	close: boolean;
}

export const Container = styled.section`
	background: var(--dark-color);
	padding: 2rem 5rem;
	transition: 0.3s;
	width: 75%;
	margin: 0 auto;

	.btn-open-sidebar {
		font-size: 2.5rem;
		color: var(--light-color);
		cursor: pointer;
		margin-bottom: 1rem;
	}

	@media (min-width: 300px) {
		width: 100%;
		padding: 2rem 1rem;
	}

	@media (min-width: 576px) {
		width: 100%;
		padding: 2rem;
	}

	@media (min-width: 768px) {
		width: 100%;
		padding: 2rem 7rem;
	}

	@media (min-width: 992px) {
		width: 75%;
		padding: 2rem 4rem;
	}

	${(props: PropsContainer) =>
		props.close &&
		css`
			@media (min-width: 300px) {
				width: 100%;
			}

			@media (min-width: 1200px) {
				width: 1140px;
			}
		`}
`;
