import React, { Component } from "react";
// import { movies } from "./getMovies";
import axios from "axios";
export default class Movies extends Component {
  constructor() {
    super();
    //used for making states
    this.state = {
      hover: "",
      parr: [1],
      currPage: 1,
      movies: [],
    };
  }
  async componentDidMount() {
    //side effects waale kaam jisme tym lagne waala hai
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=e119d74c7ded1379bd00c9a22895630a&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    // console.log(data);
    this.setState({ movies: [...data.results] });
    console.log("mounting done");
  }

  changeMovies=async()=>{
    console.log("changemovies called");
    console.log(this.state.currPage);
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);
    let data = res.data
    // console.log(data);
    this.setState({
        movies:[...data.results] });
  }

  handleRight=()=>{
    let temparr =[]
    for(let i=1;i<=this.state.parr.length+1;i++){
        temparr.push(i);
    }
    //setstate is async. so after calling setstate we have to give a callback fnctn.
    this.setState({
        parr:[...temparr],
        currPage:this.state.currPage+1
    },this.changeMovies)
    }

    handleLeft=()=>{if(this.state.currPage!=1){
        this.setState({
            currPage:this.state.currPage-1
        },this.changeMovies)
    }}

    handleClick=(value)=>{
        if(value!=this.state.currPage){
            console.log("i am called")
            this.setState({
                currPage:value
            },this.changeMovies)
        }
    }

  render() {
    console.log("render");
    // let movie = movies.results;
    return (
      <>
        {
          //ternary operator
          this.state.movies.length == 0 ? (
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
                {this.state.movies.map((movieobj) => (
                  // event lagate hai onmouseEnter
                  <div
                    className="card movies-card"
                    onMouseEnter={() => this.setState({ hover: movieobj.id })}
                    onMouseLeave={() => this.setState({ hover: "" })}
                  >
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
                      {this.state.hover == movieobj.id && (
                        <a className="btn btn-primary movies-button">
                          Add to Favourite
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" onClick={this.handleLeft}>
                        Previous
                      </a>
                    </li>
                    {this.state.parr.map((value) => (
                      <li class="page-item">
                        <a class="page-link" onClick={this.handleClick}>
                          {value}
                        </a>
                      </li>
                    ))}
                    <li class="page-item">
                      <a class="page-link" onClick={this.handleRight}>
                        Next
                      </a>
                    </li>
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
