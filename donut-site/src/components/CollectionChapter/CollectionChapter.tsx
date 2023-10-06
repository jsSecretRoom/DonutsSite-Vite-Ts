import './CollectionChapter.scss';

import { useRef, useState } from 'react';
import Card from './Card';
import { NavLink } from 'react-router-dom';
import Categories from '../Categories/Categories';
import InfiniteScroll from 'react-infinite-scroll-component';

import SignLeft from '../../assets/SignLeft.svg';
import SignRight from '../../assets/SignRight.svg';

function CollectionChapter({ dataprop }) {
  const containerRefs = useRef([]);
  const [displayCount, setDisplayCount] = useState(3); // Количество блоков, которые нужно отобразить изначально
  const [hasMore, setHasMore] = useState(true); // Переменная для определения, есть ли еще данные для загрузки

  function scrollLeft(index) {
    const container = containerRefs.current[index];
    container.scrollLeft -= 320;
  }

  function scrollRight(index) {
    const container = containerRefs.current[index];
    container.scrollLeft += 320;
  }

  // Функция, которая будет вызвана при достижении конца списка
  function fetchMoreData() {
    // Если больше данных нет, установите hasMore в false, чтобы отключить дальнейшую загрузку
    if (displayCount >= dataprop.length) {
      setHasMore(false);
      return;
    }

    // Загрузите следующие 7 блока и увеличьте количество отображаемых блоков
    const newDisplayCount = displayCount + 7;
    setDisplayCount(newDisplayCount);
  }

  return (
    <div className='shop-logik'>
      <Categories />
      <section className='collections'>
        {dataprop.slice(0, displayCount).map((item, index) => (
          <div className='chapter' key={index}>
            <div className='link'>
              <NavLink to={`/collection/${item}`} key={index}>
                {item.toString()}
              </NavLink>
            </div>
            <div className='products'>
              <div
                className='product-container'
                ref={(ref) => (containerRefs.current[index] = ref)}
              >
                <Card collectionName={item.toString()} />
              </div>
              <div className='buttons-scroll'>
                <div className='left-scroll' onClick={() => scrollLeft(index)}>
                  <img src={SignLeft} alt='SignLeft' />
                </div>
                <div className='right-scroll' onClick={() => scrollRight(index)}>
                  <img src={SignRight} alt='SignRight' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* Оберните ваш список элементов в InfiniteScroll */}
      <InfiniteScroll
        dataLength={displayCount}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more items to load</p>}
      ></InfiniteScroll>
    </div>
  );
}

export default CollectionChapter;