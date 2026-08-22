import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

function Contact() {
    const { t } = useTranslation()

    return (
        <section className="section contact-section" id="contact">
            <div className="section-container">
                <p className="section-label">{t('contact.label')}</p>
                <h2 className="section-title">{t('contact.title')}</h2>

                <div className="contact-grid">
                    <div className="contact-introduction">
                        <h3>{t('contact.heading')}</h3>
                        <p>{t('contact.description')}</p>

                        <button
                            className="contact-primary-button"
                            type="button"
                            disabled
                        >
                            <Send size={20} aria-hidden="true" />
                            <span>{t('contact.write')}</span>
                        </button>
                    </div>

                    <div className="contact-options">
                        <a
                            className="contact-card"
                            href="mailto:luissguerreroo3@gmail.com"
                        >
                            <span className="contact-icon">
                                <Mail aria-hidden="true" />
                            </span>

                            <span>
                                <strong>{t('contact.email')}</strong>
                                <small>luissguerreroo3@gmail.com</small>
                            </span>
                        </a>

                        <a
                            className="contact-card"
                            href="https://www.linkedin.com/in/luis-agusto-guerrero-montenegro-193136328"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="contact-icon linkedin-contact-icon">
                                <FaLinkedin aria-hidden="true" />
                            </span>

                            <span>
                                <strong>LinkedIn</strong>
                                <small>{t('contact.linkedin')}</small>
                            </span>
                        </a>

                        <a
                            className="contact-card"
                            href="https://github.com/Luissguerreroo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="contact-icon github-contact-icon">
                                <FaGithub aria-hidden="true" />
                            </span>

                            <span>
                                <strong>GitHub</strong>
                                <small>Luissguerreroo</small>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact