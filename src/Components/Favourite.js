import React, { Component } from 'react'
import { movies } from './getMovies'
export default class Favourite extends Component {
  render() {
    const movie= movies.results;
    console.log(movie);

    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    
    return (
        
      <div>
        <>
        <div className='main'>
            <div className='row'>
                <div className='col-3'>
                <ul class="list-group favourites-genres">
                    <li class="list-group-item">All Genres</li>
                    <li class="list-group-item">Action</li>
                    <li class="list-group-item">Action</li>
                    <li class="list-group-item">Action</li>
                    <li class="list-group-item">Action</li>
                </ul>
                </div>
                <div className='col-9 favourites-table'>
                    <div className='row'>
                        <input type="text" className='input-group-text col'/>
                        <input type="number" className='input-group-text col'/>
                    </div>
                    <div className='row'>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movie.map((movieobj)=>(
                                    <tr>
                                        <td>{movieobj.original_title}</td>
                                        <td>{genreids[movieobj.genre_ids[0]]}</td>
                                        <td>{movieobj.popularity}</td>
                                        <td>{movieobj.vote_average}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example">
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
        </div>
        </>
      </div>
    )
  }
}
