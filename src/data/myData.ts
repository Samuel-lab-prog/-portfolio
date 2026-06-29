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
		{ label: "Currículo", href: "/curriculo" },
		{ label: "Contato", href: "#contato" },
	],
	skills: [
		"Multimedalhista em competições de matemática, com experiência em resolução de problemas complexos e raciocínio lógico",
		"Definição de arquitetura de software com foco em clareza, evolução e baixo acoplamento",
		"Modelagem de domínio e regras de negócio para suportar crescimento do produto",
		"Tomada de decisão técnica orientada a contexto, custo e impacto no longo prazo",
		"Comunicação clara e colaboração com time e stakeholders",
		"Cultura de qualidade com testes, revisão de código e automação de CI/CD",
	],
	experience: [
		{
			title: "Freelancer - Desenvolvedor de Software (2026 - atual)",
			description:
				"Atuação em projetos sob demanda com foco em aplicações web fullstack, arquitetura escalável e qualidade de código em produção.",
		},
		{
			title: "IFRS Osório - Bolsista (2024)",
			description:
				"Coordenei um projeto de extensão para a criação de um grupo de estudos para a Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP). Criei materiais de estudo e administrei aulas para os discentes, melhorando o desempenho dos participantes na competição.",
		},
		{
			title: "IFRS Osório - Bolsista (2025)",
			description:
				"Coordenei um projeto de ensino para criar um grupo de estudos para a Olimpíada Brasileira de Informática (OBI). Desenvolvi materiais didáticos e conduzi aulas para os estudantes, resultando em melhora significativa no desempenho dos participantes na competição. Além disso, criei e ministrei um curso de Git e GitHub para os alunos, capacitando-os a utilizar essas ferramentas essenciais para o desenvolvimento de software e colaboração em projetos de programação.",
		},
	],
	technologies: [
		"Front-end: React, HTML, CSS, JavaScript, TypeScript, Sass/SCSS, TailwindCSS, Next.js, Vite",
		"Back-end: Node.js, Express, Elysia, Bun, Java, JavaScript, TypeScript",
		"Banco de dados: SQL, PostgreSQL, Prisma",
		"Ferramentas: Git, GitHub, Figma, Vite, UX, Office, Excel, Canva, PowerPoint",
	],
	languages: [
		"Português: fluente (língua materna)",
		"Inglês: intermediário (leitura, escrita e compreensão)",
	],
	contact: {
		intro: "Fale comigo por qualquer canal abaixo:",
		email: "samuel.gomes.5762@gmail.com",
		phone: "(51) 99166-9896",
		links: [
			{ label: "Enviar e-mail", href: "mailto:samuel.gomes.5762@gmail.com" },
			{
				label: "Abrir WhatsApp",
				href: "https://wa.me/5551991669896?text=Ol%C3%A1%2C%20Samuel!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
				external: true,
			},
			{ label: "Ver GitHub", href: "https://github.com/Samuel-lab-prog", external: true },
			{ label: "Ver Lattes", href: "http://lattes.cnpq.br/0187401279570368", external: true },
		],
	},
};
