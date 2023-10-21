import './ProductItemCard.scss';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import CounterOneDonut from './CounterOneDonut';


function ProductItemCard({matrixfraim, setmatrixfraim}) {

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
        return <div>error</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
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
                        <img src={item.oneimg} alt="oneimg" />
                        <div className='price'>
                            <p>price: {item.price}</p>
                        </div>
                    </div>
    
                    <CounterOneDonut matrixfraim={matrixfraim} setmatrixfraim={setmatrixfraim} item={item} />
                    
                </div>
            ))}
            
            <div className='card-loader'>
                <button onClick={loadMore}>load more</button>
            </div>
        </>
        
    );
}

export default ProductItemCard;