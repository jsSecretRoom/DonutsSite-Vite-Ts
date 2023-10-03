import './CollectionChapter.scss'
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import Card from './Card';
import { setNameCollections } from '../../redux/Actions'
import { NavLink } from 'react-router-dom';
import Categories from '../Categories/Categories';
function CollectionChapter() {

    const dispatch = useDispatch();

    const { data: nameCollections, isLoading: isLoadingNameCollections, isError: isErrorNameCollections } = useQuery('nameCollections', fetchData);

    async function fetchData() {
        const nameCollections: { name: string }[] = [];
        const querySnapshot = await getDocs(collection(db, 'nameCollections'));
    
        querySnapshot.forEach((doc) => {
            const data: DocumentData = doc.data();
    
            for (let i = 1; data['collection' + i]; i++) {
                const collectionData = data['collection' + i];

                nameCollections.push(collectionData);
            }
        });

        dispatch(setNameCollections(nameCollections));

        return nameCollections;
    }

    // Проверка наличия данных и обработка случая, когда nameCollections равно undefined
    if (isLoadingNameCollections) {
        // Пока данные загружаются
        return <p>Loading...</p>;
    }

    if (isErrorNameCollections || !nameCollections) {
        // Если произошла ошибка при загрузке данных или данные не определены
        return <p>Error loading data</p>;
    }
    return (
        <div className='shop-logik'>
            <Categories/>
            <section className='collections'>
                
                {nameCollections.map((item, index) => (
                    <div className='chapter' key={index}>
                        <div className='link'>
                            <NavLink to={`/collection/${item}`} key={index}>
                                {item.toString()}
                            </NavLink>
                        </div>
                        <div className='products'>
                            <div className='product-conteiner' >
                                <Card collectionName={item.toString()}/>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default CollectionChapter;