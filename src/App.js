import  React,{ Component } from "react";
import "./App.css";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import Videolist from './components/video_list';
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCCB-D6ee9HtNq2bJRdPMLmI6_VFEZfEBI";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {videos:[], selectedVideo: null}
    YTSearch({ key: API_KEY, term: "songs" }, (videos) => {
      this.setState({videos:videos, selectedVideo : videos[0] });
      console.log(videos)
    });
  }

  render() {
    return (
        <div className="App">
          <SearchBar />
          <VideoDetail video={this.state.selectedVideo} />
          <Videolist onSelectedVideo={selectedVideo => this.setState ({selectedVideo})} videos={this.state.videos} />
        </div>
    );
  }
}

export default App;
