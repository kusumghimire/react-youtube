import React, {Component} from 'react';

class SearchBar extends Component{
    render(){
        return(
            <input onChange={event => console.log(event.target.value)} />
            
        )
    }
}

export default SearchBar;

// states are used to save data
// when the class is made it first use the constructor