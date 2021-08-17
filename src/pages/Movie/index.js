import {useState,useEffect} from 'react';
import {useLocation, useHistory} from "react-router-dom";
import './style.scss';
import Bar from '../../components/Bar';
import Card from '../../components/Card';
import Stars from '../../components/Stars';
import Button from '../../components/Button';

function Movie() {

  const [movie,setMovie] = useState({});
  const [cast,setCast] = useState([]);
  const location = useLocation(); 
  const history = useHistory();
  const movieid = location.pathname.split("/")[2];

  useEffect(() => {

    fetchData("Película",`https://api.themoviedb.org/3/movie/${movieid}?api_key=547953ec0c34ba7dfffcabb37017ec4b`)
    fetchData("Elenco",`https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=547953ec0c34ba7dfffcabb37017ec4b`)
  }, []);


  async function fetchData(ourtarget,url) {
    const data = await fetch(url)
    const dataJson = await data.json();
    
    
    if(ourtarget==="Película"){
      setMovie(dataJson)
      console.log("Movie",dataJson)
      
    }else if(ourtarget==="Elenco"){
      setCast(dataJson.cast)
      console.log("Elenco",dataJson.cast)
    }
    
   }

 
    return <>
    <Bar/>
    {/* Sección Película */}
    
    <div className="movie-upper" style={{ backgroundImage: `linear-gradient(to right,#01b4e4 0%,#0d253f 100%), url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`, backgroundSize:"cover", backgroundBlendMode:"multiply" }}>
      
        <Card photo={movie.poster_path} title={movie.title} h="400px"/>
      
      <div className="movie-upper-info">
        <h1 className="movie-title">{movie.title}</h1>
        <Stars data={movie.vote_average} dark={true}/>
        <p className="movie-desc">{movie.overview}</p>
        <Button onClick={() => history.goBack()} label={"Regresar"}/>
      </div> 
    </div>

    {/* Sección Elenco */}

    <div className="movie-lower">
    {cast.map((actor,key)=>{
      return (<div className="movie-lower-card" key={`Actor ${key}`}>
        <Card photo={movie.poster_path} title={movie.title}/>
        <h6>Nombre</h6>
        
        </div>)
      })}
    </div>

    </>
  }
  
  export default Movie;