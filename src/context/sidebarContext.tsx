import { createContext, useState } from "react";

const SidebarContext = createContext(null);

const SidebarProvider: React.FC = props => {
	const { children } = props;
	const [sidebarIsClose, setSidebarIsClose] = useState(false);

	return (
		<SidebarContext.Provider value={{ sidebarIsClose, setSidebarIsClose }}>
			{children}
		</SidebarContext.Provider>
	);
};

export { SidebarContext, SidebarProvider };
