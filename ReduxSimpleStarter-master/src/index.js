
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyARqs1dY6a9Apba31WBySC677d3nozeBm0';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null
        };

        this.videoSearch('cats');
    }

    videoSearch(term){

        YTSearch({ key: API_KEY, term: term }, 
        (videos) => { 
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render()
    {
        const videoSeach = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSeach}/> 
                <VideoDetail video = {this.state.selectedVideo} />                
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos} />                
            </div>
        );
    }
}



ReactDom.render(<App />, document.querySelector('.container'));