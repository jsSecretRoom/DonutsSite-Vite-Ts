import './HomePage.scss';
import { NavLink, Outlet } from 'react-router-dom';
import AnimationComponent from '../AnimationComponent/AnimationComponent';
import qrCode from '../../assets/qr-code.svg'

function HomePage() {
    return ( 
        <div className='conteiner'>
            <Outlet/>
            <main>
                <AnimationComponent/>
                <section className='interface-conteiner'>
                    <NavLink to={'/shop'}><h2>Order now!</h2></NavLink>
                    <img src={qrCode} alt="qar-kod" />
                </section>
            </main>
        </div>
    );
}

export default HomePage;