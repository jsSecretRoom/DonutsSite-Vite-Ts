import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/RootReducer';

import { setModallBag } from '../../redux/Actions/BooleanActions';
import { setGloballSpecialPrice } from '../../redux/Actions/NumberActions';

interface Product {
    name: string;
    foto: string;
}

interface OrderItem {
    productName: string;
    count: number;
    photo: string;
}

function CreateOrderButton({ totalReal, busketArray, productCount }: { totalReal: number, busketArray: Product[], productCount: number[] }) {
    const dispatch = useDispatch();
    const toglmodal = useSelector((state: RootState) => state.getboolean.togleBagModal);
    const gudsArr: OrderItem[] = [];

    busketArray.forEach((item, i) => {
        gudsArr.push({
            productName: item.name,
            count: productCount[i],
            photo: item.foto
        });
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