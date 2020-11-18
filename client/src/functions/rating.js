import React from "react";
import StarRating from "react-star-ratings";

export const showAverage = (p, styles) => {
    if (p && p.ratings) {
        let ratingsArray = p && p.ratings;
        let total = [];
        let length = ratingsArray.length;
        // console.log("length", length);

        ratingsArray.map((r) => total.push(r.star));
        let totalReduced = total.reduce((p, n) => p + n, 0);
        // console.log("totalReduced", totalReduced);

        let highest = length * 5;
        // console.log("highest", highest);

        let result = (totalReduced * 5) / highest;
        // console.log("result", result);

        return (
            <div className={`${styles}`}>
                <span>
                    <StarRating
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor="red"
                        rating={result}
                        editing={false}
                    />{" "}
                    ({p.ratings.length})
                </span>
            </div>
        );
    }
};
