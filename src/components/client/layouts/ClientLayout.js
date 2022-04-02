import { Suspense, lazy, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { modalEnum } from '../../../enum/modalEnum'
import { ContactModal } from '../modals/ContactModal'
import { ModalApp } from '../ui/ModalApp'
import { TranslateModal } from '../modals/TranslateModal'
import { SearchModal } from '../modals/SearchModal'

const Navbar = lazy(() => import('../ui/Navbar'))

export default function ClientLayout() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [typeModal, setTypeModal] = useState(0)

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
        />
      </Suspense>

      <div className="main">
        <Outlet />
      </div>

      <footer className="footer">
        <h1>Footer</h1>
      </footer>

      <ModalApp modalIsOpen={modalIsOpen} closeModal={closeModal}>
        {typeModal === modalEnum.contact && (
          <ContactModal closeModal={closeModal}/>
        )}

        {typeModal === modalEnum.translate && (
          <TranslateModal />
        )}

        {typeModal === modalEnum.search && (
          <SearchModal closeModal={closeModal}/>
        )}
      </ModalApp>
    </div>
  )
}