import './SetCreator.scss';
import BodyBox from '../../assets/box/backbox.svg'
import LiedBox from '../../assets/box/liedbox.svg'
import BodyBoxTop from '../../assets/box/topbox.svg'
function SetCreator() {
    return (
        <main>
            <section className='priduct-line'>
                <div className='box-sizwe'>
                    <button>2x3(6)</button>
                    <button>3x4(12)</button>
                    <button>4x4(16)</button>
                    <button>5x4(20)</button>
                </div>
                <div className='product-container'>
                    <div className='product-item'>
                        <div className='product-item-img'>
                            <img src="" alt="" />
                        </div>
                        <button className='add-button'>Add</button>
                    </div>
                    
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

                    </div>
                    <div className="cap-box">
                        <div className='Lied'>
                            <img src={LiedBox} alt="LiedBox" />
                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SetCreator;