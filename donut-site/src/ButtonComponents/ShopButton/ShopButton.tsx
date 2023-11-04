
import './ShopButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import Bag from '../../assets/Bag_fill.svg';

import { setModallBag } from '../../redux/Actions/BooleanActions';
import { setSpeciallCollectionFindTotall } from '../../redux/Actions/CollectionActions';
import { RootState } from '../../redux/RootReducer';


import { useEffect, useState } from 'react';



function ShopButton() {
    const dispatch = useDispatch();
    const toggleModal: boolean = useSelector((state: RootState) => state.getboolean.togleBagModal);
    
    const busketArray: any[] = useSelector((state: RootState) => state.getcollection.pushToBasket);
    const [basketCount, strBusketCount] = useState(0);

    useEffect(() => {
        let basketLaangth = busketArray.length;
       
        strBusketCount(basketLaangth);
    },[busketArray])

    const toggleModalState = () => {
        dispatch(setModallBag(!toggleModal));
        dispatch(setSpeciallCollectionFindTotall([]));
    };

    return (
        <div className='basket-button'>
            <button className='shop-button' onClick={toggleModalState}>
                <img src={Bag} alt="Bag" />
            </button>
            <div className='basket-count'> <p>{basketCount}</p></div>
        </div>

        
    );
}

export default ShopButton;