import './AboutProductPage.scss';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useQuery } from 'react-query';

function AboutProductPage() {
    const { collectionName, itemName } = useParams();
    
    const { data: collectionData, isLoading, isError } = useQuery(['collectionData', collectionName], fetchData);

    async function fetchData() {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);

        const data = [];

        querySnapshot.forEach((doc) => {
            
            const docData = doc.data();
            
            if(docData.id === itemName){
                
                console.log(docData);
                data.push(docData);
            }
            
        });

        return data;
    }
    

    if (!collectionData) {
        return <div>error</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }
    
    return ( 
        <main>
            
            <p>Product Info for Collection: {collectionName}, Item Name: {itemName}</p>
        </main>
    );
}

export default AboutProductPage;