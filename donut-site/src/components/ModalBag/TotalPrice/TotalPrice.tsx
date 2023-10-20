import './TotalPrice.scss';
import { NavLink } from 'react-router-dom';
import CreateOrderButton from '../../../ButtonComponents/CreateOrderButton/CreateOrderButton';



function TotalPrice({ busketArray, cartItems }) {


    let productCount = [];
    if (busketArray && cartItems) {
        busketArray.map((item) => {
            const cartItem = cartItems.find((cartItem) => cartItem.item.id === item.id);
            if (cartItem) {
                productCount.push(cartItem.count);
            }
            return null; 
        });
    }
    // Вычислите общую стоимость основанную на `busketArray` и `cartItems`
    const totalReal = busketArray.reduce((acc, item) => {
        const cartItem = cartItems.find((cartItem) => cartItem.item.id === item.id);
        if (cartItem) {
            return acc + cartItem.count * item.realPrice;
        }
        return acc;
    }, 0);

    const totalDiscount = busketArray.reduce((acc, item) => {
        const cartItem = cartItems.find((cartItem) => cartItem.item.id === item.id);
        if (cartItem) {
            return acc + cartItem.count * item.diskountPrice;
        }
        return acc;
    }, 0);


    return ( 
        <div className='bady-sum'>
            <h3 className='real'>{totalReal}</h3>
            <h3 className='diskount'>{totalDiscount}</h3>
            <NavLink to='/checkout'>
                <CreateOrderButton totalReal={totalReal} busketArray={busketArray} productCount={productCount}/>
            </NavLink>
        </div>
    );
}

export default TotalPrice;

