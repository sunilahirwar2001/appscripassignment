import React, { useState } from 'react';
import './ProductsFilter.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Importing desired ico

function ProductsFilter() {
  const [showIdealFor, setShowIdealFor] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showFabric, setShowFabic] = useState(false);
  const clearOptions = () => {
    setShowIdealFor(false);
    setShowColor(false);
    setShowSize(false);
  };

  return (
    <div>
      <FilterButton
        onClick={() => setShowIdealFor(!showIdealFor)}
        show={showIdealFor}
        label="IDEAL FOR"
      />
      {showIdealFor && (
        <div className='filter-items'>
          <p><a onClick={clearOptions}>Unselect all</a></p>
          <input type="radio" id="men" name="gender" value="men" />
          <label htmlFor="men">Men</label><br />
          <input type="radio" id="women" name="gender" value="women" />
          <label htmlFor="women">Women</label><br />
          <input type="radio" id="jewellory" name="gender" value="jewellory" />
          <label htmlFor="jewellory">Jewellory</label><br />
          <input type="radio" id="electronics" name="electronics" value="electronics" />
          <label htmlFor="electronics">Electronics</label><br />
        </div>
      )}

    
        <FilterButton
        onClick={() => setShowFabic(!showFabric)}
        show={showFabric}
        label="Fabric"
      />
      {showFabric && (
  <div className='filter-items'>
    <p><a onClick={clearOptions}>Unselect all</a></p>
    <input type="checkbox" id="fabric_cotton" name="fabric" value="cotton" />
    <label htmlFor="fabric_cotton">Cotton</label><br />
    <input type="checkbox" id="fabric_polyester" name="fabric" value="polyester" />
    <label htmlFor="fabric_polyester">Polyester</label><br />
    <input type="checkbox" id="fabric_silk" name="fabric" value="silk" />
    <label htmlFor="fabric_silk">Silk</label><br />
    <input type="checkbox" id="fabric_wool" name="fabric" value="wool" />
    <label htmlFor="fabric_wool">Wool</label><br />
    <input type="checkbox" id="fabric_linen" name="fabric" value="linen" />
    <label htmlFor="fabric_linen">Linen</label><br />
    <input type="checkbox" id="fabric_denim" name="fabric" value="denim" />
    <label htmlFor="fabric_denim">Denim</label><br />
  </div>
)}

<FilterButton
        onClick={() => setShowColor(!showColor)}
        show={showColor}
        label="COLOR"
      />
      {showColor && (
        <div className='filter-items'>
          <p><a onClick={clearOptions}>Unselect all</a></p>
          <input type="checkbox" id="color_red" name="color" value="red" />
          <label htmlFor="color_red">Red</label><br />
          <input type="checkbox" id="color_blue" name="color" value="blue" />
          <label htmlFor="color_blue">Blue</label><br />
          <input type="checkbox" id="color_green" name="color" value="green" />
          <label htmlFor="color_green">Green</label><br />
        </div>
      )}

      <FilterButton
        onClick={() => setShowSize(!showSize)}
        show={showSize}
        label="SIZE"
      />
      
      {showSize && (
        <div className='filter-items'>
          <p><a onClick={clearOptions}>Unselect all</a></p>
          <input type="checkbox" id="size_xs" name="size" value="XS" />
          <label htmlFor="size_xs">XS</label><br />
          <input type="checkbox" id="size_s" name="size" value="S" />
          <label htmlFor="size_s">S</label><br />
          <input type="checkbox" id="size_m" name="size" value="M" />
          <label htmlFor="size_m">M</label><br />
          <input type="checkbox" id="size_l" name="size" value="L" />
          <label htmlFor="size_l">L</label><br />
          <input type="checkbox" id="size_xl" name="size" value="XL" />
          <label htmlFor="size_xl">XL</label><br />
        </div>
      )}
    </div>
  );
}

function FilterButton({ onClick, show, label }) {
  return (
    <div>
      <button onClick={onClick}>
        {show ? <FaAngleDown /> : <FaAngleUp />} {label}
      </button>
    </div>
  );
}

export default ProductsFilter;



