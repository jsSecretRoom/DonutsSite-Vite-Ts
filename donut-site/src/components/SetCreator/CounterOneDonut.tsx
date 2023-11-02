import './ProductItemCard';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setGloballTotallPrice, setGloballCount} from '../../redux/Actions/NumberActions';
import { setSpeciallCollection } from '../../redux/Actions/CollectionActions';

import donutico from '../../assets/donut.svg';
import moreIco from '../../assets/ico/Sign_in.svg';
import lessIco from '../../assets/ico/Sign_out.svg';

interface DonutItem {
    oneimg: string;
    price: number;
    info: string;
    id: number; 
}

interface CounterOneDonutProps {
    matrixfraim: any[];
    setmatrixfraim: React.Dispatch<React.SetStateAction<any[]>>;
    item: DonutItem;
    donutsCount: number; 
}

import { RootState } from '../../redux/RootReducer';

function CounterOneDonut({ matrixfraim, setmatrixfraim, item, donutsCount }: CounterOneDonutProps) {
    const dispatch = useDispatch();
    const [prevDonutsCount, setPrevDonutsCount] = useState(donutsCount);
    const [count, setCount] = useState(0);
    const [addtobasket, setaddtobasket] = useState(false);

    const maxmatrixlength = matrixfraim.length;

    const globallcount: number = useSelector((state: RootState) => state.getnumber.globallCounter);
    const globallTotallPrice: number = useSelector((state: RootState) => state.getnumber.globalBoxTotalPrice);
    const speciallPrice: any[] = useSelector((state: RootState) => state.getcollection.speciallCollectionBox);
    
    useEffect(() => {
        if (donutsCount !== prevDonutsCount) {
            setCount(0);
            dispatch(setGloballCount(0));
            dispatch(setGloballTotallPrice(0));
        }
        setPrevDonutsCount(donutsCount);
    }, [donutsCount, prevDonutsCount]);

    useEffect(() => {

        if (count > 0) {
            setaddtobasket(true);
        } else {
            setaddtobasket(false);
        }
    }, [count])

    useEffect(() => {

        let updatedData = [];

        let specialItem = {
            specialid: item.id,
            specialcount: count,
            basketitem: item
        };

        if (addtobasket) {
            updatedData = [...speciallPrice, specialItem]
        } else {
            updatedData = speciallPrice.filter((myitem) => myitem.specialid !== item.id);
        }

        dispatch(setSpeciallCollection(updatedData));

    }, [addtobasket])

    useEffect(() => {
        const updatedData = speciallPrice.map((element) => {
            if (element.specialid === item.id) {
                // Если найден элемент с нужным specialid, обновляем specialcount
                return {
                    ...element,
                    specialcount: count,
                };
            }
            return element;
        });

        dispatch(setSpeciallCollection(updatedData));
    }, [count]);

    const remuveToBox = () => {
        const updatedMatrixfraim = [...matrixfraim];
        const indexToChange = updatedMatrixfraim.findIndex(matrixItem => matrixItem.donutimg === item.oneimg);
        if (indexToChange !== -1) {
            updatedMatrixfraim[indexToChange] = { donutimg: donutico, isengaged: false };
            setmatrixfraim(updatedMatrixfraim);
            if (count > 0) {
                setCount(count - 1);
                dispatch(setGloballCount(globallcount - 1));
                dispatch(setGloballTotallPrice(globallTotallPrice - item.price));
            }
        }
    }

    const addToBox = () => {
        if (count < maxmatrixlength && globallcount < maxmatrixlength) {
            let updatedMatrixfraim = [...matrixfraim];
            let indexOfFreeCell = -1;

            if (!matrixfraim[globallcount].isengaged) {
                updatedMatrixfraim[globallcount] = { donutimg: item.oneimg, isengaged: true };
                setmatrixfraim(updatedMatrixfraim);
                setCount(count + 1);
                dispatch(setGloballCount(globallcount + 1));
                dispatch(setGloballTotallPrice(globallTotallPrice + item.price));
            } else {
                // Ищем первую свободную клетку
                for (let i = 0; i < matrixfraim.length; i++) {
                    if (!matrixfraim[i].isengaged) {
                        indexOfFreeCell = i;
                        break;
                    }
                }

                if (indexOfFreeCell !== -1) {
                    updatedMatrixfraim[indexOfFreeCell] = { donutimg: item.oneimg, isengaged: true };
                    setmatrixfraim(updatedMatrixfraim);
                    setCount(count + 1);
                    dispatch(setGloballCount(globallcount + 1));
                    dispatch(setGloballTotallPrice(globallTotallPrice + item.price));
                }
            }
        }
    }
    return (
        <div className='counter-one-donut'>
            <div className='guds-counter'>
                <button className='less' onClick={remuveToBox}>
                    <img src={lessIco} alt="lessIco" />
                </button>
                <div className='counter'>
                    <p>{count}</p>
                </div>
                <button className='more' onClick={addToBox}>
                    <img src={moreIco} alt="moreIco" />
                </button>
            </div>
        </div>
    );
}

export default CounterOneDonut;