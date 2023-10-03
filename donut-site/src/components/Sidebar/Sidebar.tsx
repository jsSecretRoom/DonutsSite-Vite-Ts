import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
const categoryFilter: string[] = [
    "Alcoholic Drinks", 
    "Convenience products", 
    "Sweets", 
    "Cocktails", 
    "Сandies",
    "bakery"
];

function Sidebar() {

    return (
        <aside>
            <section className='aside-continer'>
                <div className='list'>
                    {categoryFilter.map((collectionName, index) => (
                        <NavLink to={`/shop/${collectionName}`} key={index}>
                            <img src="" alt="" />
                            <p>{collectionName}</p>
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