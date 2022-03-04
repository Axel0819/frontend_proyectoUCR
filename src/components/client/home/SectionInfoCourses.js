import { Container } from "../layouts/Container";
import { ContainerResponsive } from "../layouts/ContainerResponsive";
import { Carousel } from "../ui/Carousel";
import { ItemCarousel } from "../ui/ItemCarousel";
import { TitleSection } from "./TitleSection";

export function SectionInfoCourses() {
    return (
        <Container>
            <ContainerResponsive>
                <div className="col-12 flex flex-column gap-50">
                    <TitleSection 
                        title={'Nuestra oferta académica'}
                    />
                    <div className="px-3">
                        <Carousel play={false}> 
                            {
                                [1, 2, 3].map(item => (
                                    <ItemCarousel key={item} fullHeight={false}>
                                        <div style={{
                                            width: '300px',
                                            height: '300px',
                                            backgroundColor: "gray"
                                        }} className="flex justify-content-center align-items-center ">
                                            {item}
                                        </div>
                                    </ItemCarousel>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </ContainerResponsive>
        </Container>
    )
}
