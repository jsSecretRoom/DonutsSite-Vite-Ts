import './CollectionChapter.scss';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';
import Card from './Card';



function CollectionChapter() {
    const { data: nameCollections, isLoading, isError } = useQuery('nameCollections', fetchData);

    interface Collection {
        id: string;
        name: string;
        // Добавьте другие поля коллекции здесь
    }

    async function fetchData(): Promise<Collection[]> {
        const nameCollections: Collection[] = [];
        const querySnapshot = await getDocs(collection(db, 'nameCollections'));
    
        querySnapshot.forEach((doc) => {
            const data: DocumentData = doc.data();
            
            for (let i = 1; data['collection' + i]; i++) {
                const collectionData = data['collection' + i];
                const collection: Collection = {
                    id: i.toString(), // или какой-то другой способ получения ID
                    name: collectionData,
                };
                nameCollections.push(collection);
            }
        });
    
        return nameCollections;
    }

    // Проверка наличия данных и обработка случая, когда nameCollections равно undefined
    if (isLoading) {
        // Пока данные загружаются
        return <p>Loading...</p>;
    }

    if (isError || !nameCollections) {
        // Если произошла ошибка при загрузке данных или данные не определены
        return <p>Error loading data</p>;
    }

    return (
        <section className='collections'>
            {nameCollections.map((collection, index) => (
                <div className='chapter' key={index}>
                    <h2>{collection.name}</h2>
                    <Card collectionName={collection.name} />
                </div>
            ))}
        </section>
    );
}

export default CollectionChapter;