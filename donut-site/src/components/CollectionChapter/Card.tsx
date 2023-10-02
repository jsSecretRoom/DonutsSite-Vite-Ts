import './Card.scss';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';

import Star from '../../assets/Star_light.svg';

interface CollectionData {
    name: string;
    foto: string;
    discountPrice: number;
    realPrice: number;
    discountIndicator: string;
    // Добавьте другие поля, если они есть в вашей коллекции
}

interface CardProps {
    collectionName: string;
}

function Card({ collectionName }: CardProps) {
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

    if (!collectionData || !collectionData[0]) {
        return <div>error</div>;
    }

    const firstItem = collectionData[0]; // Возьмем первый элемент массива

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <div className='products'>
            <div className='product-container'>
                <div className='card'>
                    <div className='image'>
                        <img src={firstItem.foto} alt="" />
                    </div>
                    <div className='description'>
                        <p>{firstItem.name}</p>
                        <p>{firstItem.discountIndicator}</p>
                        <div className='logic'>
                            <div className='price'>
                                <p className='discount'>{firstItem.discountPrice}</p>
                                <p className='real-price'>{firstItem.realPrice}</p>
                            </div>
                            <button className='favorite'>
                                <img src={Star} alt="Star" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;