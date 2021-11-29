import React, {Component} from 'react';
import '../style/style.css';
class SearchBar extends Component{
    constructor(props){
       super(props)

       this.state = {term:''}
    }
    render(){
        return(
            <div>

                <input onChange={event => this.setState({term:event.target.value})} />
                value of input:{this.state.term}
            </div>
        )
    }
}

export default SearchBar;

// states are used to save data
// when the class is made it first use the constructor
// when we are using states there will be a class components
