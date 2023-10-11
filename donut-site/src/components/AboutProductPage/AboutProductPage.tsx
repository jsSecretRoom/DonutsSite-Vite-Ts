import './AboutProductPage.scss';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';
import BackButton from '../../ButtonComponents/BackButton/BackButton';
import AddToBasketButton from '../../ButtonComponents/AddToBasketButton/AddToBasketButton';

function AboutProductPage() {
    const { collectionName, itemName } = useParams();

    const { data: collectionData, isLoading, isError } = useQuery(['collectionData', collectionName], fetchData);

    async function fetchData() {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);

        const data = [];

        querySnapshot.forEach((doc) => {

            const docData = doc.data();

            if (docData.id == itemName) {
                data.push(docData);
            }

        });
        console.log(data);

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
    console.log(collectionData);
    return (
        <main className='product-info-main'>
            <BackButton />
            <section className='product'>
                <section className='product-foto'>
                    <img src={collectionData[0].foto} alt={collectionData[0].foto} />
                </section>
                <section className='produt-deskription'>
                    <p>{collectionData[0].name}</p>
                    <div className='info-prise'>
                        
                        <div className='price-group'>
                            <p className='real-price'>{collectionData[0].realPrice}</p>
                            <p className='discount-price'>{collectionData[0].diskountPrice}</p>
                            
                        </div>
                        <AddToBasketButton/>
                    </div>
                </section>

            </section>

        </main>
    );
}

export default AboutProductPage;