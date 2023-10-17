import './DellButton.scss';
import { useSelector, useDispatch } from 'react-redux';
import ButtonImg from '../../assets/ico/microFeachButton.svg';
import { setAddToBasket } from '../../redux/Actions';

function DellButton({ id }) {
    const dispatch = useDispatch();
    const busketArray = useSelector((state) => state.togllebutton.pushToBasket);

    const dellProduct = () => {
        // Filter the product to be removed
        const filterProduct = busketArray.filter(item => item.id !== id);

        // Update Redux store
        dispatch(setAddToBasket(filterProduct));

        // Update local storage
        localStorage.setItem('basketArray', JSON.stringify(filterProduct));
    }

    return (
        <div className='dell-feach'>
            <button onClick={dellProduct}>
                <img src={ButtonImg} alt="ButtonImg" />
            </button>
        </div>
    );
}

export default DellButton;