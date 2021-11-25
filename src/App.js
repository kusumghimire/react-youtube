import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import { Component } from 'react';


const API_KEY ='AIzaSyCCB-D6ee9HtNq2bJRdPMLmI6_VFEZfEBI';
class App extends Component {
  
  constructor(props){
    super(props)
    YTSearch({key:API_KEY, term:'songs'},(data)=>){
      console.log(data)
    }
  }
  render() {
    return (
      <div>
        <div className="App">
      <h1>Hello there</h1>
      <SearchBar />
    </div>
      </div>
    )
  }
}

export default App;
