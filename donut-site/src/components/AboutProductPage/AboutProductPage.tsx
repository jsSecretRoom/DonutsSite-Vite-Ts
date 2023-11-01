import './AboutProductPage.scss';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';
import SpinerLoader from '../SpinerLoader/SpinerLoader';
import BackButton from '../../ButtonComponents/BackButton/BackButton';
import AddToBasketButton from '../../ButtonComponents/AddToBasketButton/AddToBasketButton';


function AboutProductPage() {
    const { collectionName, itemName } = useParams();

    const { data: collectionData, isLoading, isError } = useQuery(['collectionData', collectionName], fetchData);

    async function fetchData() {
        if(collectionName){
            const collectionRef = collection(db, collectionName);
            const querySnapshot = await getDocs(collectionRef);
    
            const data: any = [];
    
            querySnapshot.forEach((doc) => {
    
                const docData = doc.data();
    
                if (docData.id == itemName) {
                    data.push(docData);
                }
    
            });
            
    
            return data;
        }else{
            return console.error("error  in About Product");
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
                            {collectionData[0].diskountIndicator ? <p className='discount-price'>{collectionData[0].diskountPrice}</p> : <p></p>}
                            
                        </div>
                        <AddToBasketButton id={collectionData[0].id} cardToBuy={collectionData[0]}/>
                    </div>
                </section>

            </section>

        </main>
    );
}

export default AboutProductPage;