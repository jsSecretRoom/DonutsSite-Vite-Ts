import './ModalBag.scss';

import { useSelector } from 'react-redux';

import CardLine from './CardLine/CardLine';
import FavoriteLine from './FavoriteLine/FavoriteLine';
import SpeciallOrderComponent from './SpeciallOrderComponent/SpeciallOrderComponent';

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
                <section className='favorite-guds'>
                    <FavoriteLine/>
                </section>
            </div>
        </Modal>

    );
}

export default ModalBag;