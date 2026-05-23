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
			"Rede social para poetas com frontend em React e backend com DDD/CQRS, incluindo publicacao de poemas, interacoes sociais e moderacao.",
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
			"Frontend da rede social HelloPoetry com React, TypeScript e arquitetura por features.",
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
			"Backend do HelloPoetry com DDD, CQRS, Elysia, Prisma e regras arquiteturais automatizadas.",
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
			"Interface do blog focada em leitura, navegacao por posts e experiencia de escrita limpa.",
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
			"API do blog com TypeScript e camada de dados estruturada para evolucao e manutencao.",
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
			"Projeto em Astro com foco em experiencia visual, estrutura limpa e entrega estatica.",
		categories: ["frontend"],
		keywords: ["Astro", "UI", "Est�tico"],
		visitUrl: "https://github.com/Samuel-lab-prog/croma",
		githubUrl: "https://github.com/Samuel-lab-prog/croma",
		prints: [
			{ src: "/projects/croma/print-1.svg", alt: "Print 1 do croma" },
			{ src: "/projects/croma/print-2.svg", alt: "Print 2 do croma" },
			{ src: "/projects/croma/print-3.svg", alt: "Print 3 do croma" },
		],
	},
];
