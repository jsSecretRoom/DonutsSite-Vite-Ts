import './Search.scss';


import { useDispatch, useSelector } from 'react-redux';
import { setGlobalSearchRequest } from '../../redux/Actions';

import Donutimg from '../../assets/donut.svg';


function Search() {

    const dispatch = useDispatch();

    let searchRequest = useSelector((state) => state.globalStates.globalSearchRequest);
    
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        dispatch(setGlobalSearchRequest(searchValue));
    };

    return (
        <section className='search'>
        <div className='search-conteiner'>
            <div className='search-input'>
            <input type="search" name="search" id="search" placeholder='chocolate, gift, festive' onChange={handleSearch} value={searchRequest} />
            <img className='donut-img' src={Donutimg} alt="Donutimg" />
            </div>
        </div>
        </section>
    );
}
    
export default Search;