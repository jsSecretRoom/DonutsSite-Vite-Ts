
import './FuterComponent.scss';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setGlobalSearchRequest } from '../../redux/Actions/StringActions'

import Githab from '../../assets/Github.svg';
import Instagram from '../../assets/Instagram.svg';
import Telegram from '../../assets/Telegram.svg';
import LinkedIn from '../../assets/LinkedIn.svg';


function FuterComponent() {
    const dispatch = useDispatch();
    const setState = () => {
        dispatch(setGlobalSearchRequest(''));
    }

    return (
        <footer>
            <div className='foter-for-partners'>
                <section className='info-list'>
                    <div className='info-conteiner'>
                        <h4>About company</h4>
                        <div className='list'>
                            <NavLink to='/AboutUs' onClick={setState}>
                                <p>About Us</p>
                            </NavLink>
                            <NavLink to='/Terms' onClick={setState}>
                                <p>Terms of use of the site</p>
                            </NavLink>
                            <NavLink to='/Vacancies' onClick={setState}>
                                <p>Vacancies</p>
                            </NavLink>
                            <NavLink to='/Contacts' onClick={setState}>
                                <p>Contacts</p>
                            </NavLink>
                            <NavLink to='/Allcategories' onClick={setState}>
                                <p>All categories</p>
                            </NavLink>
                        </div>
                    </div>

                    <div className='info-conteiner'>
                        <h4>For partners</h4>
                        <div className='list'>
                            <NavLink to='/Cooperation' onClick={setState}>
                                <p>Cooperation with us</p>
                            </NavLink>
                            <NavLink to='/Franchising' onClick={setState}>
                                <p>Franchising</p>
                            </NavLink>
                            <NavLink to='/Rental' onClick={setState}>
                                <p>Rental of premises</p>
                            </NavLink>
                            <NavLink to='/SellonDivine' onClick={setState}>
                                <p>Sell on Divine D.</p>
                            </NavLink>
                        </div>
                    </div>

                    <div className='info-conteiner'>
                        <h4>For partners</h4>
                        <div className='list'>
                            <NavLink to='/Cooperation' onClick={setState}>
                                <p>Cooperation with us</p>
                            </NavLink>
                            <NavLink to='/Franchising' onClick={setState}>
                                <p>Franchising</p>
                            </NavLink>
                            <NavLink to='/Rental' onClick={setState}>
                                <p>Rental of premises</p>
                            </NavLink>
                            <NavLink to='/SellonDivine' onClick={setState}>
                                <p>Sell on Divine D.</p>
                            </NavLink>
                        </div>
                    </div>

                    <div className='info-conteiner'>
                        <h4>For partners</h4>
                        <div className='list'>
                            <NavLink to='/Cooperation' onClick={setState}>
                                <p>Cooperation with us</p>
                            </NavLink>
                            <NavLink to='/Franchising' onClick={setState}>
                                <p>Franchising</p>
                            </NavLink>
                            <NavLink to='/Rental' onClick={setState}>
                                <p>Rental of premises</p>
                            </NavLink>
                            <NavLink to='/SellonDivine' onClick={setState}>
                                <p>Sell on Divine D.</p>
                            </NavLink>
                        </div>
                    </div>

                    <div className='info-conteiner'>
                        <h4>For partners</h4>
                        <div className='list'>
                            <NavLink to='/Cooperation' onClick={setState}>
                                <p>Cooperation with us</p>
                            </NavLink>
                            <NavLink to='/Franchising' onClick={setState}>
                                <p>Franchising</p>
                            </NavLink>
                            <NavLink to='/Rental' onClick={setState}>
                                <p>Rental of premises</p>
                            </NavLink>
                            <NavLink to='/SellonDivine' onClick={setState}>
                                <p>Sell on Divine D.</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='info-conteiner'>
                        <h4>For partners</h4>
                        <div className='list'>
                            <NavLink to='/Cooperation' onClick={setState}>
                                <p>Cooperation with us</p>
                            </NavLink>
                            <NavLink to='/Franchising' onClick={setState}>
                                <p>Franchising</p>
                            </NavLink>
                            <NavLink to='/Rental' onClick={setState}>
                                <p>Rental of premises</p>
                            </NavLink>
                            <NavLink to='/SellonDivine' onClick={setState}>
                                <p>Sell on Divine D.</p>
                            </NavLink>
                        </div>
                    </div>
                </section>
                <section className='company'>
                    <div className='company-info'>
                        <h4>Divine Donuts™</h4>
                        <p>is a unique shop specializing in heavenly delicious donuts, gourmet pastries and unrivaled desserts. The registered Divine Donuts™ trademark guarantees unsurpassed quality and unmistakable taste, making it popular throughout the world.</p>
                    </div>
                </section>
                <section className='contacts-list'>
                    <NavLink to='https://github.com/jsSecretRoom' onClick={setState}>
                        <img src={Githab} alt="" />
                    </NavLink>
                    <NavLink to='https://t.me/ruslangubkin' onClick={setState}>
                        <img src={Telegram} alt="" />
                    </NavLink>
                    <NavLink to='https://www.instagram.com/ruslan_gubkin' onClick={setState}>
                        <img src={Instagram} alt="" />
                    </NavLink>
                    <NavLink to='https://www.linkedin.com/in/ruslan-%D0%B3%D1%83%D0%B1%D0%BA%D0%B8%D0%BD-a0754824a/' onClick={setState}>
                        <img src={LinkedIn} alt="" />
                    </NavLink>

                </section>
            </div>
        </footer>
    );
}

export default FuterComponent;