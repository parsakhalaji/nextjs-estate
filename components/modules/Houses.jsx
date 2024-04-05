import React from "react";
import db from "../../data/db.json";
import HouseCard from "./HouseCard";

function Houses() {
    return (
        <div className="container d-flex flex-wrap gap-4 justify-content-center align-items-center">
            {db.homes.slice(0,6).map((house) => (
                <HouseCard key={house.id} {...house} />
            ))}
        </div>
    );
}

export default Houses;
