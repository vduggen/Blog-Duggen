import styled from "styled-components";

interface PropsTitles {
	fontSize?: string;
	color?: string;
}

export const H1 = styled.h1`
	font: bold ${(props: PropsTitles) => props.fontSize} "Roboto", sans-serif;
	color: ${(props: PropsTitles) => props.color};
`;

export const H5 = styled.h5`
	font: 400 ${(props: PropsTitles) => props.fontSize} "Open Sans", sans-serif;
	color: ${(props: PropsTitles) => props.color};
`;

export const Paragraph = styled.p`
	font: 400 ${(props: PropsTitles) => props.fontSize} "Open Sans", sans-serif;
	color: ${(props: PropsTitles) => props.color};
`;
