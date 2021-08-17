import './style.scss';
import {useState,useEffect} from 'react';
import {useHistory,useLocation} from "react-router-dom";
import Bar from '../../components/Bar';
import Card from '../../components/Card';
import Stars from '../../components/Stars';

function Search() {
  const [results,setResults] = useState([]);
  const history = useHistory();
  const location = useLocation(); 
  const oursearch = location.pathname.split("/")[2];

  useEffect(() => {
    
    
    fetchData("Búsqueda",`https://api.themoviedb.org/3/search/movie?api_key=547953ec0c34ba7dfffcabb37017ec4b&query=${oursearch}`)
    
  }, [oursearch]);


  async function fetchData(ourtarget,url) {
    const data = await fetch(url)
    const dataJson = await data.json();
    
    
    setResults(dataJson.results)
   }


  function moviePage(id){
     
    history.push({
     pathname:  `/movie/${id}`, 
     })
  }

  

    return <>
    <Bar/>
    <div className="search-cont">
      <h1 className="search-title">BUSCAR: {oursearch}</h1>
        <div className="search-cards">
          {results.map((result,key)=>{
          return (<div className="search-card" key={`Result ${key}`} onClick={()=>{moviePage(result.id)}}>
            <Card photo={result.poster_path} title={result.title}/>
            <h6 className="search-card-title">{result.title}</h6>
            <Stars data={result.vote_average} />
            </div>)
          })}
        </div>
    </div>
    </>
  }
  
  export default Search;