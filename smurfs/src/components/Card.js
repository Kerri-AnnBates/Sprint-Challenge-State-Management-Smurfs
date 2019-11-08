import React from 'react'

const Card = (props) => {
    const { smurf } = props;

    return (
        <div className="card">
            <h2>{smurf.name}</h2>
            <p><span>Age:</span> {smurf.age}yrs. old</p>
            <p><span>Height:</span> {smurf.height} tall</p>
        </div>
    )
}

export default Card;