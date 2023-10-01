import './AnimationComponent.scss';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import LineComponent from './LineComponent';
import { useQuery } from 'react-query';

function AnimationComponent() {
    const { data: imageGroups = [], isLoading, isError } = useQuery('imageGroups', fetchData);

    async function fetchData() {
        const collectionRef = collection(db, 'mainAnimation');
        try {
            const querySnapshot = await getDocs(collectionRef);

            const images: string[] = [];

            querySnapshot.forEach((doc) => {
                const data: DocumentData = doc.data();

                // Перебираем свойства документа и извлекаем ссылки на изображения
                for (let i = 1; i <= 35; i++) {
                    const link = data['link' + i];

                    if (link) {
                        images.push(link);
                    }
                }
            });

            // Создаем 7 подмассивов и заполняем их
            const imageGroups: string[][] = Array.from({ length: 7 }, (_, groupIndex) => {
                const startIndex = groupIndex * 5;
                const endIndex = startIndex + 5;
                return images.slice(startIndex, endIndex);
            });

            return imageGroups;
        } catch (error) {
            console.log('data-not-found', error);
            throw error;
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <section className='animation'>
            <div className='animation-conteiner'>
                {imageGroups.map((group, index) => (
                    <LineComponent key={index} images={group} />
                ))}
            </div>
        </section>
    );
}

export default AnimationComponent;