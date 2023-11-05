import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setGlobalSearchRequest } from '../../redux/Actions/StringActions'
function InfoChaptr() {
    const dispatch = useDispatch();
    const setState = () => {
        dispatch(setGlobalSearchRequest(''));
    }
    return ( 
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
    );
}

export default InfoChaptr;