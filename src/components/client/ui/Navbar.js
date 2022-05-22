import classNames from 'classnames'
import { Container } from '../layouts/Container'
import { LogoCecamm } from './LogoCecamm'
import LinksNavbar from './LinksNavbar'

//const LinksNavbar = lazy(() => import('./LinksNavbar'))

export default function Navbar({ openModalContact, openModalTranslate, openModalSearch, menuIsOpen, setMenuIsOpen }) {

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
                        <LinksNavbar />
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
            </Container>
        </nav>
    )
}