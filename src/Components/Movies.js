import React, { Component } from "react";
import { movies } from "./getMovies";
export default class Movies extends Component {
    constructor(){
        super();
        //used for making states
        this.state={
            hover:''
        }
    }
  render() {
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
              <div>
              <nav aria-label="Page navigation example" style={{display:'flex',justifyContent:'center'}}>
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
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