import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

export function ModalApp({ modalIsOpen, closeModal, children }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
    >
      <div className="container__modal">
        <button className="btn btn-close-modal" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className='p-2'>
         {children}
        </div>
      </div>
    </Modal>
  )
}
