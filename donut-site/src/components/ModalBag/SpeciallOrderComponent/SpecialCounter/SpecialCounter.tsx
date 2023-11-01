import moreIco from '../../../../assets/ico/Sign_in.svg';
import lessIco from '../../../../assets/ico/Sign_out.svg';

interface SpecialCounterProps {
  handleLess: () => void;
  handleMore: () => void;
  count: number;
}

function SpecialCounter({ handleLess, handleMore, count }: SpecialCounterProps) {
  return (
    <div className='guds-counter'>
      <button className='less' onClick={handleLess}>
        <img src={lessIco} alt="lessIco" />
      </button>
      <div className='counter'>
        <p>{count}</p>
      </div>
      <button className='more' onClick={handleMore}>
        <img src={moreIco} alt="moreIco" />
      </button>
    </div>
  );
}

export default SpecialCounter;