import './OrderButton.scss';

import { useSelector, useDispatch  } from 'react-redux';
import { setTogleSpeciallModalBox, setOrerSpeciallCollection } from '../../redux/Actions';


function OrderButton() {

    const dispatch = useDispatch();
    
    const toggleModal = useSelector((state) => state.togllebutton.togleSpeciallModalBox);

    let speciallCollection = useSelector((state) => state.getcollection.speciallCollectionBox);
    let prototipespeciallCollection = useSelector((state) => state.getcollection.speciallCollectionOrer);

    const toggleModall = () => {
        dispatch(setTogleSpeciallModalBox(!toggleModal));
        let speciallCollectionCopy = [...speciallCollection];
        dispatch(setOrerSpeciallCollection([...prototipespeciallCollection, speciallCollectionCopy]));
    }
    
    return ( 
        <button onClick={toggleModall}><h4>Show order</h4></button>
    );
}

export default OrderButton;