import {useState,useEffect} from 'react';
import './style.scss';
import { Star,StarFill,StarHalf } from 'react-bootstrap-icons';

function Stars(props) {
  console.log(props.data)
  let average = props.data;
  let fullnum = parseInt(props.data) 
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


    return <div>
        
        {[...Array(fullnum)].map((x, key) =>
        <StarFill key={`Full star ${key}`}/>
        )
    
        }
       {halfstar ? <StarHalf/>:false}
       {[...Array(totalstars-fullnum)].map((x, key) =>
        <Star key={`star ${key}`}/>
        )
       }

         
        <span className="stars-average">{average}</span>
      </div>
  }
  
  export default Stars;