import { useState, useEffect } from 'react';
import SpecialCounter from '../SpecialCounter/SpecialCounter';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSpeciallCollectionFindTotall } from '../../../../redux/Actions';

function SpecialOrderTotalPrice({ subArray, personspecialbox, subIndex }) {
    const dispatch = useDispatch()
    let [totalForBoxSet, setTotalForBoxSet] = useState(0);
    let [count, setCount] = useState(1);
    const [firstEffectCompleted, setFirstEffectCompleted] = useState(false);
    
    let specialTotal = useSelector((state) => state.getcollection.specialCollectionTotallPrice);
    
    useEffect(() => {

        let oneCount = 0;
        subArray.forEach((item) => {
            return (oneCount += item.specialcount * item.basketitem.price);
        });

        setTotalForBoxSet(oneCount * count);
        
    }, [subArray, count]);
    
    useEffect(() => {
        let totalboxprice = [];
        personspecialbox.forEach((item, id) => {

            return totalboxprice.push(
                {
                    totalId: id,
                    totalItem: item,
                    totalCount: count
                }
            )
        });

        dispatch(setSpeciallCollectionFindTotall(totalboxprice));
        setFirstEffectCompleted(true);
    },[personspecialbox]);

    useEffect(() => {
        if (firstEffectCompleted) {
            const updatedSpecialTotal = specialTotal.map((item, index) => {

                if (index === subIndex) { 
                    
                    return {
                        ...item,
                        totalCount: count
                    };
                }
                return item;
            });
            dispatch(setSpeciallCollectionFindTotall(updatedSpecialTotal));
            
        }
        
    }, [count, firstEffectCompleted]);



    const handleLess = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    const handleMore = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div className='total-price'>
            <h2>{totalForBoxSet}</h2>
            <SpecialCounter handleLess={handleLess} handleMore={handleMore} count={count} />
        </div>
    );
}

export default SpecialOrderTotalPrice;