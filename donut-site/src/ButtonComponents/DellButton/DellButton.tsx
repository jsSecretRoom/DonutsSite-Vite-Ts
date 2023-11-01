import './DellButton.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/RootReducer';

import ButtonImg from '../../assets/ico/microFeachButton.svg';
import { setAddToBasket } from '../../redux/Actions/CollectionActions';

function DellButton({ id }: { id: number }) {
    const dispatch = useDispatch();
    const busketArray = useSelector((state: RootState) => state.getcollection.pushToBasket);

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