import {useState, useEffect} from 'react';
import SpecialCounter from '../SpecialCounter/SpecialCounter';


function SpecialOrderTotalPrice({subArray}) {
    let [totalPrice, setTotalPrice] = useState(0);
    let [totallcountprice, setTotallcountprice] = useState(totalPrice);
    
    useEffect(() => {
        let count = 0;
        subArray.forEach((item) => {
            return count += item.specialcount * item.basketitem.price;
        })
        setTotalPrice(count);
        setTotallcountprice(count);

    },[totalPrice]);

    return ( 
        <div className='total-price'>
            <h2>{totallcountprice}</h2>
            <SpecialCounter totalPrice={totalPrice} setTotallcountprice={setTotallcountprice}/>
        </div>
    );
}

export default SpecialOrderTotalPrice;