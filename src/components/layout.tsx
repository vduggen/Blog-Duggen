import Body from "./body";
import Sidebar from "./sidebar";
import * as S from "../styles/components/layout";
import Head from "next/head";

interface LayoutProps {
	children: React.ReactNode;
	title: string;
}

const Layout = (props: LayoutProps) => {
	const { children, title } = props;

	return (
		<S.Container>
			<Head>
				<title>{title} - Blog Duggen</title>
			</Head>

			<Sidebar />

			<Body>{children}</Body>
		</S.Container>
	);
};

export default Layout;
