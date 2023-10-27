import './SpeciallOrderComponent.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import SpecialCard from '../SpecialCard/SpecialCard';

function SpeciallOrderComponent() {
    const [specialorer, setspecialorder] = useState([]);
    const prototipespeciallCollection = useSelector((state) => state.getcollection.speciallCollectionOrer);

    useEffect(() => {
        const savedData = localStorage.getItem('speciallCollectionOrer');
        if (savedData) {
            setspecialorder(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        if (prototipespeciallCollection && prototipespeciallCollection.length > 0) {
            localStorage.setItem('speciallCollectionOrer', JSON.stringify([...specialorer, prototipespeciallCollection]));
            setspecialorder([...specialorer, prototipespeciallCollection]);
        }
    }, [prototipespeciallCollection]);

    const dellSpeciallOrder = (subIndex) => {
        
        const updatedSpecialorer = [...specialorer];
        
        updatedSpecialorer.splice(subIndex, 1);
        
        setspecialorder(updatedSpecialorer);
        
        // Обновите данные в localStorage
        localStorage.setItem('speciallCollectionOrer', JSON.stringify(updatedSpecialorer));
    }

    return (
        <>
            {specialorer.length > 0 && specialorer.map((subArray, subIndex) => (
                <div key={subIndex} className='speciall-product-list'>
                    <div  className='special-order-products'>
                        <SpecialCard speciallsubArray={subArray} subIndex={subIndex}/>
                    </div>
                    <div className='dell'>
                        <button onClick={() => dellSpeciallOrder(specialorer, subIndex)}>Delete</button>
                    </div>
                </div>
            ))}

            <div className='total-price'>
                <h2>222</h2>
            </div>
        </>
    );
}

export default SpeciallOrderComponent;