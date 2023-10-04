import './CollectionChapter.scss'

import Card from './Card';
import { NavLink } from 'react-router-dom';
import Categories from '../Categories/Categories';

function CollectionChapter({dataprop}) {
    
    return (
        <div className='shop-logik'>
            <Categories />
            <section className='collections'>

                {dataprop.map((item, index) => (
                    <div className='chapter' key={index}>
                        <div className='link'>
                            <NavLink to={`/collection/${item}`} key={index}>
                                {item.toString()}
                            </NavLink>
                        </div>
                        <div className='products'>
                            <div className='product-conteiner' >
                                <Card collectionName={item.toString()} />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default CollectionChapter;