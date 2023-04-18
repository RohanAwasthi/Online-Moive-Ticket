import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Movie } from './Movie';
const url='/api/user/';
const fetchhandler=async()=>{
    return await axios.get(url+'show').then((res)=>res.data);

};

export const Movies = () => {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        fetchhandler().then((data)=>setMovie(data))
    },[])
    console.log(movie);
  return (
    <div>movie</div>
  )
      
     
  
}

export default Movies
