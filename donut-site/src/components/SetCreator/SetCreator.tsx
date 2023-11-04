import './SetCreator.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/RootReducer';
import { setGloballCount, setGloballTotallPrice } from '../../redux/Actions/NumberActions';
import { setTogleLeedOpenClose } from '../../redux/Actions/BooleanActions';
import { setSpeciallCollection } from '../../redux/Actions/CollectionActions';

import FuterComponent from '../FuterComponent/FuterComponent';

import ProductItemCard from './ProductItemCard';
import OrderButton from '../../ButtonComponents/OrderButton/OrderButton';
import BodyBox from '../../assets/box/backbox.svg';
import LiedBox from '../../assets/box/liedbox.svg';
import BodyBoxTop from '../../assets/box/topbox.svg';
import donutico from '../../assets/donut.svg';

interface MatrixItem {
  donutimg: string;
  isengaged: boolean;
}

function SetCreator() {
  const dispatch = useDispatch();
  const [donutsCount, setDonutsCount] = useState<number>(6);
  const [matrixfraim, setmatrixfraim] = useState<MatrixItem[]>([]);

  let globallcount = useSelector((state: RootState) => state.getnumber.globallCounter);
  let togleLeed = useSelector((state: RootState) => state.getboolean.togleLeedOpenClose);
  let globallTotallPrice = useSelector((state: RootState) => state.getnumber.globalBoxTotalPrice);
  

  const createMatrix = () => {
    const newMatrix: MatrixItem[] = [];
    for (let i = 1; i <= donutsCount; i++) {
      newMatrix.push({ donutimg: donutico, isengaged: false });
    }
    setmatrixfraim(newMatrix);
  };

  useEffect(() => {
    createMatrix();
  }, [donutsCount]);

  useEffect(() => {
    dispatch(setGloballTotallPrice(0));
    dispatch(setGloballCount(0));
    dispatch(setTogleLeedOpenClose(false));
    dispatch(setSpeciallCollection([]));
  }, []);

  useEffect(() => {
    if (globallcount === donutsCount) {
      dispatch(setTogleLeedOpenClose(true));
    } else {
      dispatch(setTogleLeedOpenClose(false));
    }
  }, [globallcount]);

  const changeDonutsCount = (count: number) => {
    setDonutsCount(count);
  };

  return (
    <>
      <main className='product-creator-main'>
        <section className='product-line'>
          <div className='box-sizwe'>
            <button onClick={() => changeDonutsCount(6)}>2x3(6)</button>
            <button onClick={() => changeDonutsCount(12)}>3x4(12)</button>
            <button onClick={() => changeDonutsCount(16)}>4x4(16)</button>
            <button onClick={() => changeDonutsCount(20)}>5x4(20)</button>
          </div>
          <div className='product-container'>
            <ProductItemCard matrixfraim={matrixfraim} setmatrixfraim={setmatrixfraim} donutsCount={donutsCount} />
          </div>
        </section>
        <section className="donuts-box">
          <div className='box-conteinr'>
            <div className="main-box">
              <div className='box'>
                <img className='BodyBox' src={BodyBox} alt="BodyBox" />
                <img className='BodyBoxTop' src={BodyBoxTop} alt="LiedBox" />
              </div>
            </div>
            <div className="slots">
              {matrixfraim.map((item, index) => (
                <div className='marix-item' key={index}>
                  <img src={item.donutimg} alt="item" />
                </div>
              ))}
            </div>
            <div className="cap-box">
              <div className={`Lied ${togleLeed ? 'activ' : ''}`}>
                <div className='bakc-lied'></div>
                <img src={LiedBox} alt="LiedBox" />
                <div className='order-button'>
                  <OrderButton />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='total-price-conteiner'>
          <div className='price'>
            <p>Totall:</p>
            <p>{globallTotallPrice}</p>
          </div>
        </section>
        
      </main>
      <FuterComponent/>
    </>
    
  );
}

export default SetCreator;