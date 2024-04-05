import { useRouter } from "next/router";
import React from "react";
import db from "../../data/db.json";

function SingleHouse() {
    const route = useRouter();
    // console.log(route.query.houseID);
    // console.log(db.homes);

    const targetHouse = db.homes.find(
        (home) => home.id === route.query.houseID
    );
    console.log(targetHouse);

    return (
        <>
        <div>sdf</div>
        <img src="/images/bg.jpg" alt="" />
            {/* <div className="card" style={{ width: "100%" }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        {id}
                    </h6>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <hr />
                    <p className="card-text">
                        <strong>{price},000$</strong>
                    </p>
                    <Link href={`/houses/${id}`} className="card-link">
                        Details
                    </Link>
                </div>
            </div> */}
        </>
    );
}

export default SingleHouse;
