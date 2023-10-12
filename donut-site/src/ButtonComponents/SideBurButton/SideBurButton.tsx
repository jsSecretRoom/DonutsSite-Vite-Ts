import './SideBurButton.scss';
import Menu from '../../assets/Menu.svg';
import { useSelector, useDispatch } from 'react-redux'; 

import { setSideburButton } from '../../redux/Actions';

function SideBurButton() {
    const dispatch = useDispatch();
    const togleButton = useSelector((data) => data.togllebutton.togleSidebur);
    
    const setButton = () =>  dispatch(setSideburButton(!togleButton)); 
    
    return (
        <button className='side-bur-button' onClick={setButton}>
            <img src={Menu} alt="Menu" />
        </button>
    );
}

export default SideBurButton;