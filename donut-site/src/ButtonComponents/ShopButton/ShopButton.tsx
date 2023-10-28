
import './ShopButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import Bag from '../../assets/Bag_fill.svg';
import { setModallBag } from '../../redux/Actions';


function ShopButton() {
    const dispatch = useDispatch();
    const toggleModal = useSelector((state) => state.togllebutton.togleBagModal);

    const toggleModalState = () => {
        dispatch(setModallBag(!toggleModal));

    };

    return ( 
        <button className='shop-button' onClick={toggleModalState}>
            <img src={Bag} alt="Bag" />
        </button>
    );
}

export default ShopButton;