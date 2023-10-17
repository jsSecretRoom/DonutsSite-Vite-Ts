import './CardLine.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CounterComponent from '../CounterComponent/CounterComponent';
import PriceComponent from '../PriceComponent/PriceComponent';

import DellButton from '../../../ButtonComponents/DellButton/DellButton';


function CardLine() {
    const busketArray = useSelector((state) => state.togllebutton.pushToBasket);
  
    const [cartItems, setCartItems] = useState(
        busketArray.map((item) => ({
            item: item,
            count: 1,
        }))
    );
  
    const updateCount = (itemId, newCount) => {
        const updatedCartItems = cartItems.map((cartItem) =>
            cartItem.item.id === itemId ? { ...cartItem, count: newCount } : cartItem
        );
        setCartItems(updatedCartItems);
    };


    return (
        <>
            {busketArray.length > 0 ? (
                busketArray.map((item, id) => (
                    <div key={id} className='bay-line-info'>
                        <div className='product-main-continer'>
                            <div className='guds-img'>
                                <img src={item.foto} alt="" />
                            </div>
                            <div className='guds-info'>
                                <p>{item.name}</p>
                            </div>
                            
                            <DellButton id={item.id}/>
                        </div>
                        <div className='feaces-product'>
                            <div className='special-services'>
                                <p>Ficha...</p>
                            </div>
                            <CounterComponent
                                count={cartItems[id].count}
                                updateCount={(newCount) => updateCount(item.id, newCount)}
                            />
                            <PriceComponent
                                realPrice={item.realPrice}
                                discountPrice={item.diskountPrice}
                                count={cartItems[id].count}
                            />
                        </div>

                    </div>
                ))
            ) : (
                <p>Корзина пуста</p>
            )}

        </>
    );
}

export default CardLine;