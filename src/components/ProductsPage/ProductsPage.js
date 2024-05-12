import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './ProductsPage.css';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import ProductList from '../ProductList/ProductList';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter(product => {
    if (checkboxes.option1 && product.category === "men's clothing") {
      return true;
    }
    if (checkboxes.option2 && product.category === "women's clothing") {
      return true;
    }
    if (checkboxes.option3 && product.category === 'kids') {
      return true;
    }

    if (!checkboxes.option1 && !checkboxes.option2 && !checkboxes.option3) {
      return true;
    }
    return false;
  });

  return (
    <div className='main-container'>
      <div>
        <div className='discover-products'>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
        <hr className='hr2'/>
        <div className='nav'>
          <h1>3425 items</h1>
          <h2 onClick={toggleDropdown}>
            {isOpen ? (
              <>
                <FaAngleLeft onClick={toggleSidebar} /> HIDE FILTER 
              </>
            ) : (
              <>
                <FaAngleRight onClick={toggleSidebar} /> SHOW FILTER 
              </>
            )}
          </h2>
          <div>
            <select className='options1'>
              <option className='val1' value="rem" selected>RECOMMENDED</option>
              <option value='new'>NEWEST FIRST</option>
              <option value='pop'>POPULAR</option>
              <option value='hl'>PRICE : HIGH TO LOW</option>
              <option value='lh'>PRICE : LOW TO HIGH</option>
            </select>
          </div>
        </div>
        <hr className='hr2' />
        <div className='productsflex'>
          <FilterDropdown
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
            toggleSidebar={toggleSidebar}
            checkboxes={checkboxes}
            handleCheckboxChange={handleCheckboxChange}
          />
          <ProductList filteredProducts={filteredProducts} />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage;
