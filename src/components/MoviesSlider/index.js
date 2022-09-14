import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieList} = props

  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movieList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
