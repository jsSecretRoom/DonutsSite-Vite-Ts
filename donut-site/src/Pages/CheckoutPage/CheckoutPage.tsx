import './CheckoutPage.scss';
import SubmitOrderButton from '../../ButtonComponents/SubmitOrderButton/SubmitOrderButton';
import fulboxico from '../../assets/box/fullboxIco.svg';

function CheckoutPage() {
  const orderData = localStorage.getItem('orderData');
  const savedOrderData = orderData ? JSON.parse(orderData) : { orderGuds: [] };

  const specialCollectionOrder = localStorage.getItem('speciallCollectionOrer');
  let specialproducts = specialCollectionOrder ? JSON.parse(specialCollectionOrder) : [];
  console.log(specialproducts);

  return (
    <main className="checkout">
      <section className="order">
        <h2>Ваш заказ:</h2>
        {savedOrderData.orderGuds.map((obj: any) => (
          <div className="orderproduct" key={obj.productName}>
            <div className="orderImg">
              <img src={obj.photo} alt="фото" />
            </div>
            <p>{obj.productName}</p>
            <h3>Count: {obj.count} x</h3>
          </div>
        ))}

        {specialproducts.map((obj: any) => (
          <div className="orderproduct" key={obj.productName}>
            <div className="orderImg">
              <img src={fulboxico} alt="фото" />
            </div>
            <ul>
              {obj.basketitem && obj.basketitem.info !== undefined ? (
                <li>
                  {obj.basketitem.info.length > 25
                    ? `${obj.basketitem.info.slice(0, 25)}... ${obj.specialcount}x`
                    : `${obj.basketitem.info} ${obj.specialcount}x`}
                </li>
              ) : (
                <li>Info is undefined</li>
              )}
            </ul>
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