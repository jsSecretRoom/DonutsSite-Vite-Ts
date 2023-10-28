import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { increaseSpecialTotal, decreaseSpecialTotal} from '../../../../redux/Actions';

import moreIco from '../../../../assets/ico/Sign_in.svg';
import lessIco from '../../../../assets/ico/Sign_out.svg';

function SpecialCounter({ totalPrice, setTotallcountprice }) {

    const dispatch = useDispatch();
    

    const [count, setCount] = useState(1);

    const handleLessClick = () => {
        if (count > 1) {
          
          setCount(count - 1);
          setTotallcountprice(totalPrice * count);
          dispatch(decreaseSpecialTotal(totalPrice));
        }
    };

    const handleMoreClick = () => {
        
        setCount(count + 1);
        setTotallcountprice(totalPrice * count);
        dispatch(increaseSpecialTotal(totalPrice));
    };

    useEffect(() => {
        dispatch(increaseSpecialTotal(totalPrice * count));
    }, [totalPrice]);


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