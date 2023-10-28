import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { setModallBag, setGloballSpecialPrice } from '../../redux/Actions';

function CreateOrderButton({ totalReal, busketArray, productCount }) {

    const dispatch = useDispatch();
    let toglmodal = useSelector((state) => state.togllebutton.togleBagModal);

    let gudsArr = [];

    busketArray.map((item, i) => {
        
        return gudsArr.push({
            productName: item.name,
            count: productCount[i],
            photo:  item.foto
        })
    });

    const updateOrder = () => {
        
        const newOrder = {
            total: totalReal,
            orderGuds: gudsArr
        };

        localStorage.setItem('orderData', JSON.stringify(newOrder));
        
        dispatch(setModallBag(!toglmodal));
        dispatch(setGloballSpecialPrice(0));
    };
    
    return ( 
        <button onClick={updateOrder}>Buy</button>
    );
}

export default CreateOrderButton;