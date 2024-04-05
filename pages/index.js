import React from "react";
// import "../styles/Home.module.css";

function index() {
    return (
        <>
            <div>Home Page Real state</div>
            <div className="mydiv">test</div>
            <div className="mydiv">test</div>
            <div className="mydiv">test</div>
            <style jsx>{`
                .mydiv {
                    width: 100%;
                    height: 300px;
                    background-color: brown;
                    margin-bottom: 2rem;
                }
            `}</style>
        </>
    );
}

export default index;
