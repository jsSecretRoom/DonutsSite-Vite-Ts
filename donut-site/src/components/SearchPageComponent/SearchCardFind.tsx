import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import AddToBasketButton from '../../ButtonComponents/AddToBasketButton/AddToBasketButton';
import IsFavoriteButton from '../../ButtonComponents/IsFavoriteButton/IsFavoriteButton';
import SpinerLoader from '../SpinerLoader/SpinerLoader';
import { useEffect } from 'react';

function SearchCardFind({ collectionName, searchRequest }) {
    const { data: collectionData, isLoading, isError } = useQuery(['collectionFind', collectionName], fetchData);

    async function fetchData() {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);
        const data = [];

        querySnapshot.forEach((doc) => {
            const docData = doc.data();
            data.push(docData);
        });

        return data;
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

    // Фильтрация карточек на основе поискового запроса
    const filteredCollection = collectionData.filter(item =>
        item.name.toLowerCase().includes(searchRequest.toLowerCase())
    );

        
    return (
        <>
            {filteredCollection.map((item, index) => (
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
                                    <p className='real-price'>{item.realPrice}</p>
                                )}
                            </div>
                            <IsFavoriteButton id={item.id} cardToBuy={item}/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default SearchCardFind;
