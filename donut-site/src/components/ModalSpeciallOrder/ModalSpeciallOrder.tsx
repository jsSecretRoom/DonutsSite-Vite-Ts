import './ModalSpeciallOrder.scss';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { setTogleSpeciallModalBox } from '../../redux/Actions/BooleanActions';
import { setGloballCount, setGloballTotallPrice } from '../../redux/Actions/NumberActions';
import { setSpeciallCollection } from '../../redux/Actions/CollectionActions';

const modalRoot = document.getElementById('speciallOrderBox');
Modal.setAppElement(modalRoot);

function ModalSpeciallOrder() {
    const dispatch = useDispatch();

    const toggleModal = useSelector((state) => state.getboolean.togleSpeciallModalBox);
    let speciallCollection = useSelector((state) => state.getcollection.speciallCollectionBox);
    let globallTotallPrice = useSelector((state) => state.getnumber.globalBoxTotalPrice);

    

    const closeModal = () => {
        dispatch(setTogleSpeciallModalBox(!toggleModal));

        const savedData = localStorage.getItem('speciallCollectionOrer');
        let specialProducts = [];

        if (savedData) {
            specialProducts = JSON.parse(savedData);
        }

        // Проверяем, что speciallCollection не пуст и существует
        if (speciallCollection && speciallCollection.length > 0) {
            // Добавляем speciallCollection в общий массив
            specialProducts.push(speciallCollection);
            // Сохраняем обновленный массив в localStorage
            localStorage.setItem('speciallCollectionOrer', JSON.stringify(specialProducts));
        }


        dispatch(setGloballTotallPrice(0));
        dispatch(setGloballCount(0));
        dispatch(setSpeciallCollection([]));
    }
    const goback = () => {
        dispatch(setTogleSpeciallModalBox(!toggleModal));
    }

    return (
        <Modal
            isOpen={toggleModal}
            contentLabel="Модальное окно"
            portalClassName="special-modal" // Стилизация портала
            overlayClassName="overlay" // Стилизация оверлея
            className="modal-content" // Стилизация модального окна
            appElement={modalRoot} // Установите элемент в DOM для портала
        >
            <div className='.modal-content'>
                <div className='special-modal-body'>
                    <h2>You order:</h2>
                    <section className='speciallBag'>
                        {speciallCollection.map((item) => (
                            <div key={item.specialid} className='item'>
                                <div className='foto'>
                                    <img src={item.basketitem.oneimg} alt="img" />
                                </div>
                                <div className='info'>
                                    <p>{item.basketitem.info}</p>
                                </div>
                                <div className='count'>
                                    <p> Count: {item.specialcount}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                    <section className='total'>
                        <h3>You pay: {globallTotallPrice}</h3>
                    </section>
                    <section className='success-order'>
                        <NavLink to='/shop/Sweets'>
                            <button onClick={closeModal}>Add to basket</button>
                        </NavLink>
                    </section>
                    <section className='back'>
                        <button onClick={goback}>Back</button>
                    </section>
                </div>
            </div>
        </Modal>
    );
}

export default ModalSpeciallOrder;