import React from 'react';
import Search from "../components/Search";
import Header from "../components/Header";

const Home = () => {
  return (
    <div style={{width:'100%',
                 backgroundColor:'#eaf6f6', 
                 height:'100vh'
                 }}>
        <Header/>
        <Search/> 
    </div>
  )
}

export default Home


