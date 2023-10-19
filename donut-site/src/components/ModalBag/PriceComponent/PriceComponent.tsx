import './PriceComponent.scss';

function PriceComponent({ realPrice, discountPrice, count }) {
    
   
    return (
        <div className='guds-line-price'>
            <p className='start-price'>{(realPrice * count).toString()}</p>
            <p className='discount-price'>{(discountPrice * count).toString()}</p>
        </div>
    );
}

export default PriceComponent;
