import React, {useState, useEffect} from 'react'
import '../styles/cart.css'
const Cart = () => {
    const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Récupérer les données du panier depuis localStorage lors du chargement du composant
    const existingCartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartData(existingCartData);
  }, []);
  return (
    <div className='cart'>
        <p className='btn'>
            <button>fermer</button>
            </p>
        <h3>Panier</h3>
        <ul>
        {cartData.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
        <h3>Total: ${cartData.reduce((total, item) => total + item.price, 0)}</h3>
      <button>Vider votre panier</button>
    </div>
  )
}

export default Cart