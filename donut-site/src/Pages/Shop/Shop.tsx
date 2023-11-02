import './Shop.scss';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setListCollectionsnames, setNameCollections } from '../../redux/Actions/CollectionActions';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import CollectionChapter from '../../components/CollectionChapter/CollectionChapter';
import {
  collection,
  getDocs,
  DocumentData,
  CollectionReference,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import SpinerLoader from '../../components/SpinerLoader/SpinerLoader';

function Shop() {
    const dispatch = useDispatch();
    const { filterName }: { filterName?: string } = useParams();
    
    const listDataLink = 'CategoriesListNavigation';

    const { data: dataListNames, isLoading: isLoadingListNames, isError: isErrorListNames } = useQuery(listDataLink, fetchDataListName);

    async function fetchDataListName(): Promise<string[]> {
        const listNames: string[] = [];
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, listDataLink) as CollectionReference<DocumentData>);

        querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
            const data: DocumentData = doc.data();

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const collectionData = data[key];
                    listNames.push(collectionData as string);
                }
            }
        });

        const filteredAndSortedDataListNames = listNames.sort((a, b) => a.localeCompare(b));

        dispatch(setListCollectionsnames(filteredAndSortedDataListNames));

        return filteredAndSortedDataListNames;
    }

    const { data: nameCollectionsData, isLoading: isLoadingNameCollections, isError: isErrorNameCollections } = useQuery(filterName!, fetchData);

    async function fetchData(): Promise<string[]> {
        const nameCollectionsData: string[] = [];
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, filterName!) as CollectionReference<DocumentData>);

        querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
            const data: DocumentData = doc.data();

            for (let i = 1; data['collection' + i]; i++) {
                const collectionData = data['collection' + i];
                nameCollectionsData.push(collectionData as string);
            }
        });
        
        dispatch(setNameCollections(nameCollectionsData));

        return nameCollectionsData;
    }

    if (isLoadingListNames) {
        return <SpinerLoader style={{ backgroundColor: 'rgba(255, 192, 203, 0)', height: '100vh', position: 'fixed' }} />;
    }

    if (isErrorListNames || !dataListNames) {
        return <p>Ошибка при загрузке данных</p>;
    }

    if (isLoadingNameCollections) {
        return <SpinerLoader style={{ backgroundColor: 'rgba(255, 192, 203, 0)', height: '100vh', position: 'static' }} />;
    }

    if (isErrorNameCollections || !nameCollectionsData) {
        return <p>Ошибка при загрузке данных</p>;
    }

    return (
        <main className='shop-main'>
            <div className='shop-page'>
                <Sidebar />
                <CollectionChapter />
            </div>
        </main>
    );
}

export default Shop;