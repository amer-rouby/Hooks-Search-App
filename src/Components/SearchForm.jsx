import React, {useState, useEffect} from 'react';
// import axios from "axios"
const SearchForm = () => {
    const [search, setSearch] = useState("");

//    useEffect( () => {
//     setSearch({ loading: true });
//     let res =  axios(
//       `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a=?`
//     );
//     const drinks = res.data.drinks;
//         console.log(drinks);
//     setSearch({ drinks, loading: false });
//    }, [])
    return ( 
        <div className="container card search-form" style={{width: '50rem',margin: "50px auto" , marginBottom: 100}}>
        <div className="card-body">
            <h4 style={{color: "darkgreen"}}>S e a r c h  Y o u r  F a r v o r i t e   C o c k t a i l</h4>
            <input type="text"
                value={search}
                className="form-control"
                style={{display: "block", width: "100%"}}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
      </div>
     );
}
 
export default SearchForm;