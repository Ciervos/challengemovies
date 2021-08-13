import './style.scss';
import Bar from '../../components/Bar';
import {useLocation} from "react-router-dom";

function Search() {
  const location = useLocation(); 
  const oursearch = location.pathname.split("/")[2];

    return <>
    <Bar/>
    </>
  }
  
  export default Search;