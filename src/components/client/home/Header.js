import { lazy, useMemo, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { imgHeader } from '../../../helpers/appImages'
import { Container } from '../layouts/Container'
// import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'
import { ImageHeader } from './ImageHeader'
import { SocialMedia } from './SocialMedia'

const Carousel = lazy(() => import('../ui/Carousel'))

export const Header = () => {
  const { t } = useTranslation('home/header')
  // const { controller } = useSetLenguage()

  const CarouselMemo = useMemo(() => <Carousel>
  {
    imgHeader.keys().map((path) => (
      <ItemCarousel key={path} fullHeight={true}>
        <ImageHeader url={imgHeader(path)} />
      </ItemCarousel>
    ))
  }
</Carousel>, [])

  return (
    <header className="home__header mb-3">
      <div className="home__header__title">
        <h6 className="text-font-abel"> {t('title')} </h6>
        <p className="text-font-open-sans">
          { t('subtitle') }
        </p>
      </div>

      <Suspense fallback={<span>Load</span>}>
        {CarouselMemo}
      </Suspense>


      <Container>
        <SocialMedia isLeft={true} />
      </Container>

    </header>
  )
}