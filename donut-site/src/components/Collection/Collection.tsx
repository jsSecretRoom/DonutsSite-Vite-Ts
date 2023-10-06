import './Collection.scss';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../CollectionChapter/Card';

function Collection() {
    const { collectionName } = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // This will navigate back to the previous page
    };


    return ( 
        <main>
            <section className='chose-collection'>

                <div className='back'>
                    <button onClick={goBack}>Back</button>
                </div>
                <div className='collection-name'>
                    <p>{collectionName}</p>
                </div>
                <div className='card-conteiner'>
                    <Card collectionName={collectionName}/>
                </div>
            </section>
        </main>
    );
}

export default Collection;