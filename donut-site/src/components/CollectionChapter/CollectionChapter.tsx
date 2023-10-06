import './CollectionChapter.scss'

import { useRef } from 'react';
import Card from './Card';
import { NavLink } from 'react-router-dom';
import Categories from '../Categories/Categories';

import SignLeft from '../../assets/SignLeft.svg'
import SignRight from '../../assets/SignRight.svg'

function CollectionChapter({ dataprop }) {

    const containerRefs = useRef([]);

    function scrollLeft(index) {
        const container = containerRefs.current[index];
        container.scrollLeft -= 320;
    }

    function scrollRight(index) {
        const container = containerRefs.current[index];
        container.scrollLeft += 320;
    }

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
                            <div
                                className='product-conteiner' // Змінено з 'product-container' на 'product-conteiner'
                                ref={(ref) => (containerRefs.current[index] = ref)}
                            >
                                <Card collectionName={item.toString()} />
                            </div>
                            <div className='buttons-scroll'>
                                <div className='left-scroll' onClick={() => scrollLeft(index)}>
                                    <img src={SignLeft} alt="SignLeft" />
                                </div>
                                <div className='right-scroll' onClick={() => scrollRight(index)}>
                                    <img src={SignRight} alt="SignRight" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </section>
        </div>
    );
}

export default CollectionChapter;