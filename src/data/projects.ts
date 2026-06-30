export type ProjectCategory = "destaque" | "frontend" | "backend" | "fullstack";

export type PortfolioProject = {
	id: string;
	name: string;
	description: string;
	categories: ProjectCategory[];
	keywords: string[];
	isSpotlight?: boolean;
	visitUrl: string;
	githubUrl: string;
	isAvailable: boolean;
	prints: { src: string; alt: string }[];
};

export const projects: PortfolioProject[] = [
	{
		id: "hellopoetry-fullstack",
		name: "HelloPoetry",
		description:
			"Plataforma de publicação para poetas com autenticação, comentários, curtidas, moderação e entrega em Docker, pensada para evoluir com segurança e manter a base testável do frontend ao backend.",
		categories: ["destaque", "fullstack"],
		keywords: ["Fullstack", "CI/CD", "429 testes", "DDD/CQRS", "Docker", "DDD"],
		isSpotlight: true,
		visitUrl: "https://hello-poetry-frontend.vercel.app",
		githubUrl: "https://github.com/Samuel-lab-prog/helloPoetryFrontend",
		isAvailable: true,
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
		id: "hellopoetry-frontend",
		name: "helloPoetryFrontend",
		description:
			"Interface da rede social pensada para aumentar engajamento e retenção, com navegação clara, feedback rápido e arquitetura por features que acelera entregas e facilita manutenção.",
		categories: ["frontend"],
		keywords: ["React 19", "TypeScript", "Vite", "Chakra UI"],
		visitUrl: "https://hello-poetry-frontend.vercel.app",
		githubUrl: "https://github.com/Samuel-lab-prog/helloPoetryFrontend",
		isAvailable: true,
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
		id: "hellopoetry-backend",
		name: "helloPoetryBackend",
		description:
			"API para publicação, moderação e interação entre poemas, com separação clara de responsabilidades, DDD/CQRS e validações arquiteturais automatizadas para crescer com segurança.",
		categories: ["backend"],
		keywords: ["DDD", "CQRS", "Prisma", "Bun"],
		visitUrl: "https://hellopoetrybackend.onrender.com/api/v1/docs",
		githubUrl: "https://github.com/Samuel-lab-prog/helloPoetryBackend",
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
		id: "blog-fullstack",
		name: "blog",
		description:
			"Projeto completo de blog com experiência de leitura no frontend, estrutura de API no backend e deploy em Docker, pensado para facilitar publicação de conteúdo, manutenção e evolução contínua.",
		categories: ["destaque", "fullstack"],
		keywords: ["Frontend", "Backend", "GitHub", "React", "Node.js"],
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
	{
		id: "blog-frontend",
		name: "blogFrontend",
		description:
			"Frontend de blog otimizado para leitura e descoberta de conteúdo, melhorando a experiência do usuário com navegação simples, layout responsivo e foco em legibilidade.",
		categories: ["frontend"],
		keywords: ["React", "UX", "Responsivo"],
		visitUrl: "https://samuelsblog.xyz/",
		githubUrl: "https://github.com/Samuel-lab-prog/blogFrontend",
		isAvailable: true,
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
	{
		id: "blog-backend",
		name: "blogBackend",
		description:
			"Backend de blog organizado para facilitar crescimento do sistema, com estrutura de dados clara que simplifica manutenção, acelera novas funcionalidades e aumenta confiabilidade da API.",
		categories: ["backend"],
		keywords: ["Node.js", "TypeScript", "API REST"],
		visitUrl: "https://github.com/Samuel-lab-prog/blogBackend",
		githubUrl: "https://github.com/Samuel-lab-prog/blogBackend",
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
