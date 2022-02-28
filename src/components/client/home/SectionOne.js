import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'

import logoBlack from '../../../assets/images/logoBlack.png'//'../../assets/images/logoBlack.png';
import { TitleSection } from './TitleSection';

const imgSvg = require.context('../../../assets/svg/')

export const SectionOne = () => {
    return (
        <Container>
            <ContainerResponsive>
                <div className="xl:col-5 lg:col-5 md:col-12 sm:col-12 flex flex-column justify-content-center gap-50">
                    <TitleSection title={'Centro de Capacitación de Marina Mercante'} />
                    <div className="flex gap-50 container__country">
                        {
                            ['./PaisU.svg', './PaisC.svg', './PaisR.svg'].map((pais, i) => (
                                <img 
                                    key={pais + i} 
                                    src={imgSvg(pais)} 
                                    alt="Imagen de país" 
                                />
                            ))
                        }
                    </div>

                    <p className="text-font-open-sans spacing">
                        Como parte de una iniciativa para cubrir las necesidades de capacitación en el ambito de la marina mercante se crea el CECAMM, como un centro de formación que se proyecta para ocupar oportunamente el rol de formación.
                    </p>
                </div>
                <div className="xl:col-7 lg:col-7 md:col-12 sm:col-12 flex justify-content-center align-items-center container__logo">
                    <div>
                        <img src={logoBlack} alt="Logo CECAMM" />
                    </div>
                </div>
            </ContainerResponsive>
      </Container>
    )
}