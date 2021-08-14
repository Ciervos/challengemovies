import {useState,useEffect} from 'react';
import './style.scss';
import Bar from '../../components/Bar';
import Carrousel from '../../components/Carrousel';
import Card from '../../components/Card';
import Stars from '../../components/Stars';


function Home() {

  const [carrousel,setCarrousel] = useState([]);
  const [newmovies,setNewMovies] = useState([]);


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
    
    console.log(dataJson.results)
    if(ourtarget==="Cartelera"){
      setCarrousel(dataJson.results)
    }else if(ourtarget==="Películas"){
      setNewMovies(dataJson.results)
    }
    
   }

    return <>
    <Bar/>
    <div className="home-cont">
    <h1 className="home-titles">Cartelera:</h1>
    <Carrousel data={carrousel}/>
    <h1 className="home-titles">Películas:</h1>
    <div className="home-cards">
      {newmovies.slice(0, 8).map((movie,key)=>{
      return (<div className="home-card" key={`New Movie ${key}`}>
        <Card data={movie}/>
        <h6>{movie.title}</h6>
        <Stars data={movie} />
        </div>)
      })}
    </div>
    
    </div>

    </>
  }
  
  export default Home;