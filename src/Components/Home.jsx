import React from 'react';
import Card from './Card';
import SearchForm from "./SearchForm"
const Home = () => {
    return ( 
        <div className="container">
            <SearchForm />
            <Card />
        </div>
     );
}
 
export default Home;