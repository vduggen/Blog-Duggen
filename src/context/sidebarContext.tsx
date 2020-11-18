import { createContext, useState } from "react";

const SidebarContext = createContext(null);

const SidebarProvider: React.FC = props => {
	const { children } = props;
	const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

	return (
		<SidebarContext.Provider value={{ sidebarIsOpen, setSidebarIsOpen }}>
			{children}
		</SidebarContext.Provider>
	);
};

export { SidebarContext, SidebarProvider };
