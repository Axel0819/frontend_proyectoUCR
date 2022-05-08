import { useState, useContext, useEffect, useLayoutEffect, useRef } from 'react'
import { Outlet, UNSAFE_NavigationContext } from 'react-router-dom'
import { modalEnum } from '../../../enum/modalEnum'
import { ContactModal } from '../modals/ContactModal'
import { ModalApp } from '../ui/ModalApp'
import { TranslateModal } from '../modals/TranslateModal'
import { SearchModal } from '../modals/SearchModal'
import { Footer } from '../ui/Footer'
import Navbar from '../ui/Navbar'

//const Navbar = lazy(() => import('../ui/Navbar'))

export default function ClientLayout() {
  const existSearch = useRef("")

  const navigation = useContext(UNSAFE_NavigationContext).navigator

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [typeModal, setTypeModal] = useState(0)

  useLayoutEffect(() => {
    if (navigation) {
      navigation.listen(({location}) => {
        if(location.search === "") {

          if(existSearch.current !== "") {
            existSearch.current = ""
          } else {
            window.scrollTo(0, 0)
          }

        } else {
          existSearch.current = location.search
        }
      })
    }
  }, [navigation])

  useEffect(() => {
    if (navigation) {
      navigation.listen(() => {
        if(menuIsOpen) return setMenuIsOpen(false)
      })
    }
  }, [navigation, menuIsOpen])

  useEffect(() => {
    document.querySelector('body').style.overflowY = menuIsOpen ? 'hidden' : 'scroll'
  }, [menuIsOpen])

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
        <Navbar
          openModalContact={openModalContact}
          openModalTranslate={openModalTranslate}
          openModalSearch={openModalSearch}
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />

      <>
        <div className="main">
          <Outlet />
        </div>

        <Footer menuIsOpen={menuIsOpen} />
      </>

      <ModalApp modalIsOpen={modalIsOpen} closeModal={closeModal}>
        {typeModal === modalEnum.contact && (
          <ContactModal closeModal={closeModal} />
        )}

        {typeModal === modalEnum.translate && (
          <TranslateModal closeModal={closeModal} setMenuIsOpen={setMenuIsOpen}/>
        )}

        {typeModal === modalEnum.search && (
          <SearchModal closeModal={closeModal} />
        )}
      </ModalApp>
    </div>
  )
}