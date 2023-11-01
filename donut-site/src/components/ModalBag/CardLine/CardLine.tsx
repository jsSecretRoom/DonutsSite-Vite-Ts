import './CardLine.scss';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import SpeciallOrderComponent from '../SpeciallOrderComponent/SpeciallOrderComponent';
import CounterComponent from '../CounterComponent/CounterComponent';
import PriceComponent from '../PriceComponent/PriceComponent';
import DellButton from '../../../ButtonComponents/DellButton/DellButton';
import TotalPrice from '../TotalPrice/TotalPrice';

import { RootState } from '../../../redux/RootReducer';

interface CartItem {
    item: {
        id: number;
        foto: string;
        name: string;
        diskountIndicator: boolean;
        realPrice: number;
        diskountPrice: number;
    };
    count: number;
}

function CardLine() {
    const busketArray = useSelector((state: RootState) => state.getcollection.pushToBasket);

    // Используйте useEffect для обновления cartItems при изменении busketArray
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        // Проверьте, что busketArray существует и не является пустым массивом
        if (busketArray && busketArray.length > 0) {
            const items: CartItem[] = busketArray.map((item: any) => ({
                item: item,
                count: 1,
            }));
            setCartItems(items);
        } else {
            setCartItems([]);
        }
    }, [busketArray]);

    const updateCount = (itemId: number, newCount: number) => {
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
                busketArray.map((item: any, id: number) => (
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
                                updateCount={(newCount: number) => updateCount(item.id, newCount)}
                            />
                            <PriceComponent
                                diskountIndicator={item.diskountIndicator}
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
            <section className='speciall-order'>
                <h2>Special order:</h2>
                <SpeciallOrderComponent />
            </section>
            <div className='logic-calculator'>
                <TotalPrice busketArray={busketArray} cartItems={cartItems} />
            </div>
        </div>
    );
}

export default CardLine;