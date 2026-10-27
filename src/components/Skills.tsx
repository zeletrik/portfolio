import { Server, Bot, Cloud } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Backend Development',
        icon: <Server size={24} />,
        skills: ['Kotlin', 'Kotlin Coroutines', 'Java', 'Spring Boot', 'Spring WebFlux', 'Spring Modulith', 'Microservices', 'Library & API design']
    },
    {
        title: 'Agentic AI',
        icon: <Bot size={24} />,
        skills: ['Spring AI', 'Koog', 'MCP', 'RAG', 'Vector Databases', 'Guardrails', 'LangGraph', 'Python', 'LLMOps']
    },
    {
        title: 'Cloud & DevOps',
        icon: <Cloud size={24} />,
        skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Helm', 'CI/CD Pipelines', 'Monitoring', 'OpenTelemetry']
    }
];

export function Skills() {
    return (
        <section className={styles.section} id="skills">
            <h2 className={styles.title}>Technical Expertise</h2>
            <div className={styles.grid}>
                {skillCategories.map((category, index) => (
                    <div key={index} className={`${styles.card} surface`}>
                        <div className={styles.header}>
                            <div className={styles.iconWrapper}>{category.icon}</div>
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                        </div>
                        <div className={styles.list}>
                            {category.skills.map(skill => (
                                <span key={skill} className={styles.skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
