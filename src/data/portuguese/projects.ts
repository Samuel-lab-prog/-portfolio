export type ProjectCategory = "destaque" | "fullstack";

export type PortfolioProject = {
	id: string;
	name: string;
	description: string;
	categories: ProjectCategory[];
	keywords: string[];
	visitUrl: string;
	githubUrl: string;
	isAvailable: boolean;
	prints: { src: string; alt: string }[];
};

export const projects: PortfolioProject[] = [
	{
		id: "hellopoetry",
		name: "HelloPoetry",
		description:
			"Plataforma de publicação para poetas com autenticação, comentários, curtidas, moderação e entrega em Docker, pensada para evoluir com segurança e manter a base testável.",
		categories: ["destaque", "fullstack"],
		keywords: ["React", "TypeScript", "Docker", "DDD/CQRS", "CI/CD"],
		visitUrl: "https://hello-poetry-frontend.vercel.app",
		githubUrl: "https://github.com/Samuel-lab-prog/helloPoetryFrontend",
		isAvailable: false,
		prints: [
			{
				src: "/projects/hellopoetry/hellopoetry-create-poem.png",
				alt: "Tela de criação de poema no HelloPoetry",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-profile.png",
				alt: "Tela de perfil no HelloPoetry",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-poem-detail.png",
				alt: "Tela de leitura de poema no HelloPoetry",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-poem-love.png",
				alt: "Tela do poema O amor nunca morre no HelloPoetry",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-poems-list.png",
				alt: "Tela de listagem e busca de poemas no HelloPoetry",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-comments.png",
				alt: "Seção de comentários no HelloPoetry",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-author-profile.png",
				alt: "Perfil de autora no HelloPoetry",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-create-preview.png",
				alt: "Pré-visualização de poema na tela de criação do HelloPoetry",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-moderation-pending.png",
				alt: "Lista de poemas pendentes na moderação do HelloPoetry",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-moderation-card.png",
				alt: "Card de aprovação na moderação de poemas do HelloPoetry",
			},
		],
	},
	{
		id: "blog",
		name: "blog",
		description:
			"Projeto completo de blog com experiência de leitura, API no backend e deploy em Docker, pensado para facilitar publicação de conteúdo, manutenção e evolução contínua.",
		categories: ["destaque", "fullstack"],
		keywords: ["React", "Node.js", "TypeScript", "Docker", "UX"],
		visitUrl: "https://samuelsblog.xyz/",
		githubUrl: "https://github.com/Samuel-lab-prog/blogFrontend",
		isAvailable: false,
		prints: [
			{
				src: "/projects/blog/blog-home-ptbr.png",
				alt: "Página inicial do blog em português com listagem dos últimos posts",
			},
			{
				src: "/projects/blog/blog-post-detalhe.png",
				alt: "Página de leitura completa de um post do blog",
			},
			{
				src: "/projects/blog/blog-post-ninguem-vai-te-completar.png",
				alt: "Página do post Ninguém vai te completar no blog",
			},
		],
	},
];
