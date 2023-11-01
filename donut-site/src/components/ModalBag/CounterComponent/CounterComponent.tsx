import './CounterComponent.scss';
import moreIco from '../../../assets/ico/Sign_in.svg';
import lessIco from '../../../assets/ico/Sign_out.svg';

interface CounterComponentProps {
    count: number;
    updateCount: (count: number) => void;
}

function CounterComponent({ count, updateCount }: CounterComponentProps) {
    const handleLessClick = () => {
        if (count > 1) {
            updateCount(count - 1);
        }
    };

    const handleMoreClick = () => {
        updateCount(count + 1);
    };

    return (
        <div className='guds-counter'>
            <button className='less' onClick={handleLessClick}>
                <img src={lessIco} alt="lessIco" />
            </button>
            <div className='counter'>
                <p>{count}</p>
            </div>
            <button className='more' onClick={handleMoreClick}>
                <img src={moreIco} alt="moreIco" />
            </button>
        </div>
    );
}

export default CounterComponent;