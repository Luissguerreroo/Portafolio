import { useEffect } from 'react'
import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function ResumeModal({ isOpen, onClose }) {
    const { t, i18n } = useTranslation()
    const cvUrl = `${import.meta.env.BASE_URL}LuisCV.pdf`
    const isSpanish = i18n.resolvedLanguage?.startsWith('es')

    const resumeTitle = isSpanish
        ? 'Currículum de Luis Guerrero'
        : 'Luis Guerrero resume'

    useEffect(() => {
        if (!isOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        const closeWithEscape = (event) => {
            if (event.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', closeWithEscape)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', closeWithEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="resume-overlay" onClick={onClose}>
            <div
                className="resume-paper"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={resumeTitle}
            >
                <div className="resume-toolbar">
                    <a
                        className="resume-download"
                        href={cvUrl}
                        download="CV-Luis-Agusto-Guerrero-Montenegro.pdf"
                        title={t('resume.download')}
                    >
                        <Download size={19} aria-hidden="true" />
                        <span>{t('resume.download')}</span>
                    </a>
                </div>

                <iframe
                    src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                    title={resumeTitle}
                />
            </div>
        </div>
    )
}

export default ResumeModal