import {useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";
import './style.scss';
import Bar from '../../components/Bar';
import Carrousel from '../../components/Carrousel';
import Card from '../../components/Card';
import Stars from '../../components/Stars';


function Home() {

  const [carrousel,setCarrousel] = useState([]);
  const [newmovies,setNewMovies] = useState([]);
  const history = useHistory();


  useEffect(() => {
    
    //Datos para el carrousel
    fetchData("Cartelera","https://api.themoviedb.org/3/movie/now_playing?api_key=547953ec0c34ba7dfffcabb37017ec4b")
    
    //Datos para la peliculas expuestas abajo
    //El link usado es el mismo pero hago esta forma por si en vez de mostrar las últimas películas, 
    //se quisieran mostrar otras en la home. 
    fetchData("Películas","https://api.themoviedb.org/3/movie/now_playing?api_key=547953ec0c34ba7dfffcabb37017ec4b")
  }, []);


  async function fetchData(ourtarget,url) {
    const data = await fetch(url)
    const dataJson = await data.json();
    
    
    if(ourtarget==="Cartelera"){
      setCarrousel(dataJson.results)
    }else if(ourtarget==="Películas"){
      setNewMovies(dataJson.results)
    }
    
   }


   function moviePage(id){
     
     history.push({
      pathname:  `/movie/${id}`, 
      })
   }

    return <>
    <Bar/>
    <div className="home-cont">
    <h1 className="home-titles">Cartelera:</h1>
    <Carrousel data={carrousel}/>
    <h1 className="home-titles">Películas:</h1>
    <div className="home-cards">
      {newmovies.slice(0, 8).map((movie,key)=>{
      return (<div className="home-card" key={`New Movie ${key}`} onClick={()=>{moviePage(movie.id)}}>
        <Card photo={movie.poster_path} title={movie.title}/>
        <h6 className="home-card-title">{movie.title}</h6>
        <Stars data={movie.vote_average} />
        </div>)
      })}
    </div>
    
    </div>

    </>
  }
  
  export default Home;