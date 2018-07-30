import React, {Component} from 'react';

//, {Component} instead of ..... extends React.Component

//class based component
class SearchBar extends Component {
    constructor(props){
        super(props); //call Component construcor like base() in C# 
        this.state = { term: '' };
    }
    render() {
        //return <input onChange={this.onInputChange} />;
        //single line don't need (event)
        return (
            <div className="search-bar">                
                <input 
                value = {this.state.term}
                onChange={event => this.setState({term:event.target.value})} />

                Value of the input: {this.state.term};
            </div>
        )
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

//state is a plain javascript object that is used to record and react to user events
//each class based component has it's own state object
//whenever a component's state is changed, the component immideately re-renderes and forces it's children to re-render as well

//Contolled component only has it's value set by state