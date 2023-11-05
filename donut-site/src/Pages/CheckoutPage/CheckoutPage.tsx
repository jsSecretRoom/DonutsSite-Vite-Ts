import './CheckoutPage.scss';
import SubmitOrderButton from '../../ButtonComponents/SubmitOrderButton/SubmitOrderButton';
import fulboxico from '../../assets/box/fullboxIco.svg';

interface ProductItem {
  count: number;
  photo: string;
  productName: string;
}

interface BasketItem {
  id: string;
  oneimg: string;
  info: string;
  price: number;
}

interface SpecialProduct {
  basketitem: BasketItem;
  specialcount: number;
  specialid: string;
}

function CheckoutPage() {
  let orderData: any = localStorage.getItem('orderData');
  let savedOrderData:any = orderData ? JSON.parse(orderData) : null;

  let specialCollectionOrder: any = localStorage.getItem('speciallCollectionOrer');
  let specialproducts: any = specialCollectionOrder ? JSON.parse(specialCollectionOrder) : null;
  console.log(specialproducts);

  return (
    <main className="checkout">
      <section className="order">
        <h2>Ваш заказ:</h2>
        {savedOrderData && savedOrderData.orderGuds.map((obj: ProductItem, id: number) => (
          <div className="order-product" key={id}>
            <div className="orderImg">
              <img src={obj.photo} alt="photo" />
            </div>
            <p>{obj.productName}</p>
            <h3>Count: {obj.count} x</h3>
          </div>
        ))}

        {specialproducts.map((obj: any, id: number) => (
          <div className="order-product" key={id}>
            <div className="orderImg">
              <img src={fulboxico} alt="fulboxico" />
            </div>
            <div className='by-items'>
              {obj.map((item: SpecialProduct, index: number) => (
                <ul key={index}>
                  <li> <img src={item.basketitem.oneimg} alt="img" /> {item.basketitem.info.slice(0, 24)}... <span>{item.specialcount} x</span></li>
                </ul>
              ))}
            </div>
          </div>
        ))}

      </section>
      <section className="persondata">
        <form action="">
          <div className="paid">
            <h3>You will pay: {savedOrderData.total}</h3>
          </div>
          <div className="info">
            <h4>Enter order information:</h4>
          </div>
          <div className="inputs">
            <input type="text" name="" id="" placeholder="имя" />
            <input type="text" name="" id="" placeholder="фамилия" />
            <input type="number" name="" id="" placeholder="номер телефона" />
            <input type="email" name="" id="" placeholder="email" />
          </div>
          <SubmitOrderButton />
        </form>
      </section>
    </main>
  );
}

export default CheckoutPage;