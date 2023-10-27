import './OrderButton.scss';

import { useSelector, useDispatch  } from 'react-redux';
import { setTogleSpeciallModalBox, setOrerSpeciallCollection } from '../../redux/Actions';


function OrderButton() {
    const dispatch = useDispatch();
  
    const toggleModal = useSelector((state) => state.togllebutton.togleSpeciallModalBox);
    const speciallCollection = useSelector((state) => state.getcollection.speciallCollectionBox);
  
    const toggleModall = () => {
      dispatch(setTogleSpeciallModalBox(!toggleModal));
  
      // Получаем текущие данные из localStorage
      const savedData = localStorage.getItem('speciallCollectionOrer');
      let specialProducts = [];
  
      if (savedData) {
        specialProducts = JSON.parse(savedData);
      }
  
      // Проверяем, что speciallCollection не пуст и существует
      if (speciallCollection && speciallCollection.length > 0) {
        // Добавляем speciallCollection в общий массив
        specialProducts.push(speciallCollection);
        // Сохраняем обновленный массив в localStorage
        localStorage.setItem('speciallCollectionOrer', JSON.stringify(specialProducts));
      }
    }
  
    return (
      <button onClick={toggleModall}><h4>Show order</h4></button>
    );
  }
  
  export default OrderButton;