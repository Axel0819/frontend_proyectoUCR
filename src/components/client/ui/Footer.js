import { SocialMedia } from "../home/SocialMedia";
import { Container } from "../layouts/Container";
import LinksNavbar from "./LinksNavbar";
import { LogoCecamm } from "./LogoCecamm";
import { useTranslation } from "react-i18next"

//const LinksNavbar = lazy(() => import('./LinksNavbar'))

export function Footer() {

    const { t } = useTranslation('components/footer')

    return (
        <footer className="footer text-font-open-sans">
            <Container fullHeight={true}>
                <div style={{ height: '100%' }} className="flex flex-column gap-80 justify-content-between pt-6 pb-4 px-3">
                    <div className="flex flex-wrap justify-content-start gap-80">
                        <div style={{ width: '150px' }} className="flex flex-column gap-10">
                            <LogoCecamm />
                            <p className="footer__info text-center">{t('motto')}</p>
                        </div>
                        <div className="flex flex-column gap-10">
                            <p className="footer__title">{ t('explore') }</p>
                            <div className="navbar__list flex flex-column align-items-start gap-10">
                                <LinksNavbar />
                            </div>
                        </div>
                        <div style={{ width: '150px' }} className="flex flex-column gap-10">
                            <p className="footer__title">{ t('visit') }</p>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://maps.google.com/?q=9.983669450112677,-83.06263596931478"
                                className="footer__info footer-link"
                            >
                                Costa Rica, Limon. Universidad de Costa Rica, Sede del Caribe
                            </a>
                        </div>

                        <div className="flex flex-column gap-10">
                            <p className="footer__title">{ t('phones') }</p>
                            <a rel="noreferrer" className="footer__info footer-link" href="tel:+5062511-7349">+506 2511-7349</a>
                        </div>
                        <div className="flex flex-column gap-10">
                            <p className="footer__title">{ t('mails') }</p>
                            <a rel="noreferrer" target="_blank" className="footer__info footer-link" href="mailto:cecamm.sedecaribe@ucr.ac.cr">cecamm.sedecaribe@ucr.ac.cr</a>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-content-between align-items-end gap-20 footer__social">
                        <small className="text-color-white">Copyright &copy; 2022 CECAMM. { t('rights') }.</small>
                        <SocialMedia isLeft={false} />
                    </div>
                </div>
            </Container>
        </footer>
    )
}
