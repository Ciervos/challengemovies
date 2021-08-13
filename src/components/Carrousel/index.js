import './style.scss';
import Carousel from 'react-bootstrap/Carousel'

function Carrousel(props) {
console.log("dentro de carrousel", props.data)

    return <Carousel fade nextLabel={null} prevLabel={null}>

    {props.data.map((movie,key)=>{
     return (<Carousel.Item key={key} className="carrousel-cont">

              <img className="carrousel-img" src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`} alt={`Poster de ${movie.title}`} />

            <Carousel.Caption className="carrousel-caption">
              <h3 className="carrousel-title">{movie.title}</h3>
              <p className="carrousel-desc">{movie.overview}</p>
            </Carousel.Caption>
            </Carousel.Item>)
    })}

      
      </Carousel>
  }
  
  export default Carrousel;