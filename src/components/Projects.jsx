import {
    Box,
    Building2,
    Gamepad2,
    Users,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'

function Projects() {
    const { t } = useTranslation()
    const projects = t('projects.items', { returnObjects: true })

    const icons = [
        Box,
        Building2,
        Gamepad2,
        Users,
    ]

    return (
        <section
            className="section projects-section"
            id="projects"
        >
            <div className="section-container">
                <p className="section-label">
                    {t('projects.label')}
                </p>

                <h2 className="section-title">
                    {t('projects.title')}
                </h2>

                <div className="projects-grid">
                    {Array.isArray(projects) &&
                        projects.map((project, index) => {
                            const Icon = icons[index]

                            return (
                                <article
                                    className="project-card"
                                    key={project.title}
                                >
                                    <div className="project-visual">
                                        <Icon aria-hidden="true" />

                                        <span className="project-year">
                                            {project.year}
                                        </span>
                                    </div>

                                    <div className="project-content">
                                        <p className="project-category">
                                            {project.category}
                                        </p>

                                        <h3>{project.title}</h3>

                                        <p className="project-description">
                                            {project.description}
                                        </p>

                                        <div className="project-technologies">
                                            {project.technologies.map((technology) => (
                                                <span key={technology}>
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>

                                        {project.repository && (
                                            <a
                                                className="project-repository"
                                                href={project.repository}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`${t('projects.viewCode')}: ${project.title}`}
                                            >
                                                <FaGithub aria-hidden="true" />

                                                <span>
                                                    {t('projects.viewCode')}
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </article>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default Projects