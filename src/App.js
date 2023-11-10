import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Shop from './Shop';
import './App.css';
import Cart from './Cart';

const App = () => {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);


  const handleClick = (item) => {
    let isPresent = false;
    
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  const handleChange = (item, d) => {

    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    console.log(tempArr);
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr])
  }


  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} />
      {
        warning && <div className='warning'> Item is already in your cart </div>
      }
      {
        show ? <Shop handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
    </div>
  )
}

export default App;