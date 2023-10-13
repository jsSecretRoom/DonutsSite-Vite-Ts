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
                        <h4>Подарите Себе Праздник Вкуса с Нашими Пончиками и Кондитерскими Шедеврами!</h4>
                        <div className='prev'>
                            <p>Дорогие друзья, добро пожаловать в удивительный мир вкуса, радости и удовольствия! Наши пончи и кондитерские изделия - это не просто десерты, это настоящие произведения искусства, созданные с любовью к сладкому и желанием порадовать вас.</p>
            
                            <img src={quteimg} alt="quteimg" />
                        </div>

                    </section>
                    <div className='modrn-section'>
                        <h4>Почему именно мы?</h4>
                        <div className='content'>
                            <section className='better-shop'>
                                
                                <div className='coneineer-shop'>
                                    
                                    <div className='images-post'>
                                        <img src={icecrem} alt="icecrem" />
                                    </div>
                                    <div className='quality'>
                                        <p>1) Индивидуальность: Мы гордимся тем, что каждый наш пончик и конфета уникален. Мы создаем великолепные вкусовые комбинации и оформление, которое завораживает.</p>
                                        <p>2) Качество: Мы используем только лучшие ингредиенты, чтобы гарантировать вам непревзойденный вкус и качество.</p>
                                        <p>3) Разнообразие: У нас есть широкий ассортимент для любого вкуса. От классических пончиков до экзотических кондитерских изделий, у нас есть все, чтобы удовлетворить ваши сладкие желания.</p>
                                    </div>
                                </div>
                            </section>
                            <section className='hits'>
                                <ul>
                                    <li>Волшебные Пончи: Нежные, ароматные, с разнообразными начинками. Вкус, который снимет усталость и подарит улыбку.</li>
                                    <li>Роскошные Торты: Наши кондитерские шедевры - это настоящее искусство в каждой торте. Идеальное решение для особых случаев.</li>
                                    <li>Сладкие Подарочные Наборы: Хотите порадовать близких? Подарочные наборы с нашими сладостями - это идеальный выбор.</li>
                                </ul>
                                <div className='images-post'>
                                    <img src={cake} alt="cake" />
                                </div>
                            </section>
                        </div>
                        
                    </div>
                    
                    <section className='svet-vords'>
                        <p>Сладкие Вкусы и Моменты: У нас каждый день может стать праздником. Завтрак с пончиком, кофе с друзьями, романтический ужин с нашими десертами - удовольствие в каждом укусе.</p>
                        <p>Подарите себе радость и вкус! Мы гарантируем, что каждый заказ у нас - это невероятное путешествие в мир сладостей.</p>
                    </section>
                    <section className='ordr-byit'>
                        <h4>Сделайте заказ сегодня и дайте своим вкусовым рецепторам настоящий праздник!</h4>
                        <NavLink to='/shop/Sweets'>Оформить заказ</NavLink>
                        <p>Забудьте о диетах и калориях - иногда важно просто наслаждаться жизнью вкуса. У нас вы найдете именно это!</p>
                        <p>Добро пожаловать в мир сладких удовольствий!</p>
                    </section>
                </div>
                <footer>
                    
                </footer>
            </main>
        </div>
    );
}

export default HomePage;