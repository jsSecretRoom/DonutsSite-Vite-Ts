import './ScrollFicha.scss';

import SignLeft from '../../assets/SignLeft.svg';
import SignRight from '../../assets/SignRight.svg';

function ScrollFicha({index, containerRef }) {
    
    function scrollLeft() {
        containerRef.scrollLeft -= 320;
    }
    
    function scrollRight() {
        containerRef.scrollLeft += 320;
    }



    return ( 
        <div className='buttons-scroll'>
            <div className='left-scroll' onClick={() => scrollLeft(index)}>
                <img src={SignLeft} alt='SignLeft' />
            </div>
            <div className='right-scroll' onClick={() => scrollRight(index)}>
                <img src={SignRight} alt='SignRight' />
            </div>
        </div>
    );
}

export default ScrollFicha;