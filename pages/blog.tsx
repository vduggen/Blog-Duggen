import Layout from "../src/components/layout";
import ListPost from "../src/components/list-post";
import { Button } from "../src/styles/components/button";
import * as S from "../src/styles/pages/blog";
import * as T from "../src/styles/components/titles";
import Link from "next/link";
import matter from "gray-matter";

interface PropsBlog {
	data: string[];
}

function Blog(props: PropsBlog) {
	const { data } = props;

	const RealData = data.map(blog => matter(blog));
	const ListItems = RealData.map(listItem => listItem.data);

	return (
		<Layout title="Blog">
			<S.Container>
				{ListItems.map((blog, i) => (
					<Link key={i} href={`/${blog.slug}`}>
						<a className="post">
							<ListPost
								title={blog.title}
								description={blog.description}
								banner={blog.banner}
								date={blog.date}
								category={blog.category}
							/>
						</a>
					</Link>
				))}
				<footer>
					<T.H5 fontSize="1.1rem" color="var(--light-color)">
						Foi encontrado um total de {ListItems.length} posts.
					</T.H5>
				</footer>
			</S.Container>
		</Layout>
	);
}

export default Blog;

export async function getStaticProps() {
	const fs = require("fs");

	const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

	const blogs = files.filter(fn => fn.endsWith(".md"));

	const data = blogs.map(blog => {
		const path = `${process.cwd()}/content/${blog}`;
		const rawContent = fs.readFileSync(path, {
			encoding: "utf-8",
		});

		return rawContent;
	});

	return {
		props: {
			data: data,
		},
	};
}
