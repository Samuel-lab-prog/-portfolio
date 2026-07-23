import type { PortfolioProject } from "@Data/portuguese/projects";

export const projectsEn: PortfolioProject[] = [
	{
		id: "hellopoetry",
		name: "HelloPoetry",
		description:
			"A publishing platform for poets with authentication, comments, likes, moderation, and Docker-based delivery, designed to evolve safely while keeping the codebase testable.",
		categories: ["destaque", "fullstack"],
		keywords: ["React", "TypeScript", "Docker", "DDD/CQRS", "CI/CD"],
		visitUrl: "https://hello-poetry-frontend.vercel.app",
		githubUrl: "https://github.com/Samuel-lab-prog/helloPoetryFrontend",
		isAvailable: false,
		prints: [
			{
				src: "/projects/hellopoetry/hellopoetry-create-poem.png",
				alt: "HelloPoetry poem creation screen",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-profile.png",
				alt: "HelloPoetry profile screen",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-poem-detail.png",
				alt: "HelloPoetry poem reading screen",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-poem-love.png",
				alt: "HelloPoetry screen for the poem O amor nunca morre",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-poems-list.png",
				alt: "HelloPoetry poem list and search screen",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-comments.png",
				alt: "HelloPoetry comments section",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-author-profile.png",
				alt: "HelloPoetry author profile",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-create-preview.png",
				alt: "HelloPoetry poem preview during creation",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-moderation-pending.png",
				alt: "HelloPoetry pending moderation list",
			},
			{
				src: "/projects/hellopoetry/hellopoetry-moderation-card.png",
				alt: "HelloPoetry poem approval card in moderation",
			},
		],
	},
	{
		id: "blog",
		name: "blog",
		description:
			"A complete blog project with a reading experience, a backend API, and Docker-based deployment, designed to make content publishing, maintenance, and continuous evolution easier.",
		categories: ["destaque", "fullstack"],
		keywords: ["React", "Node.js", "TypeScript", "Docker", "UX"],
		visitUrl: "https://samuelsblog.xyz/",
		githubUrl: "https://github.com/Samuel-lab-prog/blogFrontend",
		isAvailable: false,
		prints: [
			{
				src: "/projects/blog/blog-home-ptbr.png",
				alt: "Blog home page in Portuguese with the latest posts list",
			},
			{
				src: "/projects/blog/blog-post-detalhe.png",
				alt: "Full blog post reading page",
			},
			{
				src: "/projects/blog/blog-post-ninguem-vai-te-completar.png",
				alt: "Blog post page for Ninguém vai te completar",
			},
		],
	},
];
