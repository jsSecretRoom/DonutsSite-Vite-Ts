import './IsFavoriteButton.scss';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPushToFavirite } from '../../redux/Actions';

import Star from '../../assets/Star_light.svg';
import dotedStarr from '../../assets/Star_duotone.svg';

function IsFavoriteButton({ id, cardToBuy }) {
    const dispatch = useDispatch();

    const favoriteList = useSelector(( state ) => state.getcollection.pushToFavirite);
    
    console.log(favoriteList);
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

        let updatedData = [];

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