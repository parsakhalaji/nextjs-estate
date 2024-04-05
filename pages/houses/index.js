import React from "react";
import db from "../../data/db.json";
import HouseCard from "@/components/modules/HouseCard";

function AllHouses() {
    return (
        <>
            <div className="container d-flex flex-wrap gap-4 justify-content-center align-items-center">
                {db.homes.map((house) => (
                    <HouseCard key={house.id} {...house} />
                ))}
            </div>
        </>
    );
}

export default AllHouses;
