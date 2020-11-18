import * as S from "../styles/components/body";
import { BiMenu } from "react-icons/bi";
import { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";

const Body: React.FC = ({ children }) => {
	const { sidebarIsOpen, setSidebarIsOpen } = useContext(SidebarContext);

	return (
		<S.Container open={sidebarIsOpen}>
			<BiMenu
				className="btn-open-sidebar"
				onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
			/>
			{children}
		</S.Container>
	);
};

export default Body;
