import './SetCreator.scss';

import { useState, useEffect } from 'react';

import ProductItemCard from './ProductItemCard';

import BodyBox from '../../assets/box/backbox.svg'
import LiedBox from '../../assets/box/liedbox.svg'
import BodyBoxTop from '../../assets/box/topbox.svg'
import donutico from '../../assets/donut.svg';

function SetCreator() {
    let [donutsCount, setDonutsCount] = useState(6);
    let [matrixfraim, setmatrixfraim] = useState([]);

    const createMatrix = () => {
        let newMatrix = [];
        for (let i = 1; i <= donutsCount; i++) {
            newMatrix.push({ donutimg: donutico, isengaged: false });
        }
        setmatrixfraim(newMatrix);
    };

    useEffect(() => {
        createMatrix();
    }, [donutsCount]);

    let changeDonutsCount = (count) => {
        setDonutsCount(count);
    }

    return (
        <main className='product-creator-main'>
            <section className='priduct-line'>
                <div className='box-sizwe'>
                    <button onClick={() => changeDonutsCount(6)}>2x3(6)</button>
                    <button onClick={() => changeDonutsCount(12)}>3x4(12)</button>
                    <button onClick={() => changeDonutsCount(16)}>4x4(16)</button>
                    <button onClick={() => changeDonutsCount(20)}>5x4(20)</button>
                </div>
                <div className='product-container'>
                    <ProductItemCard matrixfraim={matrixfraim} setmatrixfraim={setmatrixfraim}/>
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
                                <img src={item.donutimg} alt="item"/>
                            </div>
                        ))}
                    </div>
                    <div className="cap-box">
                        <div className='Lied'>
                            <div className='bakc-lied'>
                            
                            </div>
                            <img src={LiedBox} alt="LiedBox" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SetCreator;