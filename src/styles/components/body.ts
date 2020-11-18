import styled, { css } from "styled-components";

interface PropsContainer {
	open: boolean;
}

export const Container = styled.section`
	background: var(--dark-color);
	padding: 2rem 5rem;
	transition: 0.3s;
	width: 75%;

	.btn-open-sidebar {
		font-size: 2.5rem;
		color: var(--light-color);
		cursor: pointer;
	}

	${(props: PropsContainer) =>
		props.open &&
		css`
			width: 100%;
		`}
`;
