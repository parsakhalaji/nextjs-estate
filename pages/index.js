import React from "react";
// import "../styles/Home.module.css";
import HouseCard from "@/components/modules/HouseCard";
import Houses from "@/components/modules/Houses";

function index() {
    return (
        <>
            <div>Home Page Real state</div>
            <div className="mydiv">test</div>
            <div className="mydiv">test</div>
            <div className="mydiv">test</div>
            <Houses />
            <div className="mydiv">test</div>
            <style jsx>{`
                .mydiv {
                    width: 100%;
                    height: 300px;
                    background-color: brown;
                    margin-bottom: 1rem;
                    margin-top: 1rem;
                }
            `}</style>
        </>
    );
}

export default index;
