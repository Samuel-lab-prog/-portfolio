import type { ResumeData } from "@Data/portuguese/resume";

export const resumeEnData: ResumeData = {
	name: "Samuel Gomes Monni",
	title: "Fullstack Developer",
	summary: [
		"Fullstack developer focused on clear architecture, reliable implementation, and consistent delivery.",
	],
	coreCompetencies: [
		"Architecture focused on clarity, evolution, and low coupling",
		"Modern frontend with React, TypeScript, Vite, and Astro",
		"Backend with Node.js, Bun, Express, Prisma, and PostgreSQL",
		"Quality through tests, code review, and CI/CD automation",
	],
	experience: [
		{
			title: "Freelancer - Software Developer",
			period: "2026 - present",
			bullets: [
				"Delivered custom web application work with pragmatic technical decisions and code organization designed for easy evolution.",
				"Structured features, components, and integrations with a strong focus on maintainability, clarity, and continuous delivery.",
			],
		},
		{
			title: "IFRS Osório - Scholarship Recipient",
			period: "2024",
			bullets: [
				"Led an OBMEP study group, preparing support materials and classes aimed at student performance and autonomy.",
				"Produced educational content and tracked participant progress throughout the project.",
			],
		},
		{
			title: "IFRS Osório - Scholarship Recipient",
			period: "2025",
			bullets: [
				"Coordinated an OBI study group and created a Git/GitHub course to support collaborative work.",
				"Developed teaching materials and supported technical training for programming students.",
			],
		},
	],
	projects: [
		{
			name: "HelloPoetry",
			description:
				"Fullstack poetry platform focused on reading experience, moderation workflows, and an architecture designed for continuous evolution.",
			highlights: [
				"Stack: React, TypeScript, DDD, CQRS",
				"Flows for creation, reading, comments, profile, and moderation in a unified experience",
				"Architecture designed for scale, stability, and long-term maintenance",
			],
		},
		{
			name: "blog",
			description:
				"Blog with dedicated frontend and backend, designed for readability, simplified maintenance, and continuous content delivery.",
			highlights: [
				"Stack: Fullstack, React, Node.js, REST API",
				"Responsive frontend with a focus on readability and simple navigation",
				"Solid base for performance, organization, and gradual expansion",
			],
		},
	],
	technologies: [
		"Front-end: React, HTML, CSS, JavaScript, TypeScript, Sass/SCSS, TailwindCSS, Next.js, Vite",
		"Back-end: Node.js, Express, Elysia, Bun, Java, JavaScript, TypeScript",
		"Databases: SQL, PostgreSQL, Prisma",
		"Tools: Git, GitHub, Figma, Vite, UX, Office, Excel, Canva, PowerPoint",
	],
	languages: [
		"Portuguese: fluent (native language)",
		"English: intermediate (reading, writing, and comprehension)",
	],
	contact: [
		{
			label: "Portfolio",
			value: "portfolio-pi-khaki-44.vercel.app",
			href: "https://portfolio-pi-khaki-44.vercel.app/",
		},
		{
			label: "E-mail",
			value: "samuel.gomes.5762@gmail.com",
			href: "mailto:samuel.gomes.5762@gmail.com?subject=Contact%20via%20resume&body=Hello%2C%20Samuel!%20I%20found%20your%20resume%20and%20would%20like%20to%20talk.",
		},
		{
			label: "Phone",
			value: "(51) 99166-9896",
			href: "https://wa.me/5551991669896?text=Hello%2C%20Samuel!%20I%20found%20your%20resume%20and%20would%20like%20to%20talk.",
		},
		{
			label: "GitHub",
			value: "github.com/Samuel-lab-prog",
			href: "https://github.com/Samuel-lab-prog",
		},
		{
			label: "Lattes",
			value: "lattes.cnpq.br/0187401279570368",
			href: "http://lattes.cnpq.br/0187401279570368",
		},
	],
};
