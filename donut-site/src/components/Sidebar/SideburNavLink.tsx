import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalSearchRequest } from '../../redux/Actions/StringActions';
import { setSideburButton } from '../../redux/Actions/BooleanActions';

import { RootState } from '../../redux/RootReducer';

function SideburNavLink({ filterName, filter, index } : any) {
    const dispatch = useDispatch();
    const [navColor, setNavColor] = useState(false);
    const listDataNames = useSelector((state: RootState) => state.getcollection.collectionslistNames);
    const location = useLocation();
    
    
    useEffect(() => {
        const decodedFilter = decodeURIComponent(filter);
        const decodedPathname = decodeURIComponent(location.pathname);

        if (listDataNames.includes(filterName) && decodedPathname.includes(decodedFilter)) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    }, [listDataNames, filterName, filter, location]);

    const setState = () => {
        dispatch(setGlobalSearchRequest(''));
        dispatch(setSideburButton(false));
    };

    return (
        <NavLink
            className={`state ${navColor ? 'active' : ''}`}
            onClick={setState}
            to={`/shop/${filter}`}
            key={index}
        >
            <img src="" alt="" />
            <p style={{ color: navColor ? 'red' : 'blue' }}>{filter}</p>
        </NavLink>
    );
}

export default SideburNavLink;