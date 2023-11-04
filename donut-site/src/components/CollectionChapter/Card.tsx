import './Card.scss';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AddToBasketButton from '../../ButtonComponents/AddToBasketButton/AddToBasketButton';
import IsFavoriteButton from '../../ButtonComponents/IsFavoriteButton/IsFavoriteButton';
import SpinerLoader from '../SpinerLoader/SpinerLoader';

import { ProductList } from '../../redux/TS-STATE';


function Card({ collectionName }: { collectionName: string | undefined } ) {

    const [visibleCards, setVisibleCards] = useState(5); // Initial number of visible cards
    const { data: collectionData, isLoading, isError } = useQuery(['collectionData', collectionName], fetchData);
    const { filterName } = useParams();


    useEffect(() => {
        if (filterName === undefined) {
            setVisibleCards(Infinity); // Show all cards when filterName is undefined
        } else {
            setVisibleCards(5); // Show 5 cards when filterName is defined
        }
    }, [filterName]);

    async function fetchData() {
        if(collectionName){
            const collectionRef = collection(db, collectionName);
            const querySnapshot = await getDocs(collectionRef);
            const data: ProductList[] = [];

            querySnapshot.forEach((doc) => {
                const docData = doc.data() as ProductList;
                data.push(docData);
            });

            return data;
        }else{
            console.log('error in Card');
        }
        
    }

    if (!collectionData) {
        return (
            <SpinerLoader
              style={{
                  backgroundColor: 'rgba(255, 192, 203, 0)',
                  height: '100vh',
                  position: 'fixed',
              }}
            />
        );
    }

    if (isLoading) {
        return (
            <SpinerLoader
              style={{
                  backgroundColor: 'rgba(255, 192, 203, 0)',
                  height: '100vh',
                  position: 'fixed',
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
                <div className='card' key={index}>
                    <div className='image'>
                        <img src={item.foto} alt="itmfoto" />
                        <AddToBasketButton id={item.id} cardToBuy={item}/>
                    </div>
                    <div className='description'>
                        <NavLink to={`/about_product/${collectionName}/${item.id}`}>{item.name}</NavLink>
                        <div className='logic'>
                            <div className='price'>
                                {item.diskountIndicator ? (
                                    <> 
                                        <p className='real-price'>{item.realPrice}</p>
                                        <p className='discount'>{item.diskountPrice}</p> 
                                    </>
                                ) : (
                                    <p className={`real-price ${item.diskountIndicator ? '' : 'deco'}`}>{item.realPrice}</p>
                                )}
                            </div>
                            <IsFavoriteButton id={item.id} cardToBuy={item}/>
                        </div>
                    </div>
                </div>
            ))}
            {filterName !== undefined && visibleCards < collectionData.length && (
                <div className='load-more-button'>
                    <button onClick={loadMore}>
                        Load More
                    </button>
                </div>
            )}
        </>
    );
}

export default Card;