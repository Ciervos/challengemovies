import './style.scss';
import noimage from '../../img/silhouette.jpg'

function Card(props) {
    return <div className="card-cont" >
      <img className="card-img" height={props.h} width={props.w} src={props.photo? `https://www.themoviedb.org/t/p/original${props.photo}`: noimage} alt={`${props.title}`} />
      </div>
  }
  
  export default Card;