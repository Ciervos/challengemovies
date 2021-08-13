import {useState} from 'react';
import './style.scss';
import logo from '../../img/tmdb.svg';
import Button from '../../components/Button';

function Bar() {
  const [keyword,setKeyword] = useState("");

    return <div className="bar-cont">
   <img className="bar-logo" src={logo}/>

   <div className="bar-searchcont">
   <input value={keyword} placeholder={"Buscar..."} onChange={(e) => setKeyword(e.target.value)}/>
   <Button onClick={false} label={"Buscar"}/>
   </div>

    </div>
  }
  
  export default Bar;