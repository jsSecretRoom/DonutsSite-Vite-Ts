import './PriceComponent.scss';


function PriceComponent({ realPrice, discountPrice, count }) {
    let real = realPrice * count;
    let discount = discountPrice * count;
    return (
        <div className='guds-line-price'>
            <p className='start-price'>{real}</p>
            <p className='discount-price'>{discount}</p>
        </div>
    );
}

export default PriceComponent;