import {
    ClipboardCheck,
    Code2,
    Database,
    Globe,
    Wrench,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Skills() {
    const { t } = useTranslation()
    const groups = t('skills.groups', { returnObjects: true })

    const icons = [
        Code2,
        Globe,
        Database,
        Wrench,
        ClipboardCheck,
    ]

    return (
        <section className="section skills-section" id="skills">
            <div className="section-container">
                <p className="section-label">{t('skills.label')}</p>
                <h2 className="section-title">{t('skills.title')}</h2>

                <div className="skills-grid">
                    {Array.isArray(groups) &&
                        groups.map((group, index) => {
                            const Icon = icons[index]

                            return (
                                <article className="skill-card" key={group.title}>
                                    <div className="skill-icon" aria-hidden="true">
                                        <Icon size={25} />
                                    </div>

                                    <h3>{group.title}</h3>

                                    <div className="skill-list">
                                        {group.items.map((item) => (
                                            <span key={item}>{item}</span>
                                        ))}
                                    </div>
                                </article>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default Skills