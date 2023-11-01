
import './ShopButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import Bag from '../../assets/Bag_fill.svg';

import { setModallBag } from '../../redux/Actions/BooleanActions';
import { setSpeciallCollectionFindTotall } from '../../redux/Actions/CollectionActions';
import { RootState } from '../../redux/RootReducer';

function ShopButton() {
    const dispatch = useDispatch();
    const toggleModal: boolean = useSelector((state: RootState) => state.getboolean.togleBagModal);

    const toggleModalState = () => {
        dispatch(setModallBag(!toggleModal));
        dispatch(setSpeciallCollectionFindTotall([]));
    };

    return (
        <button className='shop-button' onClick={toggleModalState}>
            <img src={Bag} alt="Bag" />
        </button>
    );
}

export default ShopButton;