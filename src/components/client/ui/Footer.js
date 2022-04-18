import { lazy, Suspense } from "react";
import { SocialMedia } from "../home/SocialMedia";
import { Container } from "../layouts/Container";
// import LinksNavbar from "./LinksNavbar";
// import LinksNavbar from "./LinksNavbar";
import { LogoCecamm } from "./LogoCecamm";


const LinksNavbar = lazy(() => import('./LinksNavbar'))

export function Footer() {

    return (
        <footer className="footer text-font-open-sans">
            <Container fullHeight={true}>
                <div style={{ height: '100%' }} className="flex flex-column gap-80 justify-content-between pt-6 pb-4 px-3">
                    <div className="flex flex-wrap justify-content-start gap-80">
                        <div style={{ width: '150px' }} className="flex flex-column gap-10">
                            <LogoCecamm />
                            <p className="footer__info text-center">Comprometidos con la Capacitación del Talento Humano para la Marina Mercante</p>
                        </div>
                        <div className="flex flex-column gap-10">
                            <p className="footer__title">Explorar</p>
                            <Suspense fallback={<p>Cargando</p>}>
                                <div className="navbar__list flex flex-column align-items-start gap-10">
                                    <LinksNavbar />
                                </div>
                            </Suspense>
                        </div>
                        <div style={{ width: '150px' }} className="flex flex-column gap-10">
                            <p className="footer__title">Visita</p>
                            <p className="footer__info">Costa Rica, Limon. Universidad de Costa Rica, Sede del Caribe</p>
                        </div>

                        <div className="flex flex-column gap-10">
                            <p className="footer__title">Teléfonos</p>
                            <a rel="noreferrer" className="footer__info" href="tel:+5062511-7349">+506 2511-7349</a>
                        </div>
                        <div className="flex flex-column gap-10">
                            <p className="footer__title">Correo</p>
                            <a rel="noreferrer" className="footer__info" href="mailto:cecamm.sedecaribe@ucr.ac.cr">cecamm.sedecaribe@ucr.ac.cr</a>
                        </div>

                        <div className="flex flex-column gap-10">
                            <p className="footer__title">Legal</p>
                            <p className="footer__info">Términos y condiciones</p>
                            <p className="footer__info">Declaración de privacidad</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-content-between align-items-end gap-20 footer__social">
                        <small className="text-color-white">&copy; 2022 CECAMM. Aviso legal. Derechos reservados.</small>
                        <SocialMedia isLeft={false} />
                    </div>
                </div>
            </Container>
        </footer>
    )
}
