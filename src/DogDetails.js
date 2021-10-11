import React from "react";
import { Redirect, useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
    const params = useParams();
    const dogNameFromParams = params.name;
    const found = dogs.find(({ name }) => name.toLowerCase() === dogNameFromParams);

    if (found === undefined) return <Redirect to="/dogs"></Redirect>
    return (
        <div>
            <img src={found.src} alt={found.name} />
            <p>Name: {found.name}</p>
            <p>Age: {found.age} years</p>
            <ul>
                {found.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails;