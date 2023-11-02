import './Search.scss';


import { useDispatch, useSelector } from 'react-redux';
import { setGlobalSearchRequest } from '../../redux/Actions/StringActions';

import Donutimg from '../../assets/donut.svg';

import { RootState } from '../../redux/RootReducer'; 

function Search() {

    const dispatch = useDispatch();

    let searchRequest = useSelector((state: RootState) => state.getstring.globalSearchRequest);

    const handleSearch = (e: any) => {
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