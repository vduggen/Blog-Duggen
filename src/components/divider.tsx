import * as S from "../styles/components/divider";
import PropsDivider from "../interfaces/divider";

const Divider = (props: PropsDivider) => {
	const { width } = props;

	return <S.Divider width={width} />;
};

export default Divider;
