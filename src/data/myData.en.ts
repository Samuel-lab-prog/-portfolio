import type { MyData } from "./myData";

export const myDataEn: MyData = {
	name: "Samuel Gomes Monni",
	heroEyebrow: "Portfolio",
	heroDescription:
		"Full Stack developer focused on TypeScript, React, and Node.js, with experience in layered architecture, DDD, automated tests, and shipping complete applications from frontend to backend.",
	heroProofs: [
		"TypeScript, React, and Node.js",
		"DDD, CQRS, and automated tests",
		"End-to-end delivery from frontend to backend",
		"Real projects with active deployments",
	],
	navItems: [
		{ label: "Projects", href: "#projetos" },
		{ label: "Experience", href: "#experiencia" },
		{ label: "Skills", href: "#habilidades" },
		{ label: "Resume", href: "/curriculo-en" },
		{ label: "Contact", href: "#contato" },
	],
	skills: [
		"Multiple-time medalist in mathematics competitions, with experience solving complex problems and applying logical reasoning",
		"Software architecture focused on clarity, evolution, and low coupling",
		"Domain modeling and business rules designed to support product growth",
		"Technical decisions guided by context, cost, and long-term impact",
		"Clear communication and collaboration with teams and stakeholders",
		"A quality-driven mindset with tests, code review, and CI/CD automation",
	],
	experience: [
		{
			title: "Freelancer - Software Developer (2026 - present)",
			description:
				"Working on custom projects focused on fullstack web applications, scalable architecture, and production code quality.",
		},
		{
			title: "IFRS Osório - Scholarship Recipient (2024)",
			description:
				"Led an outreach project to create a study group for the Brazilian Public Schools Mathematics Olympiad (OBMEP). I created study materials and delivered classes for students, improving participant performance in the competition.",
		},
		{
			title: "IFRS Osório - Scholarship Recipient (2025)",
			description:
				"Led a teaching project to create a study group for the Brazilian Informatics Olympiad (OBI). I developed educational materials and delivered classes for students, resulting in a significant improvement in participant performance. I also created and taught a Git and GitHub course for students, helping them use these essential tools for software development and team collaboration.",
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
	contact: {
		intro: "Reach out through any of the channels below:",
		email: "samuel.gomes.5762@gmail.com",
		phone: "(51) 99166-9896",
		links: [
			{ label: "Send email", href: "mailto:samuel.gomes.5762@gmail.com" },
			{
				label: "Open WhatsApp",
				href: "https://wa.me/5551991669896?text=Hello%2C%20Samuel!%20I%27m%20reaching%20out%20from%20your%20portfolio%20and%20would%20like%20to%20talk.",
				external: true,
			},
			{ label: "View GitHub", href: "https://github.com/Samuel-lab-prog", external: true },
			{ label: "View Lattes", href: "http://lattes.cnpq.br/0187401279570368", external: true },
		],
	},
};
