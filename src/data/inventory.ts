export interface InventoryItem {
	id: string;
	slot: string;
	title: string;
	rarity: 'MYTHIC' | 'LEGENDARY' | 'EPIC' | 'RARE' | 'EXOTIC';
	rarityLabel: string;
	type: string;
	icon: string;
	metric: string;
	description: string;
	lore: string;
	stats: { name: string; val: string }[];
	tags: string[];
	accent: string;
}

export function getInventory(locale: 'es' | 'en'): InventoryItem[] {
	return [
		{
			id: 'sabbatical',
			slot: 'SLOT 01 // KEYSTONE',
			title: locale === 'es' ? 'Pausa Intencional & Mentoría Estratégica' : 'Intentional Pause & Strategic Advisory',
			rarity: 'MYTHIC',
			rarityLabel: locale === 'es' ? 'MÍTICO // SABÁTICO 2026' : 'MYTHIC // 2026 SABBATICAL',
			type: locale === 'es' ? 'Buff Activo: Sabático de 6 Meses' : 'Active Buff: 6-Month Sabbatical',
			icon: '🌀',
			metric: locale === 'es' ? '6 Meses · Sabático 2026' : '6 Months · 2026 Sabbatical',
			description: locale === 'es'
				? 'Periodo sabático de 6 meses enfocado en mentoría estratégica, aprendizaje continuo y proyectos de innovación personal tras etapas de alto impacto en Gaming y EdTech (Scopely, LootMint y DEV.F).'
				: '6-month intentional career break focused on strategic mentorship, continuous learning, and personal innovation following high-impact leadership in Gaming & EdTech (Scopely, LootMint, DEV.F).',
			lore: locale === 'es'
				? 'Enfoque Activo: Mentoría estratégica 1:1, exploración continua en GenAI e investigación técnica.'
				: 'Active Focus: 1:1 strategic advisory, active GenAI research, and high-impact technical initiatives.',
			stats: [
				{ name: 'DURATION', val: '6 MONTHS' },
				{ name: 'FOCUS', val: 'MENTORSHIP & AI' },
				{ name: 'STATUS', val: 'ACTIVE OASIS' },
			],
			tags: ['Mentorship', 'Strategic Advisory', 'GenAI', 'Continuous Learning'],
			accent: '#00F5FF',
		},
		{
			id: 'scopely',
			slot: 'SLOT 02 // TROPHY',
			title: 'Scopely: Discord Core & Unity Scale',
			rarity: 'LEGENDARY',
			rarityLabel: locale === 'es' ? 'LEGENDARIO // GAMING SCALE' : 'LEGENDARY // GAMING SCALE',
			type: locale === 'es' ? 'Microservicios Java · Unity C# Game Servers' : 'Java Microservices · Unity C# Game Servers',
			icon: '⚔️',
			metric: 'Aug 2024 — Aug 2026 · +500K DAU',
			description: locale === 'es'
				? 'Arquitectó el backend del primer chat nativo en Discord del estudio en Java para +500K usuarios concurrentes. Optimizó servicios dedicados en servidores de juego Unity C# reduciendo latencia. Dirigió el módulo de calendario de eventos para millones de usuarios (React, TS, Shadcn UI) e integró agentes de IA en todo el SDLC.'
				: 'Architected backend logic for studio’s first native Discord chat integration in Java (+500K active users). Maintained and optimized dedicated backend services for Unity C# game servers reducing latency. Led event calendar module servicing millions of users (React, TS, Shadcn UI), and integrated custom AI agents across the SDLC.',
			lore: locale === 'es'
				? 'Habilidad Pasiva: Resiliencia a picos masivos de concurrencia y orquestación de agentes de IA en análisis arquitectónico, testing y generación de código.'
				: 'Passive Perk: Massive concurrency resilience and custom AI agent orchestration across architectural analysis, testing, and automation.',
			stats: [
				{ name: 'CONCURRENCY', val: '+500K ACTIVE DAU' },
				{ name: 'GAME SERVER', val: 'UNITY C# LATENCY' },
				{ name: 'AI AGENTS', val: 'FULL SDLC AUTOMATION' },
			],
			tags: ['Java', 'Discord API', 'Unity C#', 'React Microfrontends', 'Shadcn UI', 'AI Agents'],
			accent: '#FFE600',
		},
		{
			id: 'lootmint',
			slot: 'SLOT 03 // SHARD',
			title: 'LootMint: Gaming MVP & Shards',
			rarity: 'EPIC',
			rarityLabel: locale === 'es' ? 'ÉPICO // GAME-FI MVP' : 'EPIC // GAME-FI MVP',
			type: locale === 'es' ? 'Arquitectura MVP · Shard Loot Loops' : 'MVP Architecture · Shard Loot Loops',
			icon: '💎',
			metric: 'Contract SWE · Sep 2025 — Feb 2026',
			description: locale === 'es'
				? 'Construyó y entregó el MVP funcional para plataforma de gaming basada en loot: apertura de cajas, economía in-game y recompensas mediante mecánicas de shards. Lideró la implementación frontend de cada componente y backend con NestJS, PostgreSQL, Redis y despliegue en AWS con Claude Code y Copilot.'
				: 'Built and delivered functional MVP for loot-based gaming platform: opening boxes, in-game currency, and crypto-backed rewards via shard mechanics. Led frontend implementation across all components, backed by NestJS, PostgreSQL, Redis, and AWS with Claude Code & Copilot.',
			lore: locale === 'es'
				? 'Perk de Botín: Entrega autónoma end-to-end desde diseño técnico hasta producción con arquitectura escalable de shards.'
				: 'Loot Perk: High-autonomy end-to-end delivery from technical design to production with scalable shard architecture.',
			stats: [
				{ name: 'ROLE', val: 'CONTRACT SWE' },
				{ name: 'STACK', val: 'NEXT.JS + NESTJS' },
				{ name: 'AI TOOLING', val: 'CLAUDE CODE + COPILOT' },
			],
			tags: ['TypeScript', 'NestJS', 'Next.js', 'PostgreSQL', 'Redis', 'AWS', 'Claude Code'],
			accent: '#FF007F',
		},
		{
			id: 'devf',
			slot: 'SLOT 04 // SCROLL',
			title: 'DEV.F: EdTech Platform Scale',
			rarity: 'RARE',
			rarityLabel: locale === 'es' ? 'RARO // EDTECH SCALE' : 'RARE // EDTECH SCALE',
			type: locale === 'es' ? 'Plataforma Educativa & Gestión de Datos' : 'Educational Platform & Data Pipelines',
			icon: '📜',
			metric: 'Jun 2020 — Aug 2024 · 2,500+ Alumnos',
			description: locale === 'es'
				? 'Escaló la plataforma educativa de 70 a más de 2,500 estudiantes remotos online en LATAM (ReactJS). Optimizó pipelines de correo y CRM en GCP para 10,000 usuarios, integró Slack/Discord para 10,000 miembros, y automatizó selección de 2,000 aspirantes de Bécalas BID Lab con webhooks de Zoom y HubSpot. Elevó conversión de 20 a 500 checkouts/mes.'
				: 'Scaled educational platform from 70 to 2,500+ remote students across LATAM (ReactJS). Optimized CRM/mail on GCP for 10,000 users, integrated Slack/Discord for 10,000 members, and automated 2,000 Bécalas BID Lab applications with Zoom/HubSpot webhooks. Boosted checkout capacity from 20 to 500/month.',
			lore: locale === 'es'
				? 'Bonificación de Gremio: Escalamiento del 3,400% en infraestructura educativa remota en Latinoamérica.'
				: 'Guild Bonus: 3,400% remote educational infrastructure scaling multiplier across Latin America.',
			stats: [
				{ name: 'STUDENTS', val: '2,500+ ONLINE' },
				{ name: 'PIPELINES', val: 'GCP + HUBSPOT' },
				{ name: 'CHECKOUTS', val: '20 → 500 / MONTH' },
			],
			tags: ['ReactJS', 'NodeJS', 'VueJS', 'MongoDB', 'GCP', 'HubSpot Webhooks'],
			accent: '#00F5FF',
		},
		{
			id: 'teaching',
			slot: 'SLOT 05 // GUILD',
			title: 'TECNOLOchicas & Sensei DEV.F',
			rarity: 'EPIC',
			rarityLabel: locale === 'es' ? 'ÉPICO // DOCENCIA & MENTORÍA' : 'EPIC // TEACHING & MENTORSHIP',
			type: locale === 'es' ? 'Lead Mentor & Coordinadora Académica' : 'Lead Mentor & Academic Coordinator',
			icon: '🎓',
			metric: '4 Cohortes Mujeres · 4,000+ Alumnos',
			description: locale === 'es'
				? 'Lead Mentor en TECNOLOchicas formando a 4 cohortes de 50-150 mujeres jóvenes en Frontend (HTML, CSS, JS). En DEV.F: Coordinó a más de 50 Senseis en el Master in Coding, impartió clases a más de 4,000 estudiantes en LATAM y formó a más de 1,000 personas en reconversión profesional en Data Science y Machine Learning (Python, SQL, ML).'
				: 'Lead Mentor at TECNOLOchicas guiding 4 cohorts of 50-150 young women in Frontend (HTML, CSS, JS). At DEV.F: Directed alignment for 50+ Senseis, delivered web development to >4,000 students across LATAM, and instructed >1,000 career-changers in Data Science & Machine Learning (Python, SQL, ML).',
			lore: locale === 'es'
				? 'Poder de Formación: +5,000 egresados han participado en sus masterclasses técnicas y de liderazgo.'
				: 'Teaching Multiplier: Over 5,000 alumni have participated in her technical and leadership masterclasses.',
			stats: [
				{ name: 'TECNOLOCHICAS', val: '4 COHORTES (150+)' },
				{ name: 'STUDENTS', val: '4,000+ LATAM' },
				{ name: 'DS & ML', val: '1,000+ CAREER-CHANGERS' },
			],
			tags: ['TECNOLOchicas', 'Sensei Coordinator', 'Data Science', 'Machine Learning', 'STEM'],
			accent: '#CCFF00',
		},
		{
			id: 'community',
			slot: 'SLOT 06 // BEACON',
			title: 'Google for Startups & WTM Ambassador',
			rarity: 'EXOTIC',
			rarityLabel: locale === 'es' ? 'EXÓTICO // LIDERAZGO GLOBAL' : 'EXOTIC // GLOBAL LEADERSHIP',
			type: locale === 'es' ? 'Mentora de Startups & Embajadora' : 'Startup Mentor & Ambassador',
			icon: '🌟',
			metric: 'Google Accelerator · WTM · GDSC Lead',
			description: locale === 'es'
				? 'Mentora en Google for Startups Accelerator guiando a equipos de startups en arquitectura y crecimiento. Women Techmakers Ambassador (Google for Developers) organizando eventos y mentorías. Tech Lead en Velara impulsando crédito para 100 mujeres emprendedoras. Ex-Lead de GDSC ESCOM IPN liderando equipo de 30 voluntarios.'
				: 'Mentor at Google for Startups Accelerator guiding startup teams in architecture and growth. Women Techmakers Ambassador organizing talks and mentorship. Tech Lead at Velara empowering 100 women entrepreneurs. Former GDSC ESCOM IPN Lead managing 30 volunteers.',
			lore: locale === 'es'
				? 'Aura Pasiva: Impulso al ecosistema emprendedor de startups e inclusión de mujeres en tecnología de habla hispana.'
				: 'Passive Aura: High-impact catalyst for startup accelerators and women leadership in Spanish-speaking tech.',
			stats: [
				{ name: 'MENTORSHIP', val: 'GOOGLE ACCELERATOR' },
				{ name: 'AMBASSADOR', val: 'WOMEN TECHMAKERS' },
				{ name: 'LEADERSHIP', val: 'VELARA + GDSC + GDG' },
			],
			tags: ['Google for Startups', 'WTM Ambassador', 'Velara', 'GDSC Lead', 'Technolatinas'],
			accent: '#00F5FF',
		},
		{
			id: 'stack',
			slot: 'SLOT 07 // ARSENAL',
			title: 'Tech Arsenal & ESCOM IPN Core',
			rarity: 'LEGENDARY',
			rarityLabel: locale === 'es' ? 'LEGENDARIO // ARSENAL COMPLETO' : 'LEGENDARY // FULL ARSENAL',
			type: locale === 'es' ? 'Ing. en Sistemas Computacionales · ESCOM' : 'B.S. Computer Systems · ESCOM IPN',
			icon: '⚡',
			metric: 'ESCOM - IPN · Full Stack Tech Lead',
			description: locale === 'es'
				? 'Ingeniera en Sistemas Computacionales por ESCOM - IPN. Dominio de JavaScript, Python, Java, C, Elixir y C#. Frontend de alta velocidad (Astro, React, Vue, TS). Backend distribuido y APIs (NestJS, Node, Express). Bases de datos (PostgreSQL, MongoDB, Redis, Neo4j, MySQL). Cloud & DevOps (AWS, GCP, Docker, CI/CD, Terraform).'
				: 'B.S. in Computer Systems Engineering from ESCOM - IPN. Polyglot mastery across JavaScript, Python, Java, C, Elixir, C#. High-velocity frontend (Astro, React, Vue, TS), distributed backend (NestJS, Node, Express), databases (PostgreSQL, MongoDB, Redis, Neo4j), and Cloud/DevOps (AWS, GCP, Docker, Terraform).',
			lore: locale === 'es'
				? 'Armamento Técnico: 0 KB JS por defecto en arquitectura Astro, 120 FPS de aceleración y fluidez total.'
				: 'Tech Loadout: 0 KB JS default architecture with Astro, 120 FPS hardware-accelerated animations.',
			stats: [
				{ name: 'DEGREE', val: 'B.S. ESCOM - IPN' },
				{ name: 'LANGUAGES', val: 'JS, PY, JAVA, C, ELIXIR, C#' },
				{ name: 'CLOUD & DB', val: 'AWS, GCP, PG, REDIS, MONGO' },
			],
			tags: ['JavaScript', 'Python', 'Java', 'C#', 'Elixir', 'React', 'Astro', 'AWS', 'GCP', 'PostgreSQL', 'Redis'],
			accent: '#FF007F',
		},
	];
}
