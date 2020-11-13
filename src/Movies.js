import React from "react"
import propTypes from "prop-types"

function Moives({id,year,title,summary,poster}){
return (
    <div>
        <h4>{id}</h4>
        <h4>{year}</h4>
        <h4>{title}</h4>
        <h4>{summary}</h4>
        <h4>{poster}</h4>

    </div>
)

}

Moives.propTypes={
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Moives;