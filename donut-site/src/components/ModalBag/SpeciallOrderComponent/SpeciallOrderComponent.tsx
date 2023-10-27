import './SpeciallOrderComponent.scss';
import SpecialCard from '../SpecialCard/SpecialCard';
function SpeciallOrderComponent() {

    let savedData = localStorage.getItem('speciallCollectionOrer');
    let specialproducts = JSON.parse(savedData);
    console.log(specialproducts)
    
    return (
        <div className='speciall-product-list'>
            {specialproducts.map((subArray, subIndex) => (
                <div key={subIndex} className='product-item'>

                    <div className='special-order-products'>
                        <SpecialCard speciallsubArray={subArray} subIndex={subIndex}/>
                    </div>
                    <div className='dell'>
                        <button onClick={() => dellSpeciallOrder(specialorer, subIndex)}>Delete</button>
                    </div>
                    <div className='total-price'>
                        <h2>222</h2>
                    </div>
                </div>
                
                
            ))}
        </div>
    );
}

export default SpeciallOrderComponent;