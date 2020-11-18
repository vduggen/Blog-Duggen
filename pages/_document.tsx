import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface ReturnType {
	styles: JSX.Element;
	html: string;
	head?: JSX.Element[];
}

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<ReturnType> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@500;700;900&display=swap"
						rel="stylesheet"
					/>

					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-PX6PC2HEW3"
					/>
					<script
						async
						dangerouslySetInnerHTML={{
							__html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-PX6PC2HEW3');`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
