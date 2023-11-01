import './SideBurButton.scss';
import Menu from '../../assets/Menu.svg';
import { useSelector, useDispatch } from 'react-redux';

import { setSideburButton } from '../../redux/Actions/BooleanActions';

import { RootState } from '../../redux/RootReducer';
function SideBurButton() {
    const dispatch = useDispatch();
    const togleButton = useSelector((data: RootState) => data.getboolean.togleSidebur);

    const setButton = () => dispatch(setSideburButton(!togleButton));

    return (
        <button className='side-bur-button' onClick={setButton}>
            <img src={Menu} alt="Menu" />
        </button>
    );
}

export default SideBurButton;