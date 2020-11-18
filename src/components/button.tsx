import * as S from "../styles/components/button";
import PropsButton from "../interfaces/button";

const Button = (props: PropsButton) => {
	const { children, width, height, primary, secondary } = props;

	return (
		<S.Button width={width} height={height} primary secondary>
			{children}
		</S.Button>
	);
};

export default Button;
