import React from "react";
//import css when made

const Card = (props) => {
const {date, explanation, image, title} = props

function isFileImage(file){
    return file && file.includes('.jpg')
}

    return(
        <div className='card-container'>
            <h3>{date}</h3>
            {
                isFileImage(image)
                ? <img src={image}/>
                : <iframe width="420" height="315"src={image}></iframe>
            }
            
            <div className='details'>
                <h3>{title}</h3>
                <p>{explanation}</p>
            </div>
        </div>
    )
}

export default Card;