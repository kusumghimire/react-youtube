import  React,{ Component } from "react";
import "./App.css";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from './components/video_list';

const API_KEY = "AIzaSyCCB-D6ee9HtNq2bJRdPMLmI6_VFEZfEBI";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos:[] }
    YTSearch({ key: API_KEY, term: "songs" }, (videos) => {
      this.setState(videos);
    });
  }
  render() {
    return (
      <div>
        <div className="App">
          <h1>Hello there</h1>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
