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

export default function ContactModal({modalIsOpen, closeModal, children}) {
  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={200}
        contentLabel="Example Modal" 
        className="modal"
        overlayClassName="modal-fondo" 
      >
        <button onClick={closeModal}>close</button>
        {children}
      </Modal>
  )
}
