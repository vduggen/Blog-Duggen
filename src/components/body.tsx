import * as S from "../styles/components/body";
import { BiMenu } from "react-icons/bi";
import { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";

const Body: React.FC = ({ children }) => {
	const { sidebarIsClose, setSidebarIsClose } = useContext(SidebarContext);

	return (
		<S.Container close={sidebarIsClose}>
			<BiMenu
				className="btn-open-sidebar"
				onClick={() => setSidebarIsClose(!sidebarIsClose)}
			/>
			{children}
		</S.Container>
	);
};

export default Body;
