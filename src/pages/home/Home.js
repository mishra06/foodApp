import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/header/Header';
import Exploremenu from '../../components/exploreMenu/Exploremenu';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';
import AppDownload from '../../components/app-download/AppDownload';


const Home = () => {

  const [category , setCategory] = useState("all");

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home
