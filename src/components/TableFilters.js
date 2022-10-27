import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setListDisplay } from "../actions/list.action";
import { setStableState } from "../actions/stable.action";

const TableFilters = () => {
    const [showStable, setShowStable] = useState(true);
    const [showFavList, setShowFavList] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStableState(showStable));
        dispatch(setListDisplay(showFavList));
    }, [showStable, showFavList]);

    return (
        <div className="table-filters">
            <div className="table-filters-container">
                <div className="stable-checkbox-container">
                    <input
                        type="checkbox"
                        id="stableCoin"
                        defaultChecked={true}
                        onChange={(e) => setShowStable(!showStable)}
                    />
                    <label htmlFor="stableCoin">
                        {showStable ? "Avec Stable coin" : "Sans Stable coin"}
                    </label>
                </div>
                <div
                    className={
                        showFavList ? "no-list-btn" : "no-list-btn active"
                    }
                    onClick={(e) => setShowFavList(false)}
                >
                    <p>Aucune liste</p>
                </div>
                <div
                    className={showFavList ? "fav-list active" : "fav-list"}
                    onClick={(e) => setShowFavList(true)}
                >
                    <p>Liste des favoris</p>
                    <img src="./assets/star-full.svg" alt="icon star" />
                </div>
            </div>
        </div>
    );
};

export default TableFilters;
