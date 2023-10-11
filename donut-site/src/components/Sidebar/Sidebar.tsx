import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
const categoryFilter: string[] = [
    "Sweets", 
    "Convenience products", 
    "Alcoholic Drinks", 
    "Cocktails", 
    "Сandies",
    "Bakery"
];

function Sidebar() {

    return (
        <aside>
            <section className='aside-continer'>
                <div className='list'>
                    {categoryFilter.map((filterName, index) => (
                        <NavLink to={`/shop/${filterName}`} key={index}>
                            <img src="" alt="" />
                            <p>{filterName}</p>
                            
                        </NavLink>
                    ))}
                </div>
                <div className='list'>
                    <li>
                        <p>Information about the company</p>
                    </li>
                    <a>
                        <img src="" alt="" />
                        <NavLink to='/AboutUs'>About Us</NavLink>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <NavLink to='/Terms'>Terms of use of the site</NavLink>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <NavLink to='/Vacancies'>Vacancies</NavLink>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <NavLink to='/Contacts'>Contacts</NavLink>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <NavLink to='/Allcategories'>All categories</NavLink>
                    </a>

                </div>
                <div className='list'>
                    <li>
                        <p>For partners</p>
                    </li>
                    <a>
                        <img src="" alt="" />
                        <NavLink to='/Cooperation'>Cooperation with us</NavLink>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <NavLink to='/Franchising'>Franchising</NavLink>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <NavLink to='/Rental'>Rental of premises</NavLink>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <NavLink to='/SellonDivine'>Sell on Divine D.</NavLink>
                    </a>
                </div>
            </section>
            
        </aside>
    );
}

export default Sidebar;