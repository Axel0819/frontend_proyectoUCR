import { useCallback } from "react"
import { useTranslation } from "react-i18next"

export const useTestimonials = () => {
    const { t } = useTranslation('home/sectionInfoTestimonials')
    const testimonials = useCallback(
        () => [
            {
                name: "Elizabeth Ivannia Arronis Jiménez",
                img: "./photo1.png",
                description: t('comment1')
            },
            {
                name: "Hillary Sofía Arroyo Leitón",
                img: "./photo2.png",
                description: t('comment2')
            },
            {
                name: "Rubén Daniel Marín López",
                img: "./photo3.png",
                description: t('comment3')
            }
        ], [t]
    )

    return {
        testimonials: testimonials(),
        title: t('title'),
        cadet: t('cadet')
    }
}