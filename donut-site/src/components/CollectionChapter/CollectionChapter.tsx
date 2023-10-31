import './CollectionChapter.scss';

import { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import Categories from '../Categories/Categories';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchPageComponent from '../SearchPageComponent/SearchPageComponent';
import ScrollFicha from './ScrollFicha';
import Card from './Card';

function CollectionChapter() {

  let capterData = useSelector((state) => state.getcollection.collectionsName);
  
  let searchRequest = useSelector((state) => state.globalStates.globalSearchRequest);

  const containerRefs = useRef([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [hasMore, setHasMore] = useState(true); 

  let [showChaptr, setShowChaptr] = useState(false);


  // Функция, которая будет вызвана при достижении конца списка
  function fetchMoreData() {
    // Если больше данных нет, установите hasMore в false, чтобы отключить дальнейшую загрузку
    if (displayCount >= capterData.length) {
      setHasMore(false);
      return;
    }

    // Загрузите следующие 7 блока и увеличьте количество отображаемых блоков
    const newDisplayCount = displayCount + 7;
    setDisplayCount(newDisplayCount);
  }

  useEffect(() => {
    if(searchRequest !== ''){
      setShowChaptr(true);
    }else{
      setShowChaptr(false);
    }

  },[searchRequest])

  return (
    <>{showChaptr ? <SearchPageComponent searchRequest={searchRequest}/> : 
    
      <div className='shop-logik'>
          <Categories />
          <section className='collections'>
            {capterData.slice(0, displayCount).map((item, index) => (
              <div className='chapter' key={index}>

                <div className='link'>
                  <NavLink to={`/collection/${item}`} key={index}>
                    {item.toString()}
                  </NavLink>
                </div>

                <div className='products'>

                  <div className='product-container' ref={(ref) => (containerRefs.current[index] = ref)}>
                    <Card  collectionName={item.toString()}/>
                  </div>

                  <ScrollFicha index={index} containerRef={containerRefs.current[index]} />

                </div>

              </div>
            ))}
          </section>
          
          <InfiniteScroll
            dataLength={displayCount}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more items to load</p>}
          ></InfiniteScroll>
        </div>
      }
    </>
  );
}

export default CollectionChapter;