import './FavoriteLine.scss';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import AddToBasketButton from '../../../ButtonComponents/AddToBasketButton/AddToBasketButton';
import IsFavoriteButton from '../../../ButtonComponents/IsFavoriteButton/IsFavoriteButton';

import { RootState } from '../../../redux/RootReducer';

function FavoriteLine() {

    const favoriteList = useSelector(( state: RootState ) => state.getcollection.pushToFavirite);

    return ( 
        <>
            <div className='hearerinfo'>
                <h2>Favorite:</h2>
            </div>
            
            <div className='favoritecards'>
                
                {favoriteList.map((item, index) => (
                    <div className='card' key={index}>
                        <div className='image'>
                            <img src={item.foto} alt="itmfoto" />
                            <AddToBasketButton id={item.id} cardToBuy={item}/>
                        </div>
                        <div className='description'>
                            <p>{item.name}</p>
                            <div className='logic'>
                                <div className='price'>
                                    {item.diskountIndicator ? (
                                        <>
                                            <p className='real-price'>{item.realPrice}</p>
                                            <p className='discount'>{item.diskountPrice}</p>
                                        </>
                                    ) : (
                                        <p className='real-price'>{item.realPrice}</p>
                                    )}
                                </div>
                                <IsFavoriteButton id={item.id} cardToBuy={item}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
        
    );
}

export default FavoriteLine;