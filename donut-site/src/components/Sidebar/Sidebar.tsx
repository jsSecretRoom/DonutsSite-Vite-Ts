import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; 


const categoryFilter: string[] = [
    "Sweets", 
    "Convenience products", 
    "Alcoholic Drinks", 
    "Cocktails", 
    "Сandies",
    "Bakery"
]; 


function Sidebar() {

    const togleButton = useSelector((data) => data.togllebutton.togleSidebur);
    
    return (
        <aside className={`aside ${togleButton ? 'show-aside' : ''}`}>
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
                    <NavLink to='/AboutUs'>
                        <img src="" alt="" />
                        <p>About Us</p>
                    </NavLink>
                    <NavLink to='/Terms'>
                        <img src="" alt="" />
                        <p>Terms of use of the site</p>
                    </NavLink>
                    <NavLink to='/Vacancies'>
                        <img src="" alt="" />
                        <p>Vacancies</p>
                    </NavLink>
                    <NavLink to='/Contacts'>
                        <img src="" alt="" />
                        <p>Contacts</p>
                    </NavLink>
                    <NavLink to='/Allcategories'>
                        <img src="" alt="" />
                        <p>All categories</p>
                    </NavLink>

                </div>
                <div className='list'>
                    <li>
                        <p>For partners</p>
                    </li>
                    <NavLink to='/Cooperation'>
                        <img src="" alt="" />
                        <p>Cooperation with us</p>
                    </NavLink>
                    <NavLink to='/Franchising'>
                        <img src="" alt="" />
                        <p>Franchising</p>
                    </NavLink>
                    <NavLink to='/Rental'>
                        <img src="" alt="" />
                        <p>Rental of premises</p>
                    </NavLink>
                    <NavLink to='/SellonDivine'>
                        <img src="" alt="" />
                        <p>Sell on Divine D.</p>
                    </NavLink>
                </div>
            </section>
            
        </aside>
    );
}

export default Sidebar;