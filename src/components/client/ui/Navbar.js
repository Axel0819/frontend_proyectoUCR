import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { Container } from '../layouts/Container'
import { LogoCecamm } from './LogoCecamm'
import { useState } from 'react'

export default function Navbar({ openModalContact, openModalTranslate, openModalSearch, menuIsOpen, setMenuIsOpen }) {
    
    const { t, i18n } = useTranslation(['navbar'])

    const handleClick = () => {
        i18n.changeLanguage('en')
    }

    return (
        <nav className="navbar flex flex-column justify-content-center">
            <Container>
                <div className="flex align-items-center justify-content-between">

                   <LogoCecamm />

                    <div className={
                        classNames('flex', 'justify-content-between', 'flex-wrap', 'gap-40', 'navbar__list', {
                            'menuIsActive': menuIsOpen
                        })
                    }>
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
                            {/* Precios */}
                            { t('proof') }
                        </NavLink>

                    </div>

                    <div className={
                        classNames('flex', 'align-content-center', 'gap-40', 'navbar__icons', {
                            'menuIsActive': menuIsOpen
                        })
                    }>
                        <i
                            onClick={openModalSearch}
                            className="fa-solid fa-magnifying-glass"
                        ></i>

                        <i
                            onClick={openModalContact}
                            className="fa-solid fa-envelope"
                        ></i>
                        
                        <i
                            onClick={openModalTranslate}
                            className="fa-solid fa-globe"
                        ></i>
                    </div>

                    <div className="flex align-content-center justify-content-center navbar__icon__bars">
                        <i className={classNames('fa-solid', {
                            'fa-xmark': menuIsOpen,
                            'fa-bars': !menuIsOpen,
                        })} onClick={() => setMenuIsOpen(!menuIsOpen)}></i>
                    </div>

                </div>
                {/* <h1>{ t('title') }</h1>
                </div>
                <button onClick={handleClick}>cambia</button>     */}
            </Container>
        </nav>
    )
}