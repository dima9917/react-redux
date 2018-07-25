import React, {Component} from 'react';

//, {Component} instead of ..... extends React.Component

//class based component
class SearchBar extends Component {
    render() {
        // return <input onChange={this.onInputChange} />;
        //single line don't need (event)
        return <input onChange={event => console.log(event.target.value)} />;
    }

    onInputChange(event) {
        // console.log(event.target.value);
    }
}

//functional component
// const SearchBar = () => {
//     return <input />
// };


export default SearchBar;