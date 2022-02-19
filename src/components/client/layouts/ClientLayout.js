import { Suspense, lazy, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ContactModal from '../modals/ContactModal'
// import { LoaderNavbar } from './loaders/LoaderNavbar'

const Navbar = lazy(() => import('../ui/Navbar'))

export default function ClientLayout() {
  const [modalIsOpen , setModalIsOpen ] = useState(false)
  const [modalIsContact, setIsContact] = useState(true) // abre modal de contacto si es true

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModalContact = () => {
    openModal()
    setIsContact(true)
  }

  const openModalTranslate = () => {
    openModal()
    setIsContact(false)
  }

  return (
    <div className="grid__container">
      <Suspense fallback={ <span>Cargando textos...</span> }>
        <Navbar openModalContact={openModalContact} openModalTranslate={openModalTranslate} />
      </Suspense>

      <div className="main">
        <Outlet />
      </div>

      <footer className="footer">
        <h1>Footer</h1>
      </footer>

      <ContactModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        { modalIsContact ? (
          <h1>Soy el contacto</h1>
        ):(
          <h1>Soy el translate</h1>
        ) }
      </ContactModal>
    </div>
  )
}