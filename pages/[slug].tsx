import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../src/components/layout";
import * as S from "../src/styles/pages/post";
import * as T from "../src/styles/components/titles";

const Slug = ({ content, data }) => {
	const frontmatter = data;

	return (
		<Layout title={frontmatter.title}>
			<S.Container>
				<S.Banner image={frontmatter.banner} />

				<header>
					<T.Paragraph fontSize="1rem" color="var(--muted-color)">
						<span>{frontmatter.category} - </span>
						<span>{frontmatter.date}</span>
					</T.Paragraph>
					<T.H1 fontSize="2.5rem" color="var(--light-color)">
						{frontmatter.title}
					</T.H1>
				</header>

				<ReactMarkdown className="post" escapeHtml={true} source={content} />
			</S.Container>
		</Layout>
	);
};

export default Slug;

Slug.getInitialProps = async (context: { query: { slug: string } }) => {
	const { slug } = context.query;

	const content = await import(`../content/${slug}.md`);
	const data = matter(content.default);

	return { ...data };
};
