import Image from "next/image";
import * as S from "../styles/components/list-post";
import * as T from "../styles/components/titles";

interface ListPostProps {
	title: string;
	description: string;
	banner: string;
	date: string;
}

const ListPost = (props: ListPostProps) => {
	const { title, description, banner, date } = props;

	return (
		<S.Container>
			<Image src={banner} alt="Test" width={200} height={150} />

			<section>
				<T.H1 fontSize="1.5rem" color="#fff">
					{title}
				</T.H1>
				<div>
					<T.H5 fontSize="1rem" color="#666">
						<span>{date}</span>
						<span>●</span>
						<span>Vitor Luiz Duggen</span>
					</T.H5>
				</div>
				<T.Paragraph fontSize="1rem" color="#909090">
					{description}
				</T.Paragraph>
			</section>
		</S.Container>
	);
};

export default ListPost;
