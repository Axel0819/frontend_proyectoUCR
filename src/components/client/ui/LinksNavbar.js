import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export default function LinksNavbar() {
    const { t } = useTranslation('components/linksNavbar')
    
    return (
        <>
            <NavLink
                className={({ isActive }) => classNames({ 'navbar__item__active': isActive })}
                to="/"
            >
                { t('home') }
            </NavLink>

            <NavLink
                className={({ isActive }) => classNames({ 'navbar__item__active': isActive })}
                to="aboutus"
            >
                { t('about') }
            </NavLink>
            <NavLink
                className={({ isActive }) => classNames({ 'navbar__item__active': isActive })}
                to="courses"
            >
                { t('courses') }
            </NavLink>
            <NavLink
                className={({ isActive }) => classNames({ 'navbar__item__active': isActive })}
                to="prices"
            >
                { t('prices') }
            </NavLink>
        </>
    )
}
