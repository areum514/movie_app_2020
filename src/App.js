import React from "react"
import axios from "axios"
import Moives from "./Movies"

class App extends React.Component{
  state={
    isLoading:true,
    movies:[]
  }
  
  getMovies= async ()=>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies,isLoading:false})

  }
  componentDidMount(){
    this.getMovies()
  }

  render(){
    const {isLoading,movies} = this.state
    return (
      <section className="continer">
      {isLoading?
        (<div>
          <span className="loader__text">Loading....</span>
        </div>
        ):(<div className="movies">
          {movies.map(movie=><Moives 
                  key={movie.id}id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  small_cover_image={movie.small_cover_image}
                  genres={movie.genres}/>)}
        </div>)}
      
      </section>
      )
    ;
  }
}
export default App;


