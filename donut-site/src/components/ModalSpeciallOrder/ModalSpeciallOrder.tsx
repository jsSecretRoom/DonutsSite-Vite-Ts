import './ModalSpeciallOrder.scss';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import Modal from 'react-modal';

import { setTogleSpeciallModalBox, setGloballCount, setGloballTotallPrice} from '../../redux/Actions';

const modalRoot = document.getElementById('speciallOrderBox');
Modal.setAppElement(modalRoot);

function ModalSpeciallOrder() {

    const dispatch = useDispatch();

    const toggleModal = useSelector((state) => state.togllebutton.togleSpeciallModalBox);
    let speciallCollection = useSelector((state) => state.getcollection.speciallCollectionBox);

    console.log(speciallCollection)

    const closeModal = () => {
        dispatch(setTogleSpeciallModalBox(!toggleModal));
        dispatch(setGloballTotallPrice(0));
        dispatch(setGloballCount(0));
    }

    return ( 
        <Modal
            isOpen={toggleModal}
            contentLabel="Модальное окно"
            portalClassName="orderModal" // стилизации портала
            overlayClassName="orderOverlay" // стилизации оверлея
            className="order-modal-content" // стилизации модального окна
            appElement={modalRoot} // Установите элемент в DOM для портала
        >
            <div className='order-modal-body'>
                <section className='success-order'>
                    <p>You order products sucessful!</p>
                    <p>We tell you leterr and accept the order!</p>
                    <NavLink to='/shop/Sweets'>
                        <button onClick={closeModal}>Home</button>
                    </NavLink>
                </section>

            </div>
        </Modal>
    );
}

export default ModalSpeciallOrder;