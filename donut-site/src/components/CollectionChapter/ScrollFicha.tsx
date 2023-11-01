import './ScrollFicha.scss';

import SignLeft from '../../assets/SignLeft.svg';
import SignRight from '../../assets/SignRight.svg';

function ScrollFicha({ containerRef }: { containerRef: HTMLDivElement | null }) {
    function scrollLeft() {
      if (containerRef) {
        containerRef.scrollLeft -= 320;
      }
    }
  
    function scrollRight() {
      if (containerRef) {
        containerRef.scrollLeft += 320;
      }
    }
  
    return ( 
      <div className='buttons-scroll'>
        <div className='left-scroll' onClick={scrollLeft}>
          <img src={SignLeft} alt='SignLeft' />
        </div>
        <div className='right-scroll' onClick={scrollRight}>
          <img src={SignRight} alt='SignRight' />
        </div>
      </div>
    );
  }

export default ScrollFicha;