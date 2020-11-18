import GlobalStyle from "../src/styles/global";
import "minireset.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SidebarProvider } from "../src/context/sidebarContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<GlobalStyle />

			<SidebarProvider>
				<Component {...pageProps} />
			</SidebarProvider>
		</>
	);
}

export default MyApp;
