import './Card.scss';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';

import Star from '../../assets/Star_light.svg';

interface CollectionData {
    name: string;
    foto: string;
    diskountPrice: number;
    realPrice: number;
    diskountIndicator: string;
    // Добавьте другие поля, если они есть в вашей коллекции
}


function Card({ collectionName }: { collectionName: string  }) {
    const { data: collectionData, isLoading, isError } = useQuery(['collectionData', collectionName], fetchData);
    
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

    return (
        <>
            {collectionData.map((item, index) => (
                <div className='card' key={index}>
                    <div className='image'>
                        <img src={item.foto} alt="" />
                    </div>
                    <div className='description'>
                        <p>{item.name}</p>
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
        </>
    );
}

export default Card;