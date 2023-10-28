import './OrderButton.scss';

import { useSelector, useDispatch  } from 'react-redux';
import { setTogleSpeciallModalBox} from '../../redux/Actions';

function OrderButton() {
    const dispatch = useDispatch();
  
    const toggleModal = useSelector((state) => state.togllebutton.togleSpeciallModalBox);
  
    const toggleModall = () => {
      dispatch(setTogleSpeciallModalBox(!toggleModal));
    }
   
    return (
      <button onClick={toggleModall}><h4>Show order</h4></button>
    );
  }
  
  export default OrderButton;