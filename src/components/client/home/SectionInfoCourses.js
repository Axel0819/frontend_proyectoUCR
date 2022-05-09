import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CardCourse } from "../cards/CardCourse";
import { Container } from "../layouts/Container";
import { ContainerResponsive } from "../layouts/ContainerResponsive";
import { Carousel } from "../ui/Carousel";
import { ItemCarousel } from "../ui/ItemCarousel";
import { TitleSection } from "./TitleSection";

export function SectionInfoCourses() {
    const { t } = useTranslation('home/sectionInfoCourses')

    const CarouselMemo = useMemo(() => <Carousel options={{
        loop: true,
        containScroll: "keepSnaps",
        align: 'start'
    }} play={true} stopOnMouseEnter={true}>
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                <ItemCarousel key={item} fullHeight={false}>
                    <CardCourse />
                </ItemCarousel>
            ))
        }
    </Carousel>, [])

    return (
        <div className="sectionInfoCourses">
            <Container>
                <ContainerResponsive heightAuto={true}>
                    <div className="col-12 flex flex-column gap-50">
                        <TitleSection
                            title={t('title')}
                        />
                        <div className="px-3">
                            { CarouselMemo }
                        </div>
                    </div>
                </ContainerResponsive>
            </Container>
        </div>
    )
}


export default SectionInfoCourses