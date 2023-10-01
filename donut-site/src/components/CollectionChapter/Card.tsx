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
    const { data: collectionData, isLoading, isError } = useQuery<CollectionData>('collectionData', fetchData);

    async function fetchData() {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);
        const data = querySnapshot.docs[0].data() as CollectionData;

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
        <div className='products'>
            <div className='product-container'>
                <div className='card'>
                    <div className='image'>
                        <img src={collectionData.foto} alt="" />
                    </div>
                    <div className='description'>
                        <p>{collectionData.name}</p>
                        <p>Discount Price: {collectionData.discountPrice}</p>
                        <p>Real Price: {collectionData.realPrice}</p>
                        <p>Discount Indicator: {collectionData.discountIndicator}</p>
                        <div className='logic'>
                            <div className='price'>
                                <p className='discount'>1111</p>
                                <p className='real-price'>2222</p>
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