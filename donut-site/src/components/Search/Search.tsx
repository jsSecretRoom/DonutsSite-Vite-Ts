import './Search.scss';
import SideBurButton from '../../ButtonComponents/SideBurButton/SideBurButton';
import ShopButton from '../../ButtonComponents/ShopButton/ShopButton';
import Donutimg from '../../assets/donut.svg';


function Search() {
    return ( 
        <section className='search'>
            <div className='search-conteiner'>
                <div className='button-section'>
                    <SideBurButton/>
                    <ShopButton/>
                </div>
                <div className='search-input'>
                    <input type="search" name="search" id="search" placeholder='chocolate, gift, festive'/>
                    <img className='donut-img' src={Donutimg} alt="Donutimg" />
                </div>

            </div>
        </section>
    );
}

export default Search;