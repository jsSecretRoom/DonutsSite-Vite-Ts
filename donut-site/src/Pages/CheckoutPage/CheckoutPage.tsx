import './CheckoutPage.scss';
import { useMyContext } from '../../Context/Context';


function CheckoutPage() {

    const { order } = useMyContext();
    console.log(order)

    return ( 
        <main className='checkout'>
            <section className='order'>
                <h2>You order:</h2>
                {order.orderGuds.map((obj) => (
                    <div className='orderproduct'>
                        <div className='orderImg'>
                            <img src={obj.photo} alt="foto" />
                        </div>
                        <p>{obj.productName}</p>
                        <h3>{obj.count} x</h3>
                    </div>
                ))}
            </section>
            <section className='persondata'>
                <form action="">
                    <div className='paid'>
                        <h3>You paid {order.total}</h3>
                    </div>
                    <div className='inputs'>
                        <input type="text" name="" id="" placeholder='firstname'/>
                        <input type="text" name="" id="" placeholder='secondname'/>
                        <input type="number" name="" id=""  placeholder='phone number'/>
                        <input type="email" name="" id="" placeholder='email'/>
                    </div>
                    <button type="submit">Order</button>
                </form>
            </section>
        </main>

    );
}

export default CheckoutPage;