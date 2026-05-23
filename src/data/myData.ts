export type ExperienceItem = {
	title: string;
	description: string;
};

export type ContactLink = {
	label: string;
	href: string;
	external?: boolean;
};

export type NavItem = {
	label: string;
	href: string;
};

export type MyData = {
	name: string;
	heroEyebrow: string;
	heroDescription: string;
	navItems: NavItem[];
	skills: string[];
	experience: ExperienceItem[];
	technologies: string[];
	languages: string[];
	contact: {
		intro: string;
		email: string;
		phone: string;
		links: ContactLink[];
	};
};

export const myData: MyData = {
	name: "Samuel Gomes Monni",
	heroEyebrow: "Portfólio",
	heroDescription:
		"Desenvolvedor de software e técnico em informática, com foco em arquitetura, fullstack web e qualidade de código.",
	navItems: [
		{ label: "Projetos", href: "#projetos" },
		{ label: "Experiência", href: "#experiencia" },
		{ label: "Habilidades", href: "#habilidades" },
		{ label: "Contato", href: "#contato" },
	],
	skills: [
		"Arquitetura de software: DDD, CQRS, Ports and Adapters",
		"Frontend: React, TypeScript, Vite, React Query, Chakra UI",
		"Backend: Bun, Elysia, Prisma, PostgreSQL, S3",
		"Qualidade: testes, lint, typecheck e métricas arquiteturais",
	],
	experience: [
		{
			title: "Freelancer - Desenvolvedor de Software (2026 - atual)",
			description:
				"Atuação em projetos sob demanda com foco em aplicações web fullstack, arquitetura escalável e qualidade de código em produção.",
		},
		{
			title: "IFRS Osorio - Bolsista (2024)",
			description:
				"Atuei em projeto de extensão focado no preparo para OBMEP, ensinando estudantes e estimulando pensamento matemático crítico.",
		},
		{
			title: "IFRS Osorio - Bolsista (2025)",
			description:
				"Preparei estudantes para a OBI com ensino de lógica de programação, estruturas de dados e algoritmos. Também criei e ministrei curso de Git e GitHub.",
		},
	],
	technologies: [
		"Front-end: React, HTML, CSS, JavaScript, TypeScript, Sass/SCSS, TailwindCSS",
		"Back-end: Node.js, Express, Elysia, Bun, Java",
		"Banco de dados: SQL, PostgreSQL, Prisma",
		"Ferramentas: Git, GitHub, Figma, Vite, UX, Office, Excel, Canva",
	],
	languages: [
		"Português: fluente (língua materna)",
		"Inglês: intermediário (leitura, escrita e compreensão)",
	],
	contact: {
		intro: "Fale comigo por qualquer canal abaixo:",
		email: "sg1976387@gmail.com",
		phone: "(51) 99166-9896",
		links: [
			{ label: "Enviar e-mail", href: "mailto:sg1976387@gmail.com" },
			{ label: "Abrir WhatsApp", href: "https://wa.me/5551991669896", external: true },
			{ label: "Ver GitHub", href: "https://github.com/Samuel-lab-prog", external: true },
		],
	},
};
