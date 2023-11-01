import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalSearchRequest } from '../../redux/Actions/StringActions';


function Sidebar() {
    const dispatch = useDispatch();
    const togleButton = useSelector((state) => state.getboolean.togleSidebur);
    let listDataNemas = useSelector((state) => state.getcollection.collectionslistNames);

    const setState = () => {
        dispatch(setGlobalSearchRequest(''));
    }
    return (
        <aside className={`aside ${togleButton ? 'show-aside' : ''}`}>
            <section className='aside-continer'>
                <div className='list'>
                    {listDataNemas.map((filterName, index) => (
                        <NavLink onClick={setState} to={`/shop/${filterName}`} key={index}>
                            <img src="" alt="" />
                            <p>{filterName}</p>
                        </NavLink>
                    ))}
                </div>
                <div className='list'>
                    <li>
                        <p>Information about the company</p>
                    </li>
                    <NavLink to='/AboutUs' onClick={setState}>
                        <img src="" alt="" />
                        <p>About Us</p>
                    </NavLink>
                    <NavLink to='/Terms' onClick={setState}>
                        <img src="" alt="" />
                        <p>Terms of use of the site</p>
                    </NavLink>
                    <NavLink to='/Vacancies' onClick={setState}>
                        <img src="" alt="" />
                        <p>Vacancies</p>
                    </NavLink>
                    <NavLink to='/Contacts' onClick={setState}>
                        <img src="" alt="" />
                        <p>Contacts</p>
                    </NavLink>
                    <NavLink to='/Allcategories' onClick={setState}>
                        <img src="" alt="" />
                        <p>All categories</p>
                    </NavLink>

                </div>
                <div className='list'>
                    <li>
                        <p>For partners</p>
                    </li>
                    <NavLink to='/Cooperation' onClick={setState}>
                        <img src="" alt="" />
                        <p>Cooperation with us</p>
                    </NavLink>
                    <NavLink to='/Franchising' onClick={setState}>
                        <img src="" alt="" />
                        <p>Franchising</p>
                    </NavLink>
                    <NavLink to='/Rental' onClick={setState}>
                        <img src="" alt="" />
                        <p>Rental of premises</p>
                    </NavLink>
                    <NavLink to='/SellonDivine' onClick={setState}>
                        <img src="" alt="" />
                        <p>Sell on Divine D.</p>
                    </NavLink>
                </div>
            </section>

        </aside>
    );
}

export default Sidebar;