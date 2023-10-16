import './IsFavoriteButton.scss';
import Star from '../../assets/Star_light.svg';
function IsFavoriteButton() {
    return ( 
        <button className='favorite'>
            <img src={Star} alt="Star" />
        </button>
    );
}

export default IsFavoriteButton;