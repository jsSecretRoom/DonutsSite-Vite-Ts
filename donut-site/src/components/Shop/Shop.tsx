import './Shop.scss';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
function Shop() {
    return ( 
        <main className='shop-main'>
            <div className='shop-page'>
                <Sidebar/>
                <Outlet/>
            </div>
        </main>
    );
}

export default Shop;