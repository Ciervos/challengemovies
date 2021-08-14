import './style.scss';

function Card(props) {
    return <div className="card-cont">
      <img className="card-img" src={`https://www.themoviedb.org/t/p/original/${props.data.poster_path}`} alt={`Poster de ${props.data.title}`} />
      </div>
  }
  
  export default Card;