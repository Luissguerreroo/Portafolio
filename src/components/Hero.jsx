import { useState } from 'react'
import { FileText } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ResumeModal from './ResumeModal'
import profilePhoto from '../assets/profile.png'

function Hero() {
    const { t, i18n } = useTranslation()
    const [resumeOpen, setResumeOpen] = useState(false)

    const isSpanish = !i18n.resolvedLanguage?.startsWith('en')

    const profileLabel = isSpanish
        ? 'Imagen de perfil provisional de Luis Guerrero'
        : 'Temporary profile image of Luis Guerrero'

    const linkedinLabel = isSpanish
        ? 'Abrir LinkedIn de Luis'
        : "Open Luis's LinkedIn profile"

    const githubLabel = isSpanish
        ? 'Abrir GitHub de Luis'
        : "Open Luis's GitHub profile"

    return (
        <>
            <section className="hero" id="home">
                <div className="hero-content">
                    <div className="profile-circle">
                        <img
                            src={profilePhoto}
                            alt="Luis Guerrero"
                        />
                    </div>

                    <div className="hero-information">
                        <p className="hero-greeting">
                            {t('hero.greeting')}
                        </p>

                        <h1>{t('hero.name')}</h1>

                        <h2>{t('hero.role')}</h2>

                        <p className="hero-description">
                            {t('hero.description')}
                        </p>

                        <div className="hero-actions">
                            <div>
                                <p className="action-title">
                                    {t('hero.networks')}
                                </p>

                                <div className="social-links">
                                    <a
                                        className="linkedin-link"
                                        href="https://www.linkedin.com/in/luis-agusto-guerrero-montenegro-193136328"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={linkedinLabel}
                                        title="LinkedIn"
                                    >
                                        <FaLinkedin aria-hidden="true" />
                                    </a>

                                    <a
                                        className="github-link"
                                        href="https://github.com/Luissguerreroo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={githubLabel}
                                        title="GitHub"
                                    >
                                        <FaGithub aria-hidden="true" />
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p className="action-title">
                                    {t('hero.resume')}
                                </p>

                                <button
                                    type="button"
                                    className="resume-link"
                                    onClick={() => setResumeOpen(true)}
                                    aria-label={t('hero.viewResume')}
                                    title={t('hero.viewResume')}
                                >
                                    <FileText aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ResumeModal
                isOpen={resumeOpen}
                onClose={() => setResumeOpen(false)}
            />
        </>
    )
}

export default Hero