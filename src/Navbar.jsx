import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';


const Navbar = ({size,setShow}) => {
  return (
    <nav>
      <div className='nav-box'>
        <span className='my_shop' onClick={() => setShow(true)}>
          RkJ Shop
        </span>
        <div className='cart' onClick={()=> setShow(false)}>
          <span>
            <i className='fas fa-cart-plus'></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar