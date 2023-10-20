import { useDispatch, useSelector } from "react-redux";

import { setModallOrderSucces } from "../../redux/Actions";

function SubmitOrderButton() {
    const dispatch = useDispatch();

    const toggleModal = useSelector((state) => state.togllebutton.toglSuccesOrder);

    const toggleModalState = (event) => {
        event.preventDefault();
        dispatch(setModallOrderSucces(!toggleModal));
    };
    return ( 
        <button onClick={toggleModalState} type="submit">Order</button>
    );
}

export default SubmitOrderButton;