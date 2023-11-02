import { collection, DocumentData, QueryDocumentSnapshot, getDocs, CollectionReference } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery, UseQueryResult } from 'react-query';
import { NavLink } from 'react-router-dom';
import AddToBasketButton from '../../ButtonComponents/AddToBasketButton/AddToBasketButton';
import IsFavoriteButton from '../../ButtonComponents/IsFavoriteButton/IsFavoriteButton';
import SpinerLoader from '../SpinerLoader/SpinerLoader';

import { ProductList } from '../../redux/TS-STATE';

function SearchCardFind({ collectionName, searchRequest }: { collectionName: string, searchRequest: string }) {
    const { data: collectionData, isLoading, isError }: UseQueryResult<ProductList[], unknown> = useQuery(['collectionFind', collectionName], fetchData);

    async function fetchData(): Promise<ProductList[]> {
        const collectionRef: CollectionReference<DocumentData> = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);
        const data: ProductList[] = [];

        querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
            const docData = doc.data();
            const item: ProductList = {
                id: parseFloat(doc.id),
                diskountIndicator: docData.diskountIndicator,
                diskountPrice: docData.diskountPrice,
                foto: docData.foto,
                name: docData.name,
                realPrice: docData.realPrice
            };
            data.push(item);
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

    const filteredCollection: ProductList[] = collectionData.filter(item =>
        item.name.toLowerCase().includes(searchRequest.toLowerCase())
    );

    filteredCollection.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

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
                                        {item.diskountPrice && <p className='discount'>{item.diskountPrice}</p>}
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