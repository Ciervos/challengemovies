import {useState,useEffect} from 'react';
import './style.scss';
import Bar from '../../components/Bar';
import Carrousel from '../../components/Carrousel';
import CardMovies from '../../components/CardMovies';


function Home() {

  const [carrousel,setCarrousel] = useState([]);


  useEffect(() => {
    
    //Datos para el carrousel
    fetchData("https://api.themoviedb.org/3/movie/now_playing?api_key=547953ec0c34ba7dfffcabb37017ec4b")

  }, []);

  async function fetchData(url) {
    const data = await fetch(url)
    const dataJson = await data.json();
    
    
    setCarrousel(dataJson.results)
   }

    return <>
    <Bar/>
    <div className="home-cont">
    <h1 className="home-titles">Cartelera:</h1>
    <Carrousel data={carrousel}/>
    <h1 className="home-titles">Peliculas:</h1>
    </div>

    </>
  }
  
  export default Home;