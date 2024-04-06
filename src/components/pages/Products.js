import React ,{useState}from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';

import './Products.css'
const Products = () => {
    const [showFilter, setShowFilter] = useState(false);
    const toggleFilter = () => {
      setShowFilter(!showFilter);
    };
  return (
        <main>
          <section className="product-bar">
            <div className="side-filter-section">
              <p>3425 items</p>
              <div>
                {showFilter ? (
                  <IoIosArrowBack onClick={toggleFilter} />
                ) : (
                  <IoIosArrowForward onClick={toggleFilter} />
                )}
                <p>
                  <a href="#" onClick={toggleFilter}>
                    {showFilter ? "Hide Filter" : "Show Filter"}
                  </a>
                </p>
              </div>
            </div>
            <div className="dropdown-filter-section">
              <select>
                <option>Recomended</option>
                <option>Newest first</option>
                <option>popular</option>
                <option>price:high to low</option>
                <option>price:low to high</option>
              </select>
            </div>
          </section>
    
          <section className="Product-f-l">
            <div className={`item-filter ${showFilter ? "show" : ""}`}>
              <div className="customize">
                <input type="checkbox" id="customize" name="customize"/>
                <label for="customize">Customize</label>
              </div>
              <div>
              <ProductsFilter/>
              </div>
            </div>
            <div className="all-products">
            <ProductCard/>
            </div>
          </section>
        </main>
   
    
  )
}

export default Products












