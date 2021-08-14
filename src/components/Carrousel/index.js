import './style.scss';
import Carousel from 'react-bootstrap/Carousel'
import {useHistory} from "react-router-dom";

function Carrousel(props) {
const history = useHistory();


function handleClick(id){
//Hacer click en el carrousel te lleva a la página de la película que se muestra.
  
 history.push({
  pathname:  `/movie/${id}`, 
  })

}

    return <Carousel fade nextLabel={null} prevLabel={null}>

    {props.data.map((movie,key)=>{
     return (<Carousel.Item key={key} className="carrousel-cont" onClick={()=>{handleClick(movie.id)}}>

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