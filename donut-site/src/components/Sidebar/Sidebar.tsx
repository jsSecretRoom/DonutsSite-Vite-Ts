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
                        <p>About Us</p>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <p>Terms of use of the site</p>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <p>Vacancies</p>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <p>Contacts</p>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <p>All categories</p>
                    </a>

                </div>
                <div className='list'>
                    <li>
                        <p>For partners</p>
                    </li>
                    <a>
                        <img src="" alt="" />
                        <p>Cooperation with us</p>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <p>Franchising</p>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <p>Rental of premises</p>
                    </a>
                    <a>
                        <img src="" alt="" />
                        <p>Sell on Divine D.</p>
                    </a>
                </div>
            </section>
            
        </aside>
    );
}

export default Sidebar;