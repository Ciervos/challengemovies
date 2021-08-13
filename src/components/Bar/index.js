import {useState} from 'react';
import {useHistory} from "react-router-dom";
import './style.scss';
import logo from '../../img/tmdb.svg';
import Button from '../../components/Button';
import { Search } from 'react-bootstrap-icons';

function Bar() {
  const [keyword,setKeyword] = useState("");
  const history = useHistory();

  function handleClick(){

    if(keyword.length>0){history.push({
     pathname:  `/search/${keyword}`, 
     })
    }
    }

    return <div className="bar-cont">
   <img className="bar-logo" src={logo}/>

   <div className="bar-searchcont">
    <Search className="bar-searchicon" /> 
    <input className="bar-searchbar" value={keyword} placeholder={"Buscar..."} onChange={(e) => setKeyword(e.target.value)}/>
    
    <Button onClick={handleClick} label={"Buscar"}/>
   </div>

    </div>
  }
  
  export default Bar;