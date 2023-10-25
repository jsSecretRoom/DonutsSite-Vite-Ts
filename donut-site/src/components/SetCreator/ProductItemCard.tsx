import './ProductItemCard.scss';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import CounterOneDonut from './CounterOneDonut';
import SpinerLoader from '../SpinerLoader/SpinerLoader';

function ProductItemCard({matrixfraim, setmatrixfraim, donutsCount}) {

    const [visibleCards, setVisibleCards] = useState(5);

    const collectionName = 'onedonutscard';

    const { data: collectionData, isLoading, isError } = useQuery(['donutCardOnly', collectionName], fetchData);

    useEffect(() => {
        if (visibleCards === undefined) {
            setVisibleCards(Infinity); 
        } else {
            setVisibleCards(5); 
        }
    }, [setVisibleCards]);


    async function fetchData() {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);
        const data: CollectionData[] = [];

        querySnapshot.forEach((doc) => {
            const docData = doc.data() as CollectionData;
            data.push(docData);
        });

        return data;
    }

    if (!collectionData) {
        return (
            <SpinerLoader
              style={{
                  backgroundColor: 'rgba(255, 192, 203, 0)',
                  height: '100%',
                  position: 'static',
              }}
            />
        );
    }

    if (isLoading) {
        return (
            <SpinerLoader
              style={{
                  backgroundColor: 'rgba(255, 192, 203, 0)',
                  height: '100%',
                  position: 'static',
              }}
            />
        );
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    const loadMore = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
    };
    
    return ( 
        <>
            {collectionData.slice(0, visibleCards).map((item, index) => (
                <div className='product-item' key={index}>
                    <div className='product-item-img'>
                        <div className='donut-img'>
                            <img src={item.oneimg} alt="oneimg" />
                            
                            <div className='one-donut-info'>
                                <div className='info-conteiner'>
                                    <p>{item.info}</p>
                                </div>
                            </div>

                        </div>
                        <div className='price'>
                            <p>price: {item.price}</p>
                        </div>

                    </div>
    
                    <CounterOneDonut matrixfraim={matrixfraim} setmatrixfraim={setmatrixfraim} item={item} donutsCount={donutsCount}/>

                </div>
                
            ))}
            
            <div className='card-loader'>
                <button onClick={loadMore}>load more</button>
            </div>
        </>
        
    );
}

export default ProductItemCard;