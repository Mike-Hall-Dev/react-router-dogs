import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
    return (
        <div>
            <h1>Check out all these doggos</h1>
            <div>
                {dogs.map(dog => (
                    <div key={dog.name}>
                        <img src={dog.src} alt={dog.name} />
                        <h4><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;