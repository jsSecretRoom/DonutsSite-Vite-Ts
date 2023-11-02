import './CheckoutPage.scss';
import SubmitOrderButton from '../../ButtonComponents/SubmitOrderButton/SubmitOrderButton';
import fulboxico from '../../assets/box/fullboxIco.svg';

interface Product {
  productName: string;
  photo: string;
  count: number;
}

interface SpecialProduct {
  basketitem: {
    info: string;
    // другие свойства basketitem
  };
  specialcount: number;
  // другие свойства SpecialProduct
}

interface OrderData {
  orderGuds: Product[];
  total: number;
}

function CheckoutPage() {
  const savedOrderData: OrderData = JSON.parse(localStorage.getItem('orderData') || '{}');

  let specialproducts: SpecialProduct[] = JSON.parse(localStorage.getItem('speciallCollectionOrer') || '[]');
  console.log(specialproducts);

  return (
    <main className='checkout'>
      <section className='order'>
        <h2>Ваш заказ:</h2>
        {savedOrderData.orderGuds.map((obj) => (
          <div className='orderproduct' key={obj.productName}>
            <div className='orderImg'>
              <img src={obj.photo} alt='фото' />
            </div>
            <p>{obj.productName}</p>
            <h3>Count: {obj.count} x</h3>
          </div>
        ))}

        {specialproducts.map((obj, id) => (
          <div className='orderproduct' key={id}>
            <div className='orderImg'>
              <img src={fulboxico} alt='фото' />
            </div>
            <ul>
              {obj.basketitem.info.length > 25 ? (
                <li>{`${obj.basketitem.info.slice(0, 25)}... ${obj.specialcount}x`}</li>
              ) : (
                <li>{`${obj.basketitem.info} ${obj.specialcount}x`}</li>
              )}
            </ul>
          </div>
        ))}
      </section>
      <section className='persondata'>
        <form action=''>
          <div className='paid'>
            <h3>You will pay: {savedOrderData.total}</h3>
          </div>
          <div className='info'>
            <h4>Enter order information:</h4>
          </div>
          <div className='inputs'>
            <input type='text' name='' id='' placeholder='имя' />
            <input type='text' name='' id='' placeholder='фамилия' />
            <input type='number' name='' id='' placeholder='номер телефона' />
            <input type='email' name='' id='' placeholder='email' />
          </div>
          <SubmitOrderButton />
        </form>
      </section>
    </main>
  );
}

export default CheckoutPage;