import './Shop.scss';

import CollectionChapter from '../CollectionChapter/CollectionChapter';

import Sidebar from '../Sidebar/Sidebar';
function Shop() {
    return ( 
        <main>
            <div className='shop-page'>
                <Sidebar/>
                <CollectionChapter/>
            </div>
        </main>
    );
}

export default Shop;