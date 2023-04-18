import React from 'react'

/*  export const Movie = (props) => {
    const{_id,name,location,theatre,date,price,count}=props.show
  return (
    <div>
        <p>{props.name}</p>
        <p>{location}</p>
        <p>{theatre}</p>
        <p>{date}</p>
        <p>{price}</p>
        <p>{count}</p>
    </div>
  )
}*/

export const Movie = (props) => {
    const{_id,name,location,theatre,date,price,count}=props.show
  return (
    <div>
        <p>{name}</p>
        <p>{location}</p>
        <p>{theatre}</p>
        <p>{date}</p>
        <p>{price}</p>
        <p>{count}</p>
    </div>
  )
}

export default Movie