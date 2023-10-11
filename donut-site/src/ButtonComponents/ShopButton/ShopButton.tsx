import './ShopButton.scss';
import Bag from '../../assets/Bag_fill.svg';

function ShopButton() {
    return ( 
        <button className='shop-button'>
            <img src={Bag} alt="Bag" />
        </button>
    );
}

export default ShopButton;