import React ,{useState,useEffect} from 'react';
import SearchAll from "../components/SearchAll";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import SearchFiltered from '../components/SearchFiltered';

const Home = () => {
    const [keyword, setKeyword] = useState("")

   
  return (
    <div style={{width:'100%',
                 backgroundColor:'#eaf6f6', 
                 height:'100vh'
                 }}>
        <Header keyword={keyword} setKeyword={setKeyword}/>
        {keyword.length == 0 && <SearchAll setKeyword={setKeyword} keyword={keyword}/>}
        {keyword.length > 0 && <SearchFiltered setKeyword={setKeyword}  keyword={keyword}/>}
        
    </div>
  )
}

export default Home


