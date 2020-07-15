import React from "react";
//import css when made

const Card = (props) => {
const {date, explanation, image, title} = props

    return(
        <div className='card-container'>
            <h3>{date}</h3>
            <img src={image}/>
            <div className='details'>
                <h3>{title}</h3>
                <p>{explanation}</p>
            </div>
        </div>
    )
}

export default Card