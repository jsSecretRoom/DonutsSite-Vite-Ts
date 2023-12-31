import './AddToBasketButton.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAddToBasket } from '../../redux/Actions/CollectionActions';
import { RootState } from '../../redux/RootReducer';


import { ProductList } from '../../redux/TS-STATE';
interface Props {
    id: number;
    cardToBuy: ProductList;
}


function AddToBasketButton({ id, cardToBuy }: Props) {
    const dispatch = useDispatch();
    const busketArray = useSelector((state: RootState) => state.getcollection.pushToBasket);
    
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Обновление активности кнопки при изменении busketArray
        setIsActive(busketArray.some(item => item.id === cardToBuy.id));
    }, [busketArray, cardToBuy]);

    useEffect(() => {
        const storedState = localStorage.getItem(`buttonState_${id}`);
        if (storedState !== null) {
            setIsActive(storedState === 'true');
        }
    }, [id]);

    useEffect(() => {
        const storedBasket = localStorage.getItem('basketArray');
        if (storedBasket !== null) {
            dispatch(setAddToBasket(JSON.parse(storedBasket)));
        }
    }, [dispatch]);

    const handleAddToBasket = () => {
        const newActiveState = !isActive;

        localStorage.setItem(`buttonState_${id}`, newActiveState.toString());

        setIsActive(newActiveState);

        let updatedData: ProductList[] = []; 

        if (newActiveState) {
            updatedData = [...busketArray, cardToBuy];
        } else {
            updatedData = busketArray.filter(item => item.id !== cardToBuy.id);
        }
        
        localStorage.setItem('basketArray', JSON.stringify(updatedData));
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