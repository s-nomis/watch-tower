import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StarIcon = ({ coinId }) => {
    const [like, setLike] = useState(false);
    const showFavList = useSelector((state) => state.listReducer);
    const showStable = useSelector((state) => state.stableReducer);

    useEffect(() => {
        if (window.localStorage.coinList) {
            let favList = window.localStorage.coinList.split(",");
            if (favList.includes(coinId)) {
                setLike(true);
            } else {
                setLike(false);
            }
        }
    }, [showStable, showFavList]);

    const idChecker = (id) => {
        let favList = null;

        if (window.localStorage.coinList) {
            favList = window.localStorage.coinList.split(",");
        }

        if (favList) {
            if (favList.includes(id)) {
                window.localStorage.coinList = favList.filter(
                    (coin) => coin !== id
                );
                setLike(false);
            } else {
                window.localStorage.coinList = [...favList, coinId];
                setLike(true);
            }
        } else {
            window.localStorage.coinList = coinId;
            setLike(true);
        }
    };

    return (
        <img
            onClick={(e) => idChecker(coinId)}
            src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
            alt="icon-star"
        />
    );
};

export default StarIcon;
