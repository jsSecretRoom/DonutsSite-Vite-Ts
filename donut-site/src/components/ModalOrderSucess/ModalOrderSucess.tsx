import './ModalOrderSucess.scss';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import Modal from 'react-modal';

import { setModallOrderSucces, setModallBag } from '../../redux/Actions';
const modalRoot = document.getElementById('orderSucess');
Modal.setAppElement(modalRoot);


function ModalOrderSucess() {
    const dispatch = useDispatch();

    const toggleModal = useSelector((state) => state.togllebutton.toglSuccesOrder);
   
    const closeModal = () => {
        dispatch(setModallOrderSucces(!toggleModal));
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

export default ModalOrderSucess;