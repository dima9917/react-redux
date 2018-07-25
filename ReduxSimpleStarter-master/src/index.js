
import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyARqs1dY6a9Apba31WBySC677d3nozeBm0';


const App = () => {
    return (
        <div>
            <SearchBar /> 
        </div>
    );
}



ReactDom.render(<App />, document.querySelector('.container'));