export type ProjectCategory = "destaque" | "frontend" | "backend" | "fullstack";

export type PortfolioProject = {
	id: string;
	name: string;
	description: string;
	categories: ProjectCategory[];
	keywords: string[];
	visitUrl: string;
	githubUrl: string;
	prints: { src: string; alt: string }[];
};

export const projects: PortfolioProject[] = [
	{
		id: "hellopoetry-fullstack",
		name: "HelloPoetry",
		description:
			"Plataforma completa para poetas publicarem, interagirem e crescerem em comunidade, com foco em experiência fluida no frontend e arquitetura robusta no backend para suportar evolução contínua do produto.",
		categories: ["destaque", "fullstack"],
		keywords: ["429 testes", "50k linhas", "DDD", "CQRS"],
		visitUrl: "https://hello-poetry-frontend.vercel.app",
		githubUrl: "https://github.com/Samuel-lab-prog/helloPoetryFrontend",
		prints: [
			{ src: "/projects/hellopoetry/print-1.svg", alt: "Print 1 do HelloPoetry" },
			{ src: "/projects/hellopoetry/print-2.svg", alt: "Print 2 do HelloPoetry" },
			{ src: "/projects/hellopoetry/print-3.svg", alt: "Print 3 do HelloPoetry" },
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
		prints: [
			{ src: "/projects/hellopoetry/print-1.svg", alt: "Print 1 do helloPoetryFrontend" },
			{ src: "/projects/hellopoetry/print-2.svg", alt: "Print 2 do helloPoetryFrontend" },
			{ src: "/projects/hellopoetry/print-3.svg", alt: "Print 3 do helloPoetryFrontend" },
		],
	},
	{
		id: "hellopoetry-backend",
		name: "helloPoetryBackend",
		description:
			"API projetada para escalar regras de negócio com segurança, separando responsabilidades com DDD/CQRS e reduzindo regressões por meio de validações arquiteturais automatizadas.",
		categories: ["backend"],
		keywords: ["DDD", "CQRS", "Prisma", "Bun"],
		visitUrl: "https://hellopoetrybackend.onrender.com/api/v1/docs",
		githubUrl: "https://github.com/Samuel-lab-prog/helloPoetryBackend",
		prints: [
			{
				src: "/projects/hellopoetry-backend/print-1.svg",
				alt: "Print 1 do helloPoetryBackend",
			},
			{
				src: "/projects/hellopoetry-backend/print-2.svg",
				alt: "Print 2 do helloPoetryBackend",
			},
			{
				src: "/projects/hellopoetry-backend/print-3.svg",
				alt: "Print 3 do helloPoetryBackend",
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
		visitUrl: "https://github.com/Samuel-lab-prog/blogFrontend",
		githubUrl: "https://github.com/Samuel-lab-prog/blogFrontend",
		prints: [
			{ src: "/projects/blog/print-1.svg", alt: "Print 1 do blogFrontend" },
			{ src: "/projects/blog/print-2.svg", alt: "Print 2 do blogFrontend" },
			{ src: "/projects/blog/print-3.svg", alt: "Print 3 do blogFrontend" },
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
		prints: [
			{ src: "/projects/blog-backend/print-1.svg", alt: "Print 1 do blogBackend" },
			{ src: "/projects/blog-backend/print-2.svg", alt: "Print 2 do blogBackend" },
			{ src: "/projects/blog-backend/print-3.svg", alt: "Print 3 do blogBackend" },
		],
	},
	{
		id: "croma",
		name: "croma",
		description:
			"Site em Astro com foco em performance e apresentação visual, entregando carregamento rápido e experiência consistente para destacar conteúdo e identidade do projeto.",
		categories: ["frontend"],
		keywords: ["Astro", "UI", "Estático"],
		visitUrl: "https://github.com/Samuel-lab-prog/croma",
		githubUrl: "https://github.com/Samuel-lab-prog/croma",
		prints: [
			{ src: "/projects/croma/print-1.svg", alt: "Print 1 do croma" },
			{ src: "/projects/croma/print-2.svg", alt: "Print 2 do croma" },
			{ src: "/projects/croma/print-3.svg", alt: "Print 3 do croma" },
		],
	},
];
