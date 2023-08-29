import { Component } from "react";
import { Gallery } from "./Gallery/Gallery";
import { SearchBar } from "./SearchBar/SearchBar";
import axios from "axios";

const KEY = "38314645-d57637d53f9e89632580f05c8"
axios.defaults.baseURL = `https://pixabay.com/api/`;

export class App extends Component{
  
  state = {
    images: [],
    query: ' ',
    page: 1,
  }

  onQueryChange = newQuery => 
    this.setState({query: newQuery, images: [], page: 1});
    

  async componentDidUpdate(prevProps, prevState){
    if(prevState.query !== this.state.query || prevState.page !== this.state.page){
      try {
        const res = await axios.get(`?key=${KEY}&q=${this.state.query}&page=${this.state.page}&per_page=12`)
        this.setState({images: res.data.hits})
      } catch (error) {
        console.log(error)
      }
      
      }
    }
  

  onLoadMoreClick = () => {
    this.setState(prevState => ({page: prevState.page +1}))
  }

  render(){
    return( <main>
      <section>
        <div>
          <SearchBar onQueryChange = {this.onQueryChange}/>
        </div>
        <div>
          <Gallery images = {this.state.images} onLoadMoreClick = {this.onLoadMoreClick} />
          
        </div>
      </section>
    </main>);
   
  }
  
};
