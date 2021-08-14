import './style.scss';
import { Star,StarFill,StarHalf } from 'react-bootstrap-icons';

function Stars(props) {
  console.log(props)
  
    return <div>
           Estrellitas
        <span className="stars-average">{props.data}</span>
      </div>
  }
  
  export default Stars;