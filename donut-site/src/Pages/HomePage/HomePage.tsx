import './HomePage.scss';
import { NavLink, Outlet } from 'react-router-dom';
import AnimationComponent from '../../components/AnimationComponent/AnimationComponent';
import quteimg from '../../assets/img/guteimg.jpg'
import cake from '../../assets/img/Flower.jpg'
import icecrem from '../../assets/img/icecrem.jpg'


function HomePage() {
    return (
        <div className='conteiner'>
            <Outlet />
            <main>
                <AnimationComponent />
                <section className='interface-conteiner'>
                    <NavLink to={'/shop/Sweets'}><h2>Order now!</h2></NavLink>
                </section>
                <div className='post-conteiner'>
                    <section className='head-post'>
                        <h4>Treat yourself to a Feast of Taste with Our Donuts and Confectionery Masterpieces!</h4>
                        <div className='prev'>
                            <p>Dear friends, welcome to the wonderful world of taste, joy and pleasure! Our ponches and confectionery products are not just desserts, they are real works of art, created with a love for sweets and a desire to please you.</p>
            
                            <img src={quteimg} alt="quteimg" />
                        </div>

                    </section>
                    <div className='modrn-section'>
                        <h4>Why us?</h4>
                        <div className='content'>
                            <section className='better-shop'>
                                
                                <div className='coneineer-shop'>
                                    
                                    <div className='images-post'>
                                        <img src={icecrem} alt="icecrem" />
                                    </div>
                                    <div className='quality'>
                                        <p>1) Individuality: We are proud that each of our donuts and candies is unique. We create great flavor combinations and designs that captivate.</p>
                                        <p>2) Quality: We use only the best ingredients to guarantee you unmatched taste and quality.</p>
                                        <p>3) Variety: We have a wide range to suit every taste. From classic donuts to exotic confections, we have everything to satisfy your sweet cravings.</p>
                                    </div>
                                </div>
                            </section>
                            <section className='hits'>
                                <ul>
                                    <li>Magic Ponchi: Delicate, fragrant, with a variety of fillings. A taste that will relieve fatigue and give you a smile.</li>
                                    <li>Luxurious Cakes: Our confectionery masterpieces are a true art in every cake. The ideal solution for special occasions.</li>
                                    <li>Sweet Gift Sets: Do you want to please your loved ones? Gift sets with our sweets are the perfect choice.</li>
                                </ul>
                                <div className='images-post'>
                                    <img src={cake} alt="cake" />
                                </div>
                            </section>
                        </div>
                        
                    </div>
                    
                    <section className='svet-vords'>
                        <p>Sweet Tastes and Moments: For us, every day can become a holiday. Breakfast with a donut, coffee with friends, a romantic dinner with our desserts - pleasure in every bite.</p>
                        <p>Give yourself joy and taste! We guarantee that every order with us is an incredible journey into the world of sweets.</p>
                    </section>
                    <section className='ordr-byit'>
                        <h4>Place your order today and give your taste buds a real treat!</h4>
                        <NavLink to='/shop/Sweets'>Order now</NavLink>
                        <p>Forget about diets and calories - sometimes it's important to just enjoy the life of taste. Here you will find exactly that!</p>
                        <p>Welcome to the world of sweet treats!</p>
                    </section>
                </div>
                <footer>
                    
                </footer>
            </main>
        </div>
    );
}

export default HomePage;