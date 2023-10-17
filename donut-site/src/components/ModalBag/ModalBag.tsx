import './ModalBag.scss';

import { useSelector } from 'react-redux';
import CardLine from './CardLine/CardLine';
import Modal from 'react-modal';
const modalRoot = document.getElementById('portall');
Modal.setAppElement(modalRoot);

function ModalBag() {

    const toggleModal = useSelector((state) => state.togllebutton.togleBagModal);

    return (

        <Modal
            isOpen={toggleModal}
            contentLabel="Модальное окно"
            portalClassName="modal" // стилизации портала
            overlayClassName="overlay" // стилизации оверлея
            className="modal-content" // стилизации модального окна
            appElement={modalRoot} // Установите элемент в DOM для портала
        >
            <div className='modal-body'>
                <section className='want-bay'>
                    <CardLine />
                </section>
                <section className='bay-logick'>
                    <div className='bady-sum'>
                        <h3>444</h3>
                        <button>Bay</button>
                    </div>
                </section>
                <section className='favorite-guds'>

                </section>
            </div>
        </Modal>

    );
}

export default ModalBag;