import './style.scss';
import Bar from '../../components/Bar';
import Carrousel from '../../components/Carrousel';
import CardMovies from '../../components/CardMovies';


function Home() {
    return <>
    <Bar/>
    <h1>Cartelera:</h1>
    <Carrousel/>
    <h1>Peliculas:</h1>
    
    </>
  }
  
  export default Home;