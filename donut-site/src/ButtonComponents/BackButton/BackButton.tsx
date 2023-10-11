import './BackButton.scss';

import { useNavigate } from 'react-router-dom';


function BackButton() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return ( 
        <div className='back'>
            <button onClick={goBack}>Back</button>
        </div>
    );
}

export default BackButton;