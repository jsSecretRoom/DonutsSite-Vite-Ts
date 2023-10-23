import './Shop.scss';
import { Outlet } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setNameCollections, setListCollectionsnames } from '../../redux/Actions';
import { useParams } from 'react-router-dom';

import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import SpinerLoader from '../../components/SpinerLoader/SpinerLoader';

function Shop() {
    const dispatch = useDispatch();
    const { filterName } = useParams();
    const listDataLink = 'CategoriesListNavigation';

    // Для первого запроса
    const { data: dataListNames, isLoading: isLoadingListNames, isError: isErrorListNames } = useQuery(listDataLink, fetchDataListName);

    // Функция для получения списка категорий
    async function fetchDataListName() {
        const listNames = [];
        const querySnapshot = await getDocs(collection(db, listDataLink));

        querySnapshot.forEach((doc) => {
            const data: DocumentData = doc.data();

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const collectionData = data[key];
                    listNames.push(collectionData);
                }
            }
        });

        // Фильтрация и сортировка массива listNames перед отправкой
        const filteredAndSortedDataListNames = listNames
        .filter((item) => 'Sweets')                                       //тут реба щось!!!!
        .sort((a, b) => a.localeCompare(b));

        dispatch(setListCollectionsnames(filteredAndSortedDataListNames));
        
        return filteredAndSortedDataListNames;
    }

    // Для второго запроса
    const { data: nameCollectionsData, isLoading: isLoadingNameCollections, isError: isErrorNameCollections } = useQuery(filterName, fetchData);

    // Функция для получения данных для выбранной категории
    async function fetchData() {
        const nameCollectionsData = [];
        const querySnapshot = await getDocs(collection(db, filterName)); 

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

    if (isLoadingListNames) {
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

    if (isErrorListNames || !dataListNames) {
        return <p>Ошибка при загрузке данных</p>;
    }

    if (isLoadingNameCollections) {
        return (
            <SpinerLoader
              style={{
                backgroundColor: 'rgba(255, 192, 203, 0)',
                height: '100vh',
                position: 'static',
              }}
            />
        );
    }

    if (isErrorNameCollections || !nameCollectionsData) {
        return <p>Ошибка при загрузке данных</p>;
    }

    return (
        <main className='shop-main'>
            <div className='shop-page'>
                <Outlet/>
            </div>
        </main>
    );
}

export default Shop;