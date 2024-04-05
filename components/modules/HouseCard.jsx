import Link from "next/link";
import React from "react";

function HouseCard({ id, title, price }) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
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
            </div>
        </>
    );
}

export default HouseCard;
