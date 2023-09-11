import React, { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import API from '../../config';
import Filter from './component/Filter';
import Product from './component/Product';

import './ProductList.scss';

type productType = [
  {
    id: number;
    food: string;
    eng_food: string;
    price: string;
    vegetarian: string;
    continent: string;
    eng_continent: string;
    country: string;
    eng_country: string;
    spice_level: number;
    description: string;
    eng_description: string;
    allergy: null;
    eng_allergy: null;
    meat: null;
    eng_meat: null;
    food_image: null;
    review: null;
  },
];

const ProductList = () => {
  const [products, setProducts] = useState<productType>();
  console.log(products);
  const [isOpenSortBox, setIsOpenSortBox] = useState(false);
  const [continent, setContinent] = useState([]);
  const [currentContinent, setCurrentContinent] = useState('');
  const [currentCountry, setCurrentCountry] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const handleSort = (sort: any) => {
    searchParams.set('orderBy', sort);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(`${API.PRODUCT_LIST}`)
      .then(res => res.json())
      .then(res => setProducts(res));
    // fetch(`${API.PRODUCTLIST}${id}&${searchParams.toString()}`)
    //   .then(res => res.json())
    //   .then(res => {
    //     setProducts(res.foods);
    //     setContinent(res.countries);
    //     setCurrentContinent(res.foods[0].continent);
    //     setCurrentCountry(res.foods[0].country);
    //   });
  }, []);

  return (
    <div className="product-list">
      <header className="list-header">
        <div className="locate">
          {currentContinent || `대륙`} / {currentCountry || `국가`}
        </div>
        <button
          className="sort-button"
          onMouseUp={() => setIsOpenSortBox(prev => !prev)}
        >
          <div className="sort-by">정렬 기준</div>
          <img
            className="sort-img"
            alt="더보기"
            src={`/images/icon/${
              isOpenSortBox ? 'angle-up-solid' : 'angle-down-solid'
            }.svg`}
          />
        </button>
        {isOpenSortBox && (
          <ul className="sort-menu">
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
        <div className="products">
          {products?.map(item => <Product key={item.id} product={item} />)}
        </div>
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
