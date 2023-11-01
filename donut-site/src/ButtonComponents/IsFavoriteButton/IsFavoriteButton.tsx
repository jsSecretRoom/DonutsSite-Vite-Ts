import './IsFavoriteButton.scss';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/RootReducer';
import { ProductList } from '../../redux/TS-STATE';

import { setPushToFavirite } from '../../redux/Actions/CollectionActions';

import Star from '../../assets/Star_light.svg';
import dotedStarr from '../../assets/Star_duotone.svg';

function IsFavoriteButton({ id, cardToBuy }: { id: number; cardToBuy: ProductList }) {
    const dispatch = useDispatch();

    const favoriteList: ProductList[] = useSelector((state: RootState) => state.getcollection.pushToFavirite);
    
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(favoriteList.some(item => item.id === cardToBuy.id));
    }, [favoriteList, cardToBuy]);

    useEffect(() => {
        const storedState = localStorage.getItem(`favoriteState_${id}`);
        if (storedState !== null) {
            setIsActive(storedState === 'true');
        }
    }, [id]);

    useEffect(() => {
        const storedBasket = localStorage.getItem('favoriteArray');
        if (storedBasket !== null) {
            dispatch(setPushToFavirite(JSON.parse(storedBasket)));
        }
    }, [dispatch]);

    const addToFavorite = () => {
        const newActiveState = !isActive;

        localStorage.setItem(`favoriteState_${id}`, newActiveState.toString());

        setIsActive(newActiveState);

        let updatedData: ProductList[] = [];

        if (newActiveState) {
            updatedData = [...favoriteList, cardToBuy];
        } else {
            updatedData = favoriteList.filter(item => item.id !== cardToBuy.id);
        }

        localStorage.setItem('favoriteArray', JSON.stringify(updatedData));
        dispatch(setPushToFavirite(updatedData));
    }

    return (
        <button className={`favorite ${isActive ? 'active' : ''}`} onClick={addToFavorite}>
            <img src={isActive ? dotedStarr : Star} alt="Star" />
        </button>
    );
}

export default IsFavoriteButton;