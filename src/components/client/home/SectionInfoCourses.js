import { CardCourse } from "../cards/CardCourse";
import { Container } from "../layouts/Container";
import { ContainerResponsive } from "../layouts/ContainerResponsive";
import { Carousel } from "../ui/Carousel";
import { ItemCarousel } from "../ui/ItemCarousel";
import { TitleSection } from "./TitleSection";

export function SectionInfoCourses() {
    return (
        <Container>
            <ContainerResponsive heightAuto={true}>
                <div className="col-12 flex flex-column gap-50">
                    <TitleSection 
                        title={'Nuestra oferta académica'}
                    />
                    <div className="px-3">
                        <Carousel options={{
                            loop: true,
                            containScroll: "keepSnaps",
                            align: 'start'
                        }} play={true}> 
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                                    <ItemCarousel key={item} fullHeight={false}>
                                        <CardCourse />
                                    </ItemCarousel>
                                ))
                            }

                            {/* <ItemCarousel fullHeight={false}>
                                <CardCourse />
                            </ItemCarousel> */}
                        </Carousel>
                    </div>
                </div>
            </ContainerResponsive>
        </Container>
    )
}
