import React, { Component } from 'react'
import { movies } from './getMovies'
export default class Movies extends Component {
  render() {
    let movie= movies.results
    return (
        <>
            {
                //ternary operator
                movie.length==0?
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div> : 
                    <div>
                        <h3 className="text-center"><strong>Trending</strong></h3>
                        <div className='movies-list'>
                            {/* jsx are written inside{} */}
                            {
                            movie.map((movieobj)=> (
                           <div className="card movies-card">
                            <img src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`} style={{height:'40vh'}} alt={movieobj.title} className="card-img-top banner-img"/>
                            <h1 className="card-title movies-title">{movieobj.original_title}</h1>
                            {/* <p className="card-text movies-text">{movieobj.overview}</p> */}
                            <div className="button-wrapper">
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                            ))
                            }
                        </div>
                    </div>
            }
        </>
        )
  }
}
