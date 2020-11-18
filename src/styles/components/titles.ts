import styled, { css } from "styled-components";

interface PropsTitles {
	fontSize?: string;
	color?: string;
	weight?: string;
}

export const H1 = styled.h1`
	font-family: "Roboto", sans-serif;

	${(props: PropsTitles) => props.fontSize && css`
		font-size: ${(props: PropsTitles) => props.fontSize};
	`}

	${(props: PropsTitles) => props.color && css`
		color: ${(props: PropsTitles) => props.color};
	`}

	 ${props => props.weight && css`
	    font-weight: ${(props: PropsTitles) => props.weight};
  	`}
`;

export const H5 = styled.h5`
	font-family: "Open Sans", sans-serif;

	${(props: PropsTitles) => props.fontSize && css`
		font-size: ${(props: PropsTitles) => props.fontSize};
	`}

	${(props: PropsTitles) => props.color && css`
		color: ${(props: PropsTitles) => props.color};
	`}

	 ${props => props.weight && css`
	    font-weight: ${(props: PropsTitles) => props.weight};
  	`}
`;

export const Paragraph = styled.p`
	font-family: "Open Sans", sans-serif;

	${(props: PropsTitles) => props.fontSize && css`
		font-size: ${(props: PropsTitles) => props.fontSize};
	`}

	${(props: PropsTitles) => props.color && css`
		color: ${(props: PropsTitles) => props.color};
	`}

	 ${props => props.weight && css`
	    font-weight: ${(props: PropsTitles) => props.weight};
  	`}
`;
