import {FadeUp} from "@/components/FadeUp"

const experiences = [
    {
        period: "Mai. 2026 - Aujourd'hui",
        role: "Ingénieur logiciel - Conseil IT & Développement Full-stack",
        company: "Weldom - Breuil-le-Sec",
        description: [
            "Participation à l'évolution d'une solution métier déployée dans plus de 300 magasins. ",
            "Conception et développement de solutions logicielles sur mesure (web, mobile, API). ",
            "Gestion des tests, de la recette et du maintien en conditions opérationnelles des applications. ",
            "Analyse et résolution des incidents, correction des anomalies et mise en œuvre des évolutions fonctionnelles. ",
        ],
        technologies: ["Architecture logicielle", "Conseil", "Développement Full-stack", "Gestion de projet IT", "NodeJS"],
        current: true
    },
    {
        period: "Jan. 2026 - Aujourd'hui",
        role: "Ingénieur logiciel - Conseil IT & Développement",
        company: "Consultant Indépendant - France",
        description: [
            "Conception et développement de solutions logicielles sur mesure (web, mobile, API, automatisation, IA). ",
            "Architecture technique et déploiement (Cloud, Docker, CI/CD). ",
            "Réalisation de PoC, MVP et prototypes pour validation rapide d’idées produit. ",
            "Renfort d’équipe ou pilotage complet de projet. ",
        ],
        technologies: ["Architecture logicielle", "Conseil", "Développement de logiciels", "R&D", "Gestion de projet IT"],
        current: true
    },
    {
        period: "Jan. 2024 - Déc. 2025",
        role: "Ingénieur logiciel - Full-stack, DevOps & R&D IA",
        company: "ONTBO - Compiègne",
        description: [
            "Développement d’applications intégrant GenAI, data et informatique affective. ",
            "Conception backend, APIs et interfaces utilisateurs (Python, FastAPI, TypeScript, React/Vue). ",
            "Déploiement cloud et automatisation (Docker, CI/CD, AWS). ",
            "Prototypage de solutions innovantes en contexte R&D. ",
        ],
        links: [
            {href: "https://ontbo.com", label: "ontbo.com"},
            {href: "https://api.ontbo.com", label: "api.ontbo.com"},
            {href: "https://my.ontbo.com", label: "my.ontbo.com"},
        ],
        technologies: ["Architecture logicielle", "R&D", "IA", "Gestion de projet IT", "Cloud computing"],
        current: false
    },
    {
        period: "Fév. 2025 - Mar. 2025",
        role: "Ingénieur logiciel - IA & Computer Vision",
        company: "Nightingale Project - Mainz, Allemagne",
        description: [
            "Implémentation de modèles ML pour la détection de blessures 2D/3D. ",
            "Traitement de datasets médicaux et pipelines temps réel d’analyse d’images. ",
            "Extraction de caractéristiques et quantification de données biomédicales. ",
            "Déploiement via API REST et Docker. ",
        ],
        links: [
            {href: "https://nightingaleheart.com", label: "nightingaleheart.com"},
        ],
        technologies: ["Machine learning", "API REST", "Docker", "Architecture logicielle", "Python"],
        current: false
    },
    {
        period: "Jan. 2020 - Déc. 2023",
        role: "Développeur logiciel - Consultant",
        company: "UTeam - Compiègne",
        description: [
            "Développement et maintenance d’applications métiers Fullstack et systèmes embarqués (C/C++, IoT, ROS) ",
            "Participation à des projets de robotique et R&D ",
            "Analyse des besoins clients et accompagnement startups/PME/laboratoires ",
            "Contribution à l’architecture logicielle et bonnes pratiques d’ingénierie ",
        ],
        links: [
            {href: "https://uteam.fr/consultant/presentation/pierre-clement", label: "uteam.fr/consultant/presentation/pierre-clement"},
        ],
        technologies: ["Architecture logicielle", "R&D", "Conseil", "Gestion de projet IT", "Systèmes embarqués"],
        current: false
    }
]

export const Experience = () => {
    return <section id="experience" className="py-16 md:py-32 relative overflow-hidden">
        {/* Bg glows */}
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
            {/* Section header */}
            <div className="max-w-3xl mb-16">
                <FadeUp delay={0.0}>
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Mon Parcours Professionnel</span>
                </FadeUp>
                <FadeUp delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">Des expériences qui
                        <span className="font-signature italic font-normal text-white">
                            {" "}
                            parlent d'elles-mêmes.
                        </span>
                    </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                    <p className="text-muted-foreground">
                        Découvrez mon parcours professionnel, alliant conseil, développement logiciel et projets innovants. Chaque expérience m'a permis de renforcer mes compétences techniques et de gérer des projets ambitieux, de l'idée à la mise en production.
                    </p>
                </FadeUp>
            </div>

            {/* Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                {/* Experience Items */}
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <FadeUp delay={((idx+1)*0.1)+0.1} key={idx} className="relative grid md:grid-cols-2 gap-8">
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                            </div>
                            {/* Content */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">
                                        {exp.description}
                                    </p>
                                    <div className={`mt-2 flex flex-row gap-2 text-primary hover:text-highlight transition-colors duration-300 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.links && exp.links.map((link, linkIdx) => (
                                            <a href={link.href} target="_blank" rel="noopener noreferrer" key={linkIdx}>{link.label}</a>
                                        ))}
                                    </div>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.technologies.map((tech, techIdx) => (
                                            <span key={techIdx} className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </div>
    </section>
}
