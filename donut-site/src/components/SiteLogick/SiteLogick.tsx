import { useState, useEffect } from 'react';
import './SiteLogick.scss';
import SideBurButton from '../../ButtonComponents/SideBurButton/SideBurButton';
import ShopButton from '../../ButtonComponents/ShopButton/ShopButton';

function SiteLogick() {
    const [path, setPath] = useState(false);
    const currentPath = window.location.pathname;
    useEffect(() => {
        
        if (currentPath.includes('shop')) {
            setPath(true);
        } else {
            setPath(false);
        }
    }, [currentPath]);

    return (
        <>
            {path && (
                <section className='site-logick'>
                    <div className='button-section'>
                        <SideBurButton />
                        <ShopButton />
                    </div>
                </section>
            )}
        </>
    );
}

export default SiteLogick;