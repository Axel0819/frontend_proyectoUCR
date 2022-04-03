import { Suspense, lazy, useState, useContext, useEffect } from 'react'
import { Outlet, UNSAFE_NavigationContext } from 'react-router-dom'
import { modalEnum } from '../../../enum/modalEnum'
import { ContactModal } from '../modals/ContactModal'
import { ModalApp } from '../ui/ModalApp'
import { TranslateModal } from '../modals/TranslateModal'
import { SearchModal } from '../modals/SearchModal'
import { Footer } from '../ui/Footer'

const Navbar = lazy(() => import('../ui/Navbar'))

export default function ClientLayout() {
  const navigation = useContext(UNSAFE_NavigationContext).navigator

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [typeModal, setTypeModal] = useState(0)

  useEffect(() => {
    if(navigation){
      navigation.listen(() => {
        setMenuIsOpen(false)
      })
    }
  }, [navigation])

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModalContact = () => {
    setModalIsOpen(true)
    setTypeModal(modalEnum.contact)
  }

  const openModalTranslate = () => {
    setModalIsOpen(true)
    setTypeModal(modalEnum.translate)
  }

  const openModalSearch = () => {
    setModalIsOpen(true)
    setTypeModal(modalEnum.search)
  }

  return (
    <div className="grid__container">
      <Suspense fallback={<span>Cargando textos...</span>}>
        <Navbar
          openModalContact={openModalContact}
          openModalTranslate={openModalTranslate}
          openModalSearch={openModalSearch}
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />
      </Suspense>

      {!menuIsOpen && (
        <>
          <div className="main">
            <Outlet />
          </div>

          <Footer menuIsOpen={menuIsOpen} />
        </>
      )}

      <ModalApp modalIsOpen={modalIsOpen} closeModal={closeModal}>
        {typeModal === modalEnum.contact && (
          <ContactModal closeModal={closeModal} />
        )}

        {typeModal === modalEnum.translate && (
          <TranslateModal />
        )}

        {typeModal === modalEnum.search && (
          <SearchModal closeModal={closeModal} />
        )}
      </ModalApp>
    </div>
  )
}