import './ModalBag.scss';

import { useSelector, useDispatch } from 'react-redux';

import CardLine from './CardLine/CardLine';
import FavoriteLine from './FavoriteLine/FavoriteLine';
import { setModallBag, setGloballSpecialPrice } from '../../redux/Actions';
import Modal from 'react-modal';
const modalRoot = document.getElementById('portall');
Modal.setAppElement(modalRoot);

function ModalBag() {
    const dispatch = useDispatch();
    const toggleModal = useSelector((state) => state.togllebutton.togleBagModal);

    const closeModal = () => {
        dispatch(setModallBag(!toggleModal));
        dispatch(setGloballSpecialPrice(0));
    }

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
                <section className='closeModal'>
                    <button onClick={closeModal}>close</button>
                </section>
            </div>
        </Modal>

    );
}

export default ModalBag;