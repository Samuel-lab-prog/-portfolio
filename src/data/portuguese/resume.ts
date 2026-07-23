export type ResumeExperienceItem = {
	title: string;
	period: string;
	bullets: string[];
};

export type ResumeProjectItem = {
	name: string;
	description: string;
	highlights: string[];
};

export type ResumeData = {
	name: string;
	title: string;
	summary: string[];
	coreCompetencies: string[];
	experience: ResumeExperienceItem[];
	projects: ResumeProjectItem[];
	technologies: string[];
	languages: string[];
	contact: {
		label: string;
		value: string;
		href?: string;
	}[];
};

export const resumeData: ResumeData = {
	name: "Samuel Gomes Monni",
	title: "Desenvolvedor Fullstack",
	summary: [
		"Desenvolvedor fullstack com foco em arquitetura clara, implementação confiável e entregas consistentes.",
	],
	coreCompetencies: [
		"Arquitetura com foco em clareza, evolução e baixo acoplamento",
		"Frontend moderno com React, TypeScript, Vite e Astro",
		"Backend com Node.js, Bun, Express, Prisma e PostgreSQL",
		"Qualidade com testes, revisão de código e automação de CI/CD",
	],
	experience: [
		{
			title: "Freelancer - Desenvolvedor de Software",
			period: "2026 - atual",
			bullets: [
				"Atuação em demandas sob medida com foco em aplicações web, decisões técnicas pragmáticas e organização de código para fácil evolução.",
				"Estruturação de funcionalidades, componentes e integrações com atenção a manutenibilidade, clareza e entrega contínua.",
			],
		},
		{
			title: "IFRS Osório - Bolsista",
			period: "2024",
			bullets: [
				"Condução de grupo de estudos para OBMEP, com materiais de apoio e aulas voltadas a desempenho e autonomia dos alunos.",
				"Produção de conteúdo didático e acompanhamento de evolução dos participantes ao longo do projeto.",
			],
		},
		{
			title: "IFRS Osório - Bolsista",
			period: "2025",
			bullets: [
				"Coordenação de grupo de estudos para OBI e criação de curso de Git/GitHub para apoiar trabalho colaborativo.",
				"Desenvolvimento de materiais didáticos e apoio à formação técnica de estudantes em programação.",
			],
		},
	],
	projects: [
		{
			name: "HelloPoetry",
			description:
				"Plataforma fullstack de poesia com foco em experiência de leitura, moderação e evolução arquitetural contínua.",
			highlights: [
				"Stack: React, TypeScript, DDD, CQRS",
				"Fluxos de criação, leitura, comentários, perfil e moderação em uma experiência única",
				"Arquitetura pensada para escala, estabilidade e manutenção de longo prazo",
			],
		},
		{
			name: "blog",
			description:
				"Blog com frontend e backend próprios, desenhado para leitura, manutenção simplificada e evolução contínua de conteúdo.",
			highlights: [
				"Stack: Fullstack, React, Node.js, API REST",
				"Frontend responsivo com foco em legibilidade e navegação simples",
				"Base sólida para performance, organização e expansão gradual",
			],
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
	contact: [
		{
			label: "Portfólio",
			value: "portfolio-pi-khaki-44.vercel.app",
			href: "https://portfolio-pi-khaki-44.vercel.app/",
		},
		{
			label: "E-mail",
			value: "samuel.gomes.5762@gmail.com",
			href: "mailto:samuel.gomes.5762@gmail.com?subject=Contato%20pelo%20curr%C3%ADculo&body=Ol%C3%A1%2C%20Samuel!%20Vi%20seu%20curr%C3%ADculo%20e%20gostaria%20de%20conversar.",
		},
		{
			label: "Telefone",
			value: "(51) 99166-9896",
			href: "https://wa.me/5551991669896?text=Ol%C3%A1%2C%20Samuel!%20Vi%20seu%20curr%C3%ADculo%20e%20gostaria%20de%20conversar.",
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
