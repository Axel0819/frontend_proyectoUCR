import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { appImages } from '../../../helpers/appImages'
import { Container } from '../layouts/Container'

export default function Navbar({ openModalContact, openModalTranslate, openModalSearch }) {
    const { t, i18n } = useTranslation(['navbar'])

    const handleClick = () => {
        i18n.changeLanguage('en')
    }

    return (
        <nav className="navbar flex flex-column justify-content-center">
            <Container>
                <div className="flex align-items-center justify-content-between flex-wrap">

                    <div className="navbar__logo">
                        <Link to="/">
                            <img width="100%" src={appImages('./logo.png')} alt="Logo CECAMM" />
                        </Link>
                    </div>

                    <div className="flex justify-content-between flex-wrap gap-40 navbar__list">
                        <Link to="/">Inicio</Link>
                        {/* <Link>Quienes Somos?</Link> */}

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
                        </NavLink>

                    </div>

                    <div className="flex align-content-center gap-40 navbar__icons">
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
                </div>
                {/* <h1>{ t('title') }</h1>
                </div>
                <button onClick={handleClick}>cambia</button>     */}
            </Container>
        </nav>
    )
}