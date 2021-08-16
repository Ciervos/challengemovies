import {useState,useEffect} from 'react';
import './style.scss';
import { Star,StarFill,StarHalf } from 'react-bootstrap-icons';

function Stars(props) {
  let average = props.data;
  let fullnum = props.data? parseInt(props.data): 0; 
  const [totalstars,setTotalStars] = useState(10);
  const [halfstar,setHalfStar] = useState(false);

  useEffect(() => {
   //Esta función nos ayuda a saber cuantas estrellas necesitaremos para llenar las 10 estrellas
   
    totalOfStars()

  }, []);

  function totalOfStars(){
   //Revisa si el número de promedio es entero o necesita que agreguemos una estrella a medio llenar
   
   if(average%1!==0){
    setTotalStars(9)
    setHalfStar(true)
   }

  }


    return <div className="stars-cont">
        <div>
        {[...Array(fullnum)].map((x, key) =>
        <StarFill className="stars-style" key={`Full star ${key}`}/>
        )
    
        }
       {halfstar ? <StarHalf className="stars-style"/>:false}
       {[...Array(totalstars-fullnum)].map((x, key) =>
        <Star  className="stars-style" key={`star ${key}`}/>
        )
       }

        </div> 
        <span className="stars-average">{average}</span>
      </div>
  }
  
  export default Stars;