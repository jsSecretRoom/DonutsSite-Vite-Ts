import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideburNavLink from './SideburNavLink';

import { RootState } from '../../redux/RootReducer';

function Sidebar() {
    
    let { filterName } = useParams();
    let listDataNemas = useSelector((state: RootState) => state.getcollection.collectionslistNames);
    const togleButton = useSelector((state: RootState) => state.getboolean.togleSidebur);
    
    return (
        
        <aside className={`aside ${togleButton ? 'show-aside' : ''}`}>
            <section className='aside-continer'>
                
                <div className='list'>
                    <li>
                        <p>Goods</p>
                    </li>
                    {listDataNemas.map((filter, index) => (
                        <SideburNavLink key={index} filterName={filterName} filter={filter} index={index}/>
                    ))}
                    
                </div>
                <div className='list'>
                    <li>
                        <p>Information about the company</p>
                    </li>
                    <NavLink to='/AboutUs' >
                        <img src="" alt="" />
                        <p>About Us</p>
                    </NavLink>
                    <NavLink to='/Terms' >
                        <img src="" alt="" />
                        <p>Terms of use of the site</p>
                    </NavLink>
                    <NavLink to='/Vacancies' >
                        <img src="" alt="" />
                        <p>Vacancies</p>
                    </NavLink>
                    <NavLink to='/Contacts' >
                        <img src="" alt="" />
                        <p>Contacts</p>
                    </NavLink>
                    <NavLink to='/Allcategories' >
                        <img src="" alt="" />
                        <p>All categories</p>
                    </NavLink>

                </div>
                <div className='list'>
                    <li>
                        <p>For partners</p>
                    </li>
                    <NavLink to='/Cooperation' >
                        <img src="" alt="" />
                        <p>Cooperation with us</p>
                    </NavLink>
                    <NavLink to='/Franchising' >
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