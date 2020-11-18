import GlobalStyle from "../src/styles/global";
import "minireset.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SidebarProvider } from "../src/context/sidebarContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="robots" content="index, follow" />
				<meta name="description" content="Blog sobre assuntos de tecnologia" />
        <meta property="og:type" content="website" />
			</Head>

			<GlobalStyle />

			<SidebarProvider>
				<Component {...pageProps} />
			</SidebarProvider>
		</>
	);
}

export default MyApp;
