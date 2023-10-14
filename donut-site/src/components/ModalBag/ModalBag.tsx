import './ModalBag.scss';

import { useSelector } from 'react-redux';

import Modal from 'react-modal';
const modalRoot = document.getElementById('portall');
Modal.setAppElement(modalRoot);

function ModalBag() {

    const toggleModal = useSelector((state) => state.togllebutton.togleBagModal);
    
    return ( 
        
        <Modal
            isOpen={toggleModal}
            contentLabel="Модальное окно"
            portalClassName="modal" // Назначьте класс для стилизации портала
            overlayClassName="overlay" // Назначьте класс для стилизации оверлея
            className="modal-content" // Назначьте класс для стилизации модального окна
            appElement={modalRoot} // Установите элемент в DOM для портала
        >
            <div className='modal-body'>
                <h2>Модальное окно</h2>
                <p>Содержимое модального окна</p>
            </div>
        </Modal>
        
    );
}

export default ModalBag;