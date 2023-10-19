import './CardLine.scss';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import CounterComponent from '../CounterComponent/CounterComponent';
import PriceComponent from '../PriceComponent/PriceComponent';
import DellButton from '../../../ButtonComponents/DellButton/DellButton';
import TotalPrice from '../TotalPrice/TotalPrice';

function CardLine() {
    const busketArray = useSelector((state) => state.togllebutton.pushToBasket);

    // Используйте useEffect для обновления cartItems при изменении busketArray
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Проверьте, что busketArray существует и не является пустым массивом
        if (busketArray && busketArray.length > 0) {
            setCartItems(
                busketArray.map((item) => ({
                    item: item,
                    count: 1,
                }))
            );
        } else {
            setCartItems([]);
        }
    }, [busketArray]);

    const updateCount = (itemId, newCount) => {
        // Проверьте, что cartItems существует и имеет элемент с заданным itemId
        if (cartItems && cartItems.length > 0) {
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.item.id === itemId ? { ...cartItem, count: newCount } : cartItem
            );
            setCartItems(updatedCartItems);
        }
    };

    return (
        <div className='conteiner-biznes'>
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
                            <DellButton id={item.id} />
                        </div>
                        <div className='feaces-product'>
                            <div className='special-services'>
                                <p>Ficha...</p>
                            </div>
                            <CounterComponent
                                count={cartItems[id] && cartItems[id].count}
                                updateCount={(newCount) => updateCount(item.id, newCount)}
                            />
                            <PriceComponent
                                
                                realPrice={item.realPrice}
                                discountPrice={item.diskountPrice}
                                count={cartItems[id] && cartItems[id].count}
                            />
                        </div>
                    </div>
                ))
                
                
                
            ) : (
                <p>Корзина пуста</p>
            )}
            <TotalPrice busketArray={busketArray} cartItems={cartItems}/>
        </div>
    );
}

export default CardLine;