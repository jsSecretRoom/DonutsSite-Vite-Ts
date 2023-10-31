import './SearchPageComponent.scss';

import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';

import SearchCardFind from './SearchCardFind';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';


function SearchPageComponent({searchRequest}) {

    let listDataNemas = useSelector((state) => state.getcollection.collectionslistNames);


    const { data: collectionData } = useQuery(['searchData', listDataNemas], fetchData);
    
    async function fetchData() {
        const captersNames = [];
        
        try {
            for (const collectionName of listDataNemas) {
                const collectionRef = collection(db, collectionName);
                const querySnapshot = await getDocs(collectionRef);

                querySnapshot.forEach((doc) => {
                    // Access data for each document
                    const docData = doc.data();
                    captersNames.push(docData); // Push the document data to the array
                });
            }

            const capters = captersNames.flatMap(obj => Object.values(obj));
            // Фильтрация уникальных значений
            const uniqueCollectionNames = Array.from(new Set(capters));

            return uniqueCollectionNames;
        } catch (error) {
            // Handle any errors that occur during data retrieval
            console.error("Error fetching data:", error);
            return [];
        }
        
    }

    return ( 
        <div className="find-shop-logik">
            <section className='faind-collections'>
                {collectionData?.sort((a, b) => a.localeCompare(b)).map((item, index) => (
                    <SearchCardFind key={index} collectionName={item} searchRequest={searchRequest} />
                ))}
            </section>
        </div>
    );
}

export default SearchPageComponent;