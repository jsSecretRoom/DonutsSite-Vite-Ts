import './Card.scss';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import Star from '../../assets/Star_light.svg';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AddToBasketButton from '../../ButtonComponents/AddToBasketButton/AddToBasketButton';
interface CollectionData {
    name: string;
    id: number
    foto: string;
    diskountPrice: number;
    realPrice: number;
    diskountIndicator: string;
    // Добавьте інші поля, якщо вони є в вашій колекції
}

function Card({ collectionName }: { collectionName: string }) {
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
                <div className='card' key={index}>
                    <div className='image'>
                        <img src={item.foto} alt="itmfoto" />
                        <AddToBasketButton/>
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
                            <button className='favorite'>
                                <img src={Star} alt="Star" />
                            </button>
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