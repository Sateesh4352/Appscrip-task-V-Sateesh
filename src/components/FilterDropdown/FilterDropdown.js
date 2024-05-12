import React, { useState } from 'react';
import './FilterDropdown.css'


const FilterDropdown = ({ isOpen, toggleDropdown, toggleSidebar, checkboxes, handleCheckboxChange }) => {
  const [idealForOpen, setIdealForOpen] = useState(false);

  const toggleIdealForDropdown = () => {
    setIdealForOpen(!idealForOpen);
  };

  return (
    <div className='sidebar'>
      {isOpen && (
        <div>
          <div className='style-checkbox'>
            <input id="customizble" type="checkbox" />
            <label htmlFor='customizble'>CUSTOMIZABLE</label>
          </div>
          <hr className='hr2' />
          <div className="dropdown">
            <div className="dropdown-header" onClick={toggleIdealForDropdown}>
              <div>
                <h3>IDEAL FOR</h3>
                <select className='options2'>
                  <option>All</option>
                </select>
              </div>
            </div>
            {idealForOpen && (
              <div className="dropdown-content">
                <ul className='unorder-checklist'>
                  <li>
                    <input
                      type="checkbox"
                      name="option1"
                      id="option1"
                      checked={checkboxes.option1}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="option1">Men</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="option2"
                      id="option2"
                      checked={checkboxes.option2}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="option2">Women</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="option3"
                      id="option3"
                      checked={checkboxes.option3}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="option3">Baby & Kids</label>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <hr className='hr2'></hr>
          <div className="dropdown-header">
            <div>
              <h3>OCCASION</h3>
              <select className='options2'>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <hr className='hr2'></hr>
          <div className="dropdown-header">
            <div>
              <h3>WORK</h3>
              <select className='options2'>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <hr className='hr2'></hr>
          <div className="dropdown-header">
            <div>
              <h3>FABRIC</h3>
              <select className='options2'>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <hr className='hr2'></hr>
          <div className="dropdown-header">
            <div>
              <h3>SEGMENT</h3>
              <select className='options2'>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <hr className='hr2'></hr>
          <div className="dropdown-header">
            <div>
              <h3>SUITABLE FOR</h3>
              <select className='options2'>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <hr className='hr2'></hr>
          <div className="dropdown-header">
            <div>
              <h3 >RAW MATERIALS</h3>
              <select className='options2'>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <hr className='hr2'></hr>
          <div className="dropdown-header">
            <div>
              <h3>FABRIC</h3>
              <select className='options2'>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <hr className='hr2'></hr>
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
