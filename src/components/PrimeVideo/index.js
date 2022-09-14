import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="movie-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movieList={actionMovieList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
