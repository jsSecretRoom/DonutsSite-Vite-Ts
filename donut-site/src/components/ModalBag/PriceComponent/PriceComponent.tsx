import './PriceComponent.scss';
interface PriceComponentProps {
  realPrice: number;
  discountPrice: number;
  diskountIndicator: boolean;
  count: number;
}

function PriceComponent({ realPrice, discountPrice, diskountIndicator, count }: PriceComponentProps) {
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
