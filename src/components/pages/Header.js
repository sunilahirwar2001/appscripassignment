// import React from 'react';
// import Navigation from './Navigation';
// import './Header.css'
// import logo from '../../assets/images/Logo.png'
// import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { CiUser } from "react-icons/ci";

// const Header = () => {
//   return (
   
//     <header class="header">
//     <div class="container">
//       <div class="logo">
//         <img src={logo} alt="Metta Muse Logo" className='imgcl' />
//       </div>
//       <div class="header-content">
//         <h1>LOGO</h1>
//         <div class="header-icons">
//           <CiSearch />
//           <CiHeart />
//           <HiOutlineShoppingBag />
//           <CiUser />
//           <select>
//             <option>ENG</option>
//             <option>1</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   </header> 
//   );
// };

// export default Header;













import React from 'react';
import Navigation from './Navigation';
import './Header.css';
import logo from '../../assets/images/Logo.png';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import image1 from '../../assets/images/Frame 34.png'
const Header = () => {
  return (
    <div> 
      <section className='section'>
        <div className='img-selcet'>
          <img src={image1} />
        </div>
        <div className='img-selcet'>
          <img src={image1} />
        </div> 
        <div className='img-selcet'>
          <img src={image1} />
        </div>
      </section>
    <header className="header">

      <div className="container">
        <div className="logo">
          <img src={logo} alt="Metta Muse Logo" className='imgcl' />
        </div>
        <div className="header-content">
          <h1 className="logo-text">LOGO</h1>
          <div className="header-icons">
            <CiSearch className="header-icon" />
            <CiHeart className="header-icon" />
            <HiOutlineShoppingBag className="header-icon" />
            <CiUser className="header-icon" />
            <select className="language-select">
              <option>ENG</option>
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
      <nav className='navitems'>
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>

        </ul>
      </nav>
    </header> 
    <hr/>
    <div className='subtitle'>
      <h1>Discover our products</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus </p>
      <p>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </div>
    </div>
  );
};

export default Header;
