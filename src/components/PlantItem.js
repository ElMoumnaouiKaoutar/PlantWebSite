import React from 'react'
import CareScale from './CareScale';
import '../styles/plantItem.css'
const PlantItem = ({ plant }) => {
    const handleAddToCart = () => {
        // Récupérer les données du panier actuel depuis localStorage (s'il existe)
        const existingCartData = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Ajouter la plante actuelle au panier
        const updatedCartData = [...existingCartData, { name: plant.name, price: plant.price }];
    
        // Stocker le panier mis à jour dans localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCartData));
      };
    return (
      <div key={plant.id} className='card'>
        <img src={plant.cover} alt={plant.name}></img>
        <h3>{plant.name}</h3>
        <p>
            { Array.from({
                length: plant.light
            }).map((_, index)=>(
            <CareScale key={index}
            scaleType='Sun'
            />
            ))
            }
        </p>
        <p>
            {
                Array.from({
                    length: plant.water
                }).map((_,index)=>(
                  <CareScale
                  key={index}
                  scaleType='Water'/>  
                ))
                }
                </p>
        <p>Price: ${plant.price}</p>
        <button onClick={handleAddToCart}>Ajouter</button>
      </div>
    );
  }

export default PlantItem