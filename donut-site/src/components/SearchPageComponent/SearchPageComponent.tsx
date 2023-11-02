import './SearchPageComponent.scss';
import { useSelector } from 'react-redux';
import { useQuery, UseQueryResult } from 'react-query';
import SearchCardFind from './SearchCardFind';
import { collection, getDocs, DocumentData, CollectionReference } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { RootState } from '../../redux/RootReducer';

interface Props {
  searchRequest: string;
}

function SearchPageComponent({ searchRequest }: Props) {
  let listDataNemas = useSelector((state: RootState) => state.getcollection.collectionslistNames);

  const { data: collectionData }: UseQueryResult<string[], unknown> = useQuery(['searchData', listDataNemas], fetchData);

  async function fetchData(): Promise<string[]> {
    const captersNames: string[] = [];

    try {
      for (const collectionName of listDataNemas) {
        const collectionRef: CollectionReference<DocumentData> = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);

        querySnapshot.forEach((doc) => {
            
          const docData: any = doc.data();
          
          captersNames.push(docData); 
        });
      }

      const capters = captersNames.flatMap(obj => Object.values(obj));
      // Фильтрация уникальных значений
      const uniqueCollectionNames = Array.from(new Set(capters));

      return uniqueCollectionNames;
    } catch (error) {
      // Handle any errors that occur during data retrieval
      console.error('Error fetching data:', error);
      return [];
    }
  }

  return (
    <div className="find-shop-logik">
      <section className="faind-collections">
        {collectionData
          ?.sort((a, b) => a.localeCompare(b))
          .map((item, index) => (
            <SearchCardFind key={index} collectionName={item} searchRequest={searchRequest} />
          ))}
      </section>
    </div>
  );
}

export default SearchPageComponent;