import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Languages, Menu, Moon, Sun, X } from 'lucide-react'

function Navbar() {
    const { t, i18n } = useTranslation()

    const [menuOpen, setMenuOpen] = useState(false)

    const [activeLink, setActiveLink] = useState(
        () => window.location.hash.replace('#', '') || 'home',
    )

    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light',
    )

    const currentLanguage = i18n.resolvedLanguage?.startsWith('en')
        ? 'en'
        : 'es'

    const isSpanish = currentLanguage === 'es'

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        document.documentElement.lang = currentLanguage
    }, [currentLanguage])

    useEffect(() => {
        const updateActiveLink = () => {
            const currentSection =
                window.location.hash.replace('#', '') || 'home'

            setActiveLink(currentSection)
        }

        window.addEventListener('hashchange', updateActiveLink)

        return () => {
            window.removeEventListener('hashchange', updateActiveLink)
        }
    }, [])

    const changeLanguage = () => {
        const newLanguage = currentLanguage === 'es' ? 'en' : 'es'

        i18n.changeLanguage(newLanguage)
        localStorage.setItem('language', newLanguage)
    }

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light',
        )
    }

    const handleLinkClick = (id) => {
        setActiveLink(id)
        setMenuOpen(false)
    }

    const links = [
        ['home', 'home'],
        ['about', 'about'],
        ['experience', 'experience'],
        ['skills', 'skills'],
        ['projects', 'projects'],
        ['contact', 'contact'],
    ]

    const languageLabel = isSpanish
        ? 'Cambiar idioma a inglés'
        : 'Switch language to Spanish'

    const themeLabel =
        theme === 'light'
            ? isSpanish
                ? 'Activar modo oscuro'
                : 'Enable dark mode'
            : isSpanish
                ? 'Activar modo claro'
                : 'Enable light mode'

    const menuLabel = menuOpen
        ? isSpanish
            ? 'Cerrar menú'
            : 'Close menu'
        : isSpanish
            ? 'Abrir menú'
            : 'Open menu'

    return (
        <header className="navbar">
            <nav
                className="navbar-container"
                aria-label={isSpanish ? 'Navegación principal' : 'Main navigation'}
            >
                <div
                    id="primary-navigation"
                    className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
                >
                    {links.map(([key, id]) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={activeLink === id ? 'active' : ''}
                            aria-current={activeLink === id ? 'page' : undefined}
                            onClick={() => handleLinkClick(id)}
                        >
                            {t(`nav.${key}`)}
                        </a>
                    ))}
                </div>

                <div className="nav-actions">
                    <button
                        type="button"
                        className="icon-button"
                        onClick={changeLanguage}
                        aria-label={languageLabel}
                        title={languageLabel}
                    >
                        <Languages size={19} aria-hidden="true" />
                        <span>{currentLanguage === 'es' ? 'EN' : 'ES'}</span>
                    </button>

                    <button
                        type="button"
                        className="icon-button"
                        onClick={toggleTheme}
                        aria-label={themeLabel}
                        title={themeLabel}
                    >
                        {theme === 'light' ? (
                            <Moon size={19} aria-hidden="true" />
                        ) : (
                            <Sun size={19} aria-hidden="true" />
                        )}
                    </button>

                    <button
                        type="button"
                        className="menu-button"
                        onClick={() => setMenuOpen((currentState) => !currentState)}
                        aria-label={menuLabel}
                        title={menuLabel}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                    >
                        {menuOpen ? (
                            <X aria-hidden="true" />
                        ) : (
                            <Menu aria-hidden="true" />
                        )}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar