import './TotalPrice.scss';
import { NavLink } from 'react-router-dom';
import CreateOrderButton from '../../../ButtonComponents/CreateOrderButton/CreateOrderButton';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/RootReducer';
type CartItem = {
    count: number;
    item: {
        diskountIndicator: boolean;
        diskountPrice: number;
        foto: string;
        id: string;
        name: string;
        realPrice: number;
    };
    
};

type BasketItem = {
    diskountIndicator: boolean;
    diskountPrice: number;
    foto: string;
    id: string;
    name: string;
    realPrice: number;
};

function TotalPrice({ busketArray, cartItems }: { busketArray: BasketItem[]; cartItems: CartItem[] }) {
    const specialTotal: any[] = useSelector((state: RootState) => state.getcollection.specialCollectionTotallPrice);
    const [specialTotalres, setSpecialTotalres] = useState(0);
    
    const [totalres, setTotalres] = useState(0);
    
    useEffect(() => {
        if (specialTotal.length > 0) {
            let total: any[] = [];
            specialTotal.forEach((item) => {
                let finalRes = 0;
                let specialCount = item.totalCount;
                let totallSubres = 0;

                item.totalItem.forEach((subitem: any) => {
                    let subcount = subitem.specialcount;
                    totallSubres += subcount * subitem.basketitem.price;

                });
                finalRes = totallSubres * specialCount;
                
                return total.push(finalRes);
            });
            
            let sum = total.reduce((acc, currentValue) => acc + currentValue, 0);
            setSpecialTotalres(sum)
        }else{
            
            setSpecialTotalres(0);
        }
        
    },[specialTotal]);

    const getProductCount = () => {
        const productCount: any = [];
        if (busketArray && cartItems) {
            busketArray.forEach((item) => {
                const cartItem = cartItems.find((cartItem) => cartItem.item.id === item.id);
                if (cartItem && cartItem.count) {
                    productCount.push(cartItem.count);
                }
            });
        }
        return productCount;
    };

    useEffect(() => {
        let total = 0;
        if (busketArray && cartItems) {
            busketArray.forEach((item) => {
                const cartItem = cartItems.find((cartItem) => cartItem.item.id === item.id);

                if (cartItem && cartItem.count) {
                    total += item.diskountIndicator ? cartItem.count * item.diskountPrice : cartItem.count * item.realPrice;
                }
            });
        }

        setTotalres(total);
    }, [busketArray, cartItems]);

    const productCount = getProductCount();

    return (
        <div className='bady-sum'>
            <h3 className='total'>{specialTotalres + totalres}</h3>

            <NavLink to='/checkout'>
                <CreateOrderButton totalReal={specialTotalres + totalres} busketArray={busketArray} productCount={productCount} />
            </NavLink>
        </div>
    );
}

export default TotalPrice;
