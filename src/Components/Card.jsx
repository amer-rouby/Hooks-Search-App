import React, {useEffect, useState} from 'react'
import axios from "axios"

const Card = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`)
          .then(res => {
          // console.log(res);
          const drinks = res.data.drinks;
          setDrinks(drinks)
  })},[])

    const  handleToDetailes = () => {
        window.location = '/detailes' 
      }

    return ( 
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>

          {drinks.map(drink => 
          <div className="cards" key={drink.idDrink}>
            <div className="card"  style={{width: '22rem', marginBottom: 30}}>
              <img src={drink.strDrinkThumb} className="card-img-top" alt=""/>
              <div className="card-body">
                <h1 className="card-title">{drink.strAlcoholic}</h1>
                <h5 className="card-title">{drink.strGlass}</h5>
                <h6 className="card-title">{drink.strCategory} </h6>
            </div>
            <div className="m-3">
              <button onClick={handleToDetailes} className="btn btn-success btn-sm">DETAILS</button>
            </div>
          </div>
        </div>
        )}
    </div>

       
        
     );
}
 
export default Card;