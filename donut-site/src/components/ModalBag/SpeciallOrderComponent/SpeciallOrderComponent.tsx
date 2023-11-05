import './SpeciallOrderComponent.scss';
import SpecialCard from './SpecialCard/SpecialCard';
import SpecialOrderTotalPrice from './SpecialOrderTotalPrice/SpecialOrderTotalPrice';
import {useState} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { setSpeciallCollectionFindTotall } from '../../../redux/Actions/CollectionActions';
import { RootState } from '../../../redux/RootReducer';


function SpeciallOrderComponent() {
  const dispatch = useDispatch()
    let savedData = localStorage.getItem('speciallCollectionOrer');
    let specialproducts = JSON.parse(savedData || '""') || [];
    let [personspecialbox, setpersonspecialbox] = useState<any[]>(specialproducts);

    let specialTotal: any[] = useSelector((state: RootState) => state.getcollection.specialCollectionTotallPrice);

    
    const dellSpeciallOrder = (subIndex: number) => {
      const updatedSpecialProducts = [...personspecialbox];
      updatedSpecialProducts.splice(subIndex, 1);
      localStorage.setItem('speciallCollectionOrer', JSON.stringify(updatedSpecialProducts));
      setpersonspecialbox(updatedSpecialProducts);

      const updatedSpecialTotal = specialTotal.filter((_item, index) => index !== subIndex);
      dispatch(setSpeciallCollectionFindTotall(updatedSpecialTotal));
    };
  
    return (
      <div className='speciall-product-list'>
        {personspecialbox.map((subArray, subIndex: number) => (
          <div key={subIndex} className='product-item'>
            <div className='special-order-products'>
              <SpecialCard subArray={subArray} />
            </div>
            <div className='dell'>
              <button onClick={() => dellSpeciallOrder(subIndex)}>Delete</button>
            </div>
            <SpecialOrderTotalPrice subArray={subArray} personspecialbox={personspecialbox} subIndex={subIndex} />
          </div>
        ))}
      </div>
    );
  }
  
  export default SpeciallOrderComponent;