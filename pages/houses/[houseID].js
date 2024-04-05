import { useRouter } from "next/router";
import React from "react";
import db from "../../data/db.json";
import Link from "next/link";

function SingleHouse() {
    const route = useRouter();

    const targetHome =
        db.homes.find((home) => home.id == route.query.houseID) || {};

    const backBtnHandler = () => {
        route.back();
    };

    return (
        <>
            <div className="card p-5 text-center" style={{ width: "100%" }}>
                <div className="card-body">
                    <h5 className="card-title mb-3">{targetHome.title}</h5>
                    <h6 className="card-subtitle mb-5 text-body-secondary">
                        {targetHome.id}
                    </h6>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <hr />
                    <p className="card-text">
                        <strong>{targetHome.price},000$</strong>
                    </p>
                    <button
                        onClick={backBtnHandler}
                        className="btn btn-primary text-light"
                    >
                        Back
                    </button>
                </div>
            </div>
            <style jsx>{`
                * {
                    font-size: 1.1em;
                }
            `}</style>
        </>
    );
}

export default SingleHouse;
