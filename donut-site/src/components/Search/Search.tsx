import './Search.scss';
import Menu from '../../assets/Menu.svg';
import Bag from '../../assets/Bag_fill.svg';

import Donutimg from '../../assets/donut.svg';

function Search() {
    return ( 
        <section className='search'>
            <div className='search-conteiner'>
                <button className='side-bur-button'>
                    <img src={Menu} alt="Menu" />
                </button>
                <button className='shop-button'>
                    <img src={Bag} alt="Bag" />
                </button>
                <div className='search-input'>
                    <input type="search" name="search" id="search" placeholder='chocolate, gift, festive'/>
                    <img className='donut-img' src={Donutimg} alt="Donutimg" />
                </div>

            </div>
        </section>
    );
}

export default Search;