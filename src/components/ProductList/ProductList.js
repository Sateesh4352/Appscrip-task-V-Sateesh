import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ filteredProducts }) => {
  const [heartClicked, setHeartClicked] = useState({});

  const toggleHeart = (id) => {
    setHeartClicked({ ...heartClicked, [id]: !heartClicked[id] });
  };

  return (
    <div className='products'>
      {filteredProducts.length > 0 ? (
        <ul className='unorderlist'>
          {filteredProducts.map(({ id, title, image }) => (
            <li key={id}>
              <div>
                <img className='image' src={image} alt='imag' />
              </div>
              <div className='flexer'>
                <div>
                  <h1 className='title'>{title}</h1>
                  <p className='para'>Sign in or Create an account to see pricing</p>
                </div>
                <div>
                  <img
                    className='heart-image'
                    src={heartClicked[id] ? '/assets/heart 2.png' : '/assets/heart.png'}
                    alt='heart'
                    onClick={() => toggleHeart(id)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
