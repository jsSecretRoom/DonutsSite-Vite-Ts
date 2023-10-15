import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './AddToBasketButton.scss';

import { setAddToBasket } from '../../redux/Actions';

function AddToBasketButton({ id, cardToBuy }) {
    
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const busketArray = useSelector((state) => state.togllebutton.pushToBasket);
    
    const handleAddToBasket = () => {
        setIsActive(!isActive);
    
        let updatedData = [];
    
        if (isActive) {
            updatedData = busketArray.filter(item => item.id !== cardToBuy.id);
        } else {
            updatedData = [...busketArray, cardToBuy];
        }
    
        dispatch(setAddToBasket(updatedData));
    }

    return (
        <div className='add-to-basket'>
            <button
                className={`basketButton ${isActive ? 'active' : ''}`}
                onClick={handleAddToBasket}
                key={id}
            >
                {isActive ? '- Remove' : '+ To basket'}
            </button>
        </div>
    );
}

export default AddToBasketButton;