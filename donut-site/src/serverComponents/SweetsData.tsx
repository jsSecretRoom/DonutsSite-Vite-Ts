import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setNameCollections } from '../redux/Actions';
import CollectionChapter from '../components/CollectionChapter/CollectionChapter';
import { useParams } from 'react-router-dom';

function SweetsData() {
    const dispatch = useDispatch();
    const { filterName } = useParams();

    let data = null;
    let isLoading = false;
    let isError = false;
    
    const queryNames = {
        'Sweets': 'Sweets',
        'Convenience products': 'Convenience products',
        'Alcoholic Drinks': 'Alcoholic Drinks',
        'Cocktails': 'Cocktails',
        'Сandies': 'Сandies',
        'Bakery': 'Bakery',
    };

    const queryName = queryNames[filterName];

    if (queryName) {
        ({ data, isLoading, isError } = useQuery(queryName, fetchData));
    }

    async function fetchData() {
        const nameCollectionsData: { name: string }[] = [];
        const querySnapshot = await getDocs(collection(db, queryName));

        querySnapshot.forEach((doc) => {
            const data: DocumentData = doc.data();

            for (let i = 1; data['collection' + i]; i++) {
                const collectionData = data['collection' + i];

                nameCollectionsData.push(collectionData);
            }
        });

        dispatch(setNameCollections(nameCollectionsData));

        return nameCollectionsData;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError || !data) {
        return <p>Error loading data</p>;
    }
    
    return (
        <CollectionChapter dataprop={data}/>
    );

}

export default SweetsData;