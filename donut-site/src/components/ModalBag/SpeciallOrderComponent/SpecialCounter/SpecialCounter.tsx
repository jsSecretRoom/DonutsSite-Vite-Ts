import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setGloballSpecialPrice } from '../../../../redux/Actions';

import moreIco from '../../../../assets/ico/Sign_in.svg';
import lessIco from '../../../../assets/ico/Sign_out.svg';

function SpecialCounter({ totalPrice, setTotallcountprice }) {

    const dispatch = useDispatch();
    let specialTotal = useSelector((state) => state.globalStates.globalSpecialPrice);

    const [count, setCount] = useState(1);

    const handleLessClick = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            setTotallcountprice(totalPrice * newCount);
            dispatch(setGloballSpecialPrice(specialTotal -= totalPrice * newCount));
        }
    };

    const handleMoreClick = () => {
        const newCount = count + 1;
        setCount(newCount);
        setTotallcountprice(totalPrice * newCount);
        dispatch(setGloballSpecialPrice(specialTotal += totalPrice * newCount));
    };

    return (
        <div className='guds-counter'>
            <button className='less' onClick={handleLessClick}>
                <img src={lessIco} alt="lessIco" />
            </button>
            <div className='counter'>
                <p>{count}</p>
            </div>
            <button className='more' onClick={handleMoreClick}>
                <img src={moreIco} alt="moreIco" />
            </button>
        </div>
    );
}

export default SpecialCounter;