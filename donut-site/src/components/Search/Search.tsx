import './Search.scss';
import Menu from '../../assets/Menu.svg';
import ShopButton from '../../ButtonComponents/ShopButton/ShopButton';
import Donutimg from '../../assets/donut.svg';

function Search() {
    return ( 
        <section className='search'>
            <div className='search-conteiner'>
                <button className='side-bur-button'>
                    <img src={Menu} alt="Menu" />
                </button>
                <ShopButton/>
                <div className='search-input'>
                    <input type="search" name="search" id="search" placeholder='chocolate, gift, festive'/>
                    <img className='donut-img' src={Donutimg} alt="Donutimg" />
                </div>

            </div>
        </section>
    );
}

export default Search;