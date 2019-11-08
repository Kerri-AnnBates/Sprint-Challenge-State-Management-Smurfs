import React from 'react'

const Card = (props) => {
    const { smurf } = props;

    return (
        <div className="card">
            <h2>{smurf.name}</h2>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>
    )
}

export default Card;