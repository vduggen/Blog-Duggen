import * as S from "../styles/components/sidebar";
import Image from "next/image";
import {
	AiOutlineInstagram,
	AiOutlineGithub,
	AiFillLinkedin,
	AiOutlineTwitter,
	AiFillHome,
	AiFillRead,
} from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { Button } from "../styles/components/button";
import { Divider } from "../styles/components/divider";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";

const Sidebar = () => {
	const { sidebarIsClose, setSidebarIsClose } = useContext(SidebarContext);
	const router = useRouter();

	return (
		<S.Container close={sidebarIsClose}>
			<IoMdClose
				className="btn-close-sidebar"
				onClick={() => setSidebarIsClose(!sidebarIsClose)}
			/>

			<h2>Blog Duggen</h2>

			<img src="/assets/Perfil1.jpg" alt="Picture of the author" />

			<h4>Front-end Developer</h4>

			<section className="container-social-networks">
				<a
					href="https://instagram.com/zlotyss.io"
					target="__blank"
					rel="noopener"
				>
					<AiOutlineInstagram />
				</a>

				<a href="https://github.com/vduggen" target="__blank" rel="noopener">
					<AiOutlineGithub />
				</a>

				<a
					href="https://www.linkedin.com/in/vitor-duggen-257198197/"
					target="__blank"
					rel="noopener"
				>
					<AiFillLinkedin />
				</a>

				<a href="https://twitter.com/zlotyslol" target="__blank" rel="noopener">
					<AiOutlineTwitter />
				</a>
			</section>

			<Divider width={75} />

			<nav>
				<Link href="/">
					<a className={`${router.asPath === "/" ? "active" : ""} link`}>
						<AiFillHome />
						Inicio
					</a>
				</Link>
				<Link href="/blog">
					<a className={`${router.asPath === "/blog" ? "active" : ""} link`}>
						<AiFillRead />
						Blog
					</a>
				</Link>

				<Button
					as="a"
					href="https://api.whatsapp.com/send?phone=5547991083543"
					target="__blank"
					rel="noopener"
					width={160}
					height={45}
					primary
					className="btn-callme"
				>
					<RiSendPlaneFill />
					Falar Comigo
				</Button>
			</nav>
		</S.Container>
	);
};

export default Sidebar;
