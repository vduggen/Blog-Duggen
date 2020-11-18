import Image from "next/image";
import * as S from "../styles/components/list-post";
import * as T from "../styles/components/titles";

interface ListPostProps {
	category: string;
	title: string;
	description: string;
	banner: string;
	date: string;
}

const ListPost = (props: ListPostProps) => {
	const { title, description, banner, date, category } = props;

	return (
		<S.Container>
			<header>
				<S.Banner image={banner} />
			</header>

			<section>
				<T.H5 fontSize=".9rem" color="#ffffff70">
					<span>{category} - </span>
					<span>{date}</span>
				</T.H5>
				<T.H1 fontSize="1.5rem" weight="500" color="#fff">
					{title}
				</T.H1>
				<T.Paragraph fontSize="1rem" color="#ffffffaa">
					{description}
				</T.Paragraph>
			</section>
		</S.Container>
	);
};

export default ListPost;
