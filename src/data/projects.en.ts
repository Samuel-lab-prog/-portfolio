import type { PortfolioProject } from "./projects";

export const projectsEn: PortfolioProject[] = [
	{
		id: "hellopoetry-fullstack",
		name: "HelloPoetry",
		description:
			"A publishing platform for poets with authentication, comments, likes, and moderation, designed to evolve safely while keeping the codebase testable from frontend to backend.",
		categories: ["destaque", "fullstack"],
		keywords: ["429 tests", "Authentication", "Moderation", "DDD/CQRS"],
		isSpotlight: true,
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
		id: "hellopoetry-frontend",
		name: "helloPoetryFrontend",
		description:
			"Social network interface designed to increase engagement and retention, with clear navigation, fast feedback, and feature-oriented architecture that speeds up delivery and simplifies maintenance.",
		categories: ["frontend"],
		keywords: ["React 19", "TypeScript", "Vite", "Chakra UI"],
		visitUrl: "https://hello-poetry-frontend.vercel.app",
		githubUrl: "https://github.com/Samuel-lab-prog/helloPoetryFrontend",
		isAvailable: true,
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
		id: "hellopoetry-backend",
		name: "helloPoetryBackend",
		description:
			"API for publishing, moderating, and interacting with poems, with clear responsibility boundaries, DDD/CQRS, and automated architecture validation to scale safely.",
		categories: ["backend"],
		keywords: ["DDD", "CQRS", "Prisma", "Bun"],
		visitUrl: "https://hellopoetrybackend.onrender.com/api/v1/docs",
		githubUrl: "https://github.com/Samuel-lab-prog/helloPoetryBackend",
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
		id: "blog-fullstack",
		name: "blog",
		description:
			"Complete blog project with a reading experience on the frontend and an API structure on the backend, designed to make content publishing, maintenance, and continuous evolution easier.",
		categories: ["destaque", "fullstack"],
		keywords: ["Fullstack", "React", "Node.js", "REST API"],
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
	{
		id: "blog-frontend",
		name: "blogFrontend",
		description:
			"Blog frontend optimized for reading and content discovery, improving the user experience with simple navigation, responsive layout, and a strong focus on readability.",
		categories: ["frontend"],
		keywords: ["React", "UX", "Responsive"],
		visitUrl: "https://samuelsblog.xyz/",
		githubUrl: "https://github.com/Samuel-lab-prog/blogFrontend",
		isAvailable: true,
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
	{
		id: "blog-backend",
		name: "blogBackend",
		description:
			"Blog backend structured to support system growth, with a clear data model that simplifies maintenance, speeds up new features, and increases API reliability.",
		categories: ["backend"],
		keywords: ["Node.js", "TypeScript", "REST API"],
		visitUrl: "https://github.com/Samuel-lab-prog/blogBackend",
		githubUrl: "https://github.com/Samuel-lab-prog/blogBackend",
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
