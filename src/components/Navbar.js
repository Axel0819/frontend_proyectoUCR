import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
    const { t, i18n } = useTranslation(['navbar'])

    const handleClick = () => {
        i18n.changeLanguage('en')
    }

    return (
        <nav className="navbar">
            <h1>{ t('title') }</h1>
            <button onClick={handleClick}>cambia</button>
        </nav>
    )
}