import './CardLine.scss';
import { useSelector } from 'react-redux';

function CardLine() {

    const busketArray = useSelector((state) => state.togllebutton.pushToBasket);
    // console.log(busketArray);

    return (
        <>
            {busketArray.length > 0 ? (
                busketArray.map((item, id) => (
                    <div key={id} className='bay-line-info'>
                        <div className='guds-img'>
                            <img src={item.foto} alt="" />
                        </div>
                        <div className='guds-info'>
                            <p>{item.name}</p>
                        </div>
                        <div className='dell-feach'>
                            <img src="" alt="" />
                        </div>
                        <div className='special-services'>...</div>
                        <div className='guds-counter'>
                            <button className='less'><img src="" alt="" /></button>
                            <div className='counter'>
                                <p>222</p>
                            </div>
                            <button className='more'><img src="" alt="" /></button>
                        </div>
                        <div className='guds-line-price'>
                            <p className='start-price'>{item.realPrice}</p> 
                            <p className='discount-price'>{item.diskountPrice}</p>
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