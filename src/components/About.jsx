import { Code2, GraduationCap, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function About() {
    const { t } = useTranslation()

    return (
        <section className="section about" id="about">
            <div className="section-container">
                <p className="section-label">{t('about.label')}</p>
                <h2 className="section-title">{t('about.title')}</h2>

                <div className="about-grid">
                    <div className="about-description">
                        <p>{t('about.firstParagraph')}</p>
                        <p>{t('about.secondParagraph')}</p>
                    </div>

                    <div className="about-details">
                        <article className="detail-card">
                            <GraduationCap />
                            <div>
                                <h3>{t('about.educationTitle')}</h3>
                                <p>{t('about.education')}</p>
                            </div>
                        </article>

                        <article className="detail-card">
                            <Code2 />
                            <div>
                                <h3>{t('about.focusTitle')}</h3>
                                <p>{t('about.focus')}</p>
                            </div>
                        </article>

                        <article className="detail-card">
                            <MapPin />
                            <div>
                                <h3>{t('about.statusTitle')}</h3>
                                <p>{t('about.status')}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About