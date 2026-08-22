import { BriefcaseBusiness } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Experience() {
    const { t } = useTranslation()
    const items = t('experience.items', { returnObjects: true })

    return (
        <section className="section experience-section" id="experience">
            <div className="section-container">
                <p className="section-label">{t('experience.label')}</p>
                <h2 className="section-title">{t('experience.title')}</h2>

                <div className="experience-timeline">
                    {Array.isArray(items) &&
                        items.map((item) => (
                            <article className="experience-item" key={item.title}>
                                <time className="experience-date">
                                    {item.period}
                                </time>

                                <div className="experience-marker" aria-hidden="true">
                                    <BriefcaseBusiness size={20} />
                                </div>

                                <div className="experience-card">
                                    <h3>{item.title}</h3>
                                    <p className="experience-description">
                                        {item.description}
                                    </p>

                                    <ul>
                                        {item.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>

                                    <div className="experience-technologies">
                                        {item.technologies.map((technology) => (
                                            <span key={technology}>{technology}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Experience