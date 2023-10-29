import moreIco from '../../../../assets/ico/Sign_in.svg';
import lessIco from '../../../../assets/ico/Sign_out.svg';

function SpecialCounter({handleLess, handleMore, count}) {

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