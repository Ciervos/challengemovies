import './style.scss';
import Bar from '../../components/Bar';
import Carrousel from '../../components/Carrousel';
import CardMovies from '../../components/CardMovies';


function Home() {
    return <>
    <Bar/>
    <h1 className="home-titles">Cartelera:</h1>
    <Carrousel/>
    <h1 className="home-titles">Peliculas:</h1>

    </>
  }
  
  export default Home;