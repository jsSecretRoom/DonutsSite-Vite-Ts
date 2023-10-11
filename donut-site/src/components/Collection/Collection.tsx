import './Collection.scss';
import { useParams } from 'react-router-dom';
import Card from '../CollectionChapter/Card';
import BackButton from '../../ButtonComponents/BackButton/BackButton';

function Collection() {
    const { collectionName } = useParams();

    return (
        <main>
            <section className='chose-collection'>
                <BackButton />
                <div className='collection-name'>
                    <p>{collectionName}</p>
                </div>
                <div className='card-conteiner'>
                    <Card collectionName={collectionName} />
                </div>
            </section>
        </main>
    );
}

export default Collection;