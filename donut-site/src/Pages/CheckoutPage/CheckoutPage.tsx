import './CheckoutPage.scss';
import SubmitOrderButton from '../../ButtonComponents/SubmitOrderButton/SubmitOrderButton';

import fulboxico from '../../assets/box/fullboxIco.svg'

function CheckoutPage() {
    
    const savedOrderData = JSON.parse(localStorage.getItem('orderData'));
   
    
    let specialproducts = JSON.parse(localStorage.getItem('speciallCollectionOrer')) || [];
    console.log(specialproducts)

    return ( 
        <main className='checkout'>
            <section className='order'>
                <h2>Ваш заказ:</h2>
                {savedOrderData.orderGuds.map((obj) => (
                    <div className='orderproduct' key={obj.productName}>
                        <div className='orderImg'>
                            <img src={obj.photo} alt="фото" />
                        </div>
                        <p>{obj.productName}</p>
                        <h3>Count: {obj.count} x</h3>
                    </div>
                ))}

                {specialproducts.map((obj) => (
                    <div className='orderproduct' key={obj.productName}>
                        <div className='orderImg'>
                            <img src={fulboxico} alt="фото" />
                        </div>
                        <ul>
                            {obj.map((item) => (
                                <li>{item.basketitem.info.length > 25 ? `${item.basketitem.info.slice(0, 25)}...` : item.basketitem.info} {item.specialcount}x</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <section className='persondata'>
                <form action="">
                    <div className='paid'>
                        <h3>You will pay: {savedOrderData.total}</h3>
                    </div>
                    <div className='info'><h4>Enter order information:</h4></div>
                    <div className='inputs'>
                        <input type="text" name="" id="" placeholder='имя'/>
                        <input type="text" name="" id="" placeholder='фамилия'/>
                        <input type="number" name="" id="" placeholder='номер телефона'/>
                        <input type="email" name="" id="" placeholder='email'/>
                    </div>
                    <SubmitOrderButton/>
                </form>
            </section>
        </main>
    );
}

export default CheckoutPage;