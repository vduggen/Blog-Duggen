import Layout from "../src/components/layout";
import Image from "next/image";
import { Button } from "../src/styles/components/button";
import { AiOutlineDownload } from "react-icons/ai";
import Divider from "../src/components/divider";
import ListPost from "../src/components/list-post";
import Link from "next/link";
import matter from "gray-matter";
import * as S from "../src/styles/pages/home";
import * as T from "../src/styles/components/titles";

interface PropsHome {
	data: string[];
}

export default function Home(props: PropsHome) {
	const { data } = props;

	const RealData = data.map(blog => matter(blog));
	const ListItems = RealData.map(listItem => listItem.data);

	return (
		<Layout title="Inicio">
			<S.Container>
				<header>
					<section className="column-left">
						<T.H1 fontSize="2.5rem" color="var(--primary-color)">
							Vitor Luiz Duggen
						</T.H1>
						<T.H5 fontSize="1.3rem" color="var(--light-color)">
							Front-end Developer
						</T.H5>
						<T.Paragraph fontSize="1rem" color="var(--muted-color)">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
							odit labore excepturi provident perferendis vel, quod amet in
							delectus, aliquid commodi nemo quae fugit autem unde cumque!
							Optio, enim exercitationem quaerat, quasi, explicabo deserunt modi
							veniam aspernatur eius at assumenda.
						</T.Paragraph>

						<Button
							as="a"
							href="/assets/Currículo.docx"
							download="Curriculum Vitor.docx"
							width={190}
							height={48}
							secondary
						>
							<AiOutlineDownload />
							Baixar Curriculum
						</Button>
					</section>

					<section className="column-right">
						<Image
							src="/assets/Perfil3.jpg"
							alt="Picture of the author"
							width={350}
							height={350}
						/>
					</section>
				</header>

				<Divider width={85} />

				{ListItems.map((blog, i) =>
					i !== 5 ? (
						<Link key={i} href={`/${blog.slug}`}>
							<a className="post">
								<ListPost
									title={blog.title}
									description={blog.description}
									banner={blog.banner}
									date={blog.date}
								/>
							</a>
						</Link>
					) : null
				)}
			</S.Container>
		</Layout>
	);
}

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
