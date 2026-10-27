import { Server, Cpu, Cloud } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Backend Development',
        icon: <Server size={24} />,
        skills: ['Kotlin', 'Kotlin Coroutines', 'Java', 'Spring Boot', 'Spring Framework', 'Microservices', 'REST APIs', 'Reactive']
    },
    {
        title: 'AI & Data',
        icon: <Cpu size={24} />,
        skills: ['Python', 'LangGraph', 'RAG', 'LLM Integration', 'Spring AI', 'Vector Databases', 'Koog', 'LLMOps']
    },
    {
        title: 'Cloud & DevOps',
        icon: <Cloud size={24} />,
        skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'HELM', 'CI/CD Pipelines', 'Monitoring', 'OpenTelemetry']
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
