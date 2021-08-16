import './style.scss';

function Card(props) {
    return <div className="card-cont">
      <img className="card-img" src={`https://www.themoviedb.org/t/p/original${props.photo}`} alt={`${props.title}`} />
      </div>
  }
  
  export default Card;