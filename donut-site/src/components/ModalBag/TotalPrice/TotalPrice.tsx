import './TotalPrice.scss';
import { NavLink } from 'react-router-dom';
import CreateOrderButton from '../../../ButtonComponents/CreateOrderButton/CreateOrderButton';
import { useState, useEffect } from 'react';

function TotalPrice({ busketArray, cartItems }) {
    let [totalres, settotalres] = useState(0);

    let productCount = [];

    if (busketArray && cartItems) {
        busketArray.forEach((item) => {
            const cartItem = cartItems.find((cartItem) => cartItem.item.id === item.id);
            if (cartItem && cartItem.count) {
                productCount.push(cartItem.count);
            }
        });
    }

    useEffect(() => {
        let res = 0;
        busketArray.forEach((item) => {
            const cartItem = cartItems.find((cartItem) => cartItem.item.id === item.id);

            if (cartItem && cartItem.count) {
                if (item.diskountIndicator) {
                    res += cartItem.count * item.diskountPrice;
                } else {
                    res += cartItem.count * item.realPrice;
                }
            }
        });

        settotalres(res);
    }, [busketArray, cartItems]);

    return (
        <div className='bady-sum'>
            <h3 className='total'>{totalres}</h3>

            <NavLink to='/checkout'>
                <CreateOrderButton totalReal={totalres} busketArray={busketArray} productCount={productCount} />
            </NavLink>
        </div>
    );
}

export default TotalPrice;

