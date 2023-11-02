import './SpecialCard.scss';

function SpecialCard({ subArray } : any) {
  
  if (!Array.isArray(subArray)) {
    return <div>Special items are not available</div>;
  }

  return (
    <>
      {subArray.map((item, itemIndex) => (
        <div key={itemIndex} className='special-order'>
          <div className='special-img'>
            <img src={item.basketitem.oneimg} alt="oneimg" />
          </div>
          <div className='info-product-container'>
            <div className='special-info'>
              <p>{item.basketitem.info}</p>
            </div>
            <div className='special-price-info'>
              <p>Local price: {item.basketitem.price}</p>
              <p>Count: {item.specialcount}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default SpecialCard;