import React, { useState, useEffect } from "react";
import db from "../../data/db.json";
import HouseCard from "@/components/modules/HouseCard";

function AllHouses() {
    const [userSearch, setUserSearch] = useState("");
    const [homes, setHomes] = useState(db.homes.slice(db.homes));
    const [page, setPage] = useState(1);
    const homeCountsInOnePage = 4;

    const userSearchHandler = (e) => {
        setUserSearch(e.target.value);
    };

    useEffect(() => {
        let newHomes = [...db.homes];
        newHomes = newHomes.slice(
            homeCountsInOnePage * page - homeCountsInOnePage,
            homeCountsInOnePage * page
        );
        setHomes(newHomes);
    }, [page]);

    const paginateHandler = (e, targetPage) => {
        e.preventDefault();
        setPage(targetPage);
    };

    return (
        <>
            {/* Search bar */}
            <div className="container mb-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <input
                            onChange={userSearchHandler}
                            type="text"
                            className="form-control "
                            placeholder="Search house ..."
                        />
                    </div>
                </div>
            </div>

            {/* All houses */}
            <div className="container d-flex flex-wrap gap-4 justify-content-center align-items-center">
                {userSearch
                    ? homes
                          .filter((home) => home.title.includes(userSearch))
                          .map((house) => (
                              <HouseCard key={house.id} {...house} />
                          ))
                    : homes.map((house) => (
                          <HouseCard key={house.id} {...house} />
                      ))}
            </div>

            {/* Pagination */}
            <nav className="mt-4 d-flex justify-content-center">
                <ul className="pagination">
                    {/* <li className="page-item">
                        <a className="page-link" href="#">
                            Previous
                        </a>
                    </li> */}
                    {[
                        ...Array(
                            Math.ceil(db.homes.length / homeCountsInOnePage)
                        ).keys(),
                    ]
                        .map((i) => i + 1)
                        .map((eachPage, index) => (
                            <li
                                onClick={(e) => paginateHandler(e, eachPage)}
                                key={index}
                                className="page-item"
                            >
                                <a
                                    className={`page-link ${
                                        eachPage == page ? "active" : ""
                                    }`}
                                    href="#"
                                >
                                    {eachPage}
                                </a>
                            </li>
                        ))}
                    {/* <li className="page-item">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li> */}
                </ul>
            </nav>
        </>
    );
}

export default AllHouses;
