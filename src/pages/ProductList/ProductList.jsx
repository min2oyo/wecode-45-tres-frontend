import React, { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import API from '../../config';
import Filter from './component/Filter';
import Product from './component/Product';

import './ProductList.scss';

const ProductList = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [products, setProducts] = useState([]);
  const [continent, setContinent] = useState([]);
  const [currentContinent, setCurrentContinent] = useState('');
  const [currentCountry, setCurrentCountry] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const datas = [];
  console.log(datas);

  const handleSort = sort => {
    searchParams.set('orderBy', sort);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    for (let i = 1; i < 126; i++) {
      fetch(`http://13.125.231.183:3000/products/${i}`)
        .then(res => res.json())
        .then(res => datas.push(res));
    }
    // fetch(`${API.PRODUCTLIST_API}${id}&${searchParams.toString()}`)
    //   .then(response => response.json())
    //   .then(response => {
    //     setProducts(response.foods);
    //     setContinent(response.countries);
    //     setCurrentContinent(response.foods[0].continent);
    //     setCurrentCountry(response.foods[0].country);
    //   });
  }, []);

  return (
    <div className="product-list">
      <header className="list-header">
        <h1 className="continent">
          {currentContinent} / {currentCountry}
        </h1>
        <button
          className="sort-button"
          onClick={() => setIsSorted(prev => !prev)}
        >
          <span className="sort-by">정렬 기준</span>
          <img
            className="sort-img"
            alt="더보기"
            src={`/images/icon/${
              isSorted ? 'angle-up-solid' : 'angle-down-solid'
            }.svg`}
          />
        </button>
        {isSorted && (
          <ul className="sort-list">
            {SORT_MENU.map(({ id, content, sort }) => (
              <li key={id} onClick={() => handleSort(sort)}>
                {content}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="product-container">
        <Filter continent={continent} />
        {/* <div className="products">
          {products?.map(product => (
            <Product product={product} key={product.id} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProductList;

const SORT_MENU = [
  { id: 0, content: '인기순', sort: 'best' },
  { id: 1, content: '높은 가격순', sort: 'priceDesc' },
  { id: 2, content: '낮은 가격순', sort: 'priceAsc' },
];
