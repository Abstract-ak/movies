import React, { Component } from "react";
import { movies } from "./getMovies";
import axios from 'axios';
export default class Movies extends Component {
    constructor(){
        super();
        //used for making states
        this.state={
            hover:'',
            parr:[1],
            currPage:1
        }
    }
    async componentDidMount(){
        //side effects waale kaam jisme tym lagne waala hai
        const res= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=e119d74c7ded1379bd00c9a22895630a&language=en-US&page=${this.state.currPage}`);
        let data= res.data;
        console.log(data);
        console.log('mounting done');
    }
  render() {
    console.log('called render');
    let movie = movies.results;
    return (
      <>
        {
          //ternary operator
          movie.length == 0 ? (
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div>
              <h3 className="text-center">
                <strong>Trending</strong>
              </h3>
              <div className="movies-list">
                {/* jsx are written inside{} */}
                {movie.map((movieobj) => (
                    // event lagate hai onmouseEnter
                  <div className="card movies-card" onMouseEnter={()=>this.setState({hover: movieobj.id})} onMouseLeave={()=>this.setState({hover: ''})}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`}
                      alt={movieobj.title}
                      className="card-img-top movies-img"
                    />
                    <h3 className="card-title movies-title">
                      {movieobj.original_title}
                    </h3>
                    {/* <p className="card-text movies-text">{movieobj.overview}</p> */}
                    <div
                      className="button-wrapper"
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                        {
                            this.state.hover == movieobj.id && <a className="btn btn-primary movies-button">
                            Add to Favourite
                          </a>
                        }
                      
                    </div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex',justifyContent:'center'}}>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    {
                        this.state.parr.map((value)=>(
                            <li class="page-item"><a class="page-link" href="#">{value}</a></li>
                        ))
                    }
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
                </nav>
              </div>
            </div>
          )
        }
      </>
    );
  }
}