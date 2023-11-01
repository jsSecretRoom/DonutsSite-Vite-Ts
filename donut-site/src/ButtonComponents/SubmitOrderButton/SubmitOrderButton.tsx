import { useDispatch, useSelector } from "react-redux";

import { setModallOrderSucces } from "../../redux/Actions/BooleanActions";

import { RootState } from "../../redux/RootReducer";

function SubmitOrderButton() {
    const dispatch = useDispatch();

    const toggleModal: boolean = useSelector((state: RootState) => state.getboolean.toglSuccesOrder);

    const toggleModalState = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        dispatch(setModallOrderSucces(!toggleModal));
    };

    return (
        <button onClick={toggleModalState} type="submit">Order</button>
    );
}

export default SubmitOrderButton;