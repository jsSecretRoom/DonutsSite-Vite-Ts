import './CardLine.scss';
import { useSelector } from 'react-redux';

import moreIco from '../../assets/ico/Sign_in.svg';
import lessIco from '../../assets/ico/Sign_out.svg';

import ButtonImg from '../../assets/ico/microFeachButton.svg';

function CardLine() {

    const busketArray = useSelector((state) => state.togllebutton.pushToBasket);
    

    return (
        <>
            {busketArray.length > 0 ? (
                busketArray.map((item, id) => (
                    <div key={id} className='bay-line-info'>
                        <div className='product-main-continer'>
                            <div className='guds-img'>
                                <img src={item.foto} alt="" />
                            </div>
                            <div className='guds-info'>
                                <p>{item.name}</p>
                            </div>
                            <div className='dell-feach'>
                                <button><img src={ButtonImg} alt="ButtonImg" /></button>
                                
                            </div>
                        </div>
                        <div className='feaces-product'>
                            <div className='special-services'>
                                <p>Ficha...</p></div>
                            <div className='guds-counter'>
                                <button className='less'><img src={lessIco} alt="" /></button>
                                <div className='counter'>
                                    <p>2</p>
                                </div>
                                <button className='more'><img src={moreIco} alt="" /></button>
                            </div>
                            <div className='guds-line-price'>
                                <p className='start-price'>{item.realPrice}</p> 
                                <p className='discount-price'>{item.diskountPrice}</p>
                            </div>
                        </div>
                        
                    </div>
                ))
            ) : (
            <p>Корзина пуста</p>
            )}
        
        </>
    );
}

export default CardLine;