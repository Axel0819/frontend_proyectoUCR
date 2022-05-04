import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export default function LinksNavbar() {
    // const { t } = useTranslation(['navbar'])
    
    return (
        <>
            <NavLink
                className={({ isActive }) => classNames({ 'navbar__item__active': isActive })}
                to="/"
            >
                Inicio
            </NavLink>

            <NavLink
                className={({ isActive }) => classNames({ 'navbar__item__active': isActive })}
                to="aboutus"
            >
                ¿Quiénes Somos?
            </NavLink>
            <NavLink
                className={({ isActive }) => classNames({ 'navbar__item__active': isActive })}
                to="courses"
            >
                Cursos
            </NavLink>
            <NavLink
                className={({ isActive }) => classNames({ 'navbar__item__active': isActive })}
                to="prices"
            >
                Precios
                {/* {t('proof')} */}
            </NavLink>
        </>
    )
}
