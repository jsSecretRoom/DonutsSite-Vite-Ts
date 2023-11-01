import './OrderButton.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/RootReducer';
import { setTogleSpeciallModalBox } from '../../redux/Actions/BooleanActions';

function OrderButton() {
  const dispatch = useDispatch();
  const toggleModal: boolean = useSelector((state: RootState) => state.getboolean.togleSpeciallModalBox);

  const toggleModall = () => {
    dispatch(setTogleSpeciallModalBox(!toggleModal));
  }

  return (
    <button onClick={toggleModall}><h4>Show order</h4></button>
  );
}

export default OrderButton;