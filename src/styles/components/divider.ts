import styled from "styled-components";
import PropsDivider from "../../interfaces/divider";

export const Divider = styled.hr`
	width: ${(props: PropsDivider) => props.width}%;
	margin: 2rem auto;
	border-color: var(--row-color);
`;
