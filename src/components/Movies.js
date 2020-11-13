import React from "react"
import propTypes from "prop-types"
import "./Movie.css"

function Moives({id,year,title,summary,small_cover_image,genres}){
return (
    <div className="movie">
        <img src={small_cover_image} alt="title"/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            {genres.map((genre,index)=> (
            <li key={index} className="genres__genre">{genre}</li>
            ))}    
             <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
    </div>
    )
}

Moives.propTypes={
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    small_cover_image: propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired
}

export default Moives;