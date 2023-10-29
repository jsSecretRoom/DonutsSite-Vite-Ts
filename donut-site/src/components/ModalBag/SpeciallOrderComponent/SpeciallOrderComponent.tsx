import './SpeciallOrderComponent.scss';
import SpecialCard from './SpecialCard/SpecialCard';
import SpecialOrderTotalPrice from './SpecialOrderTotalPrice/SpecialOrderTotalPrice';
import {useState} from 'react';


function SpeciallOrderComponent() {
    let savedData = localStorage.getItem('speciallCollectionOrer');
    let specialproducts = JSON.parse(savedData) || [];
    let [personspecialbox, setpersonspecialbox] = useState(specialproducts);
    
    const dellSpeciallOrder = (subIndex) => {
        
        const updatedSpecialProducts = [...personspecialbox];
       
        updatedSpecialProducts.splice(subIndex, 1);
        
        localStorage.setItem('speciallCollectionOrer', JSON.stringify(updatedSpecialProducts));
        
        setpersonspecialbox(updatedSpecialProducts);
    };

    return (
        <div className='speciall-product-list'>
        {personspecialbox.map((subArray, subIndex) => (
            <div key={subIndex} className='product-item'>
                <div className='special-order-products'>
                    <SpecialCard speciallsubArray={subArray} subIndex={subIndex} />
                </div>
                <div className='dell'>
                    <button onClick={() => dellSpeciallOrder(subIndex)}>Delete</button>
                </div>
                <SpecialOrderTotalPrice subArray={subArray} personspecialbox={personspecialbox} subIndex={subIndex}/>
            </div>
        ))}
        </div>
    );
}

export default SpeciallOrderComponent;