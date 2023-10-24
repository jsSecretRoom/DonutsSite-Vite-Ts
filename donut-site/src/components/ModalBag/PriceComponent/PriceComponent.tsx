import './PriceComponent.scss';

function PriceComponent({ realPrice, discountPrice, diskountIndicator, count }) {
  return (
    <div className='guds-line-price'>
        <p className={`start-price ${diskountIndicator ? '' : 'nonediscount'}`}>{(realPrice * count).toString()}</p>

        {diskountIndicator ? (
            <p className='discount-price'>{(discountPrice * count).toString()}</p>
        ) : (
            <p></p>
        )}
    </div>
  );
}

export default PriceComponent;
