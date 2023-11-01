
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Categories.scss';

import { RootState } from '../../redux/RootReducer';
function Categories() {
    const collections = useSelector((state: RootState) => state.getcollection.collectionsName);
    return (
        <section className='nav-categories'>
            <div className='categories'>
                {collections.map((collectionName, index) => (
                    <NavLink to={`/collection/${collectionName}`} key={index}>
                        <button><p>{collectionName}</p></button>
                    </NavLink>
                ))}
            </div>
        </section> 
    );
}

export default Categories;