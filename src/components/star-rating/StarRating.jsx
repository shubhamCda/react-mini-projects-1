import React, { useState } from "react";

import "./starRating.css";

function StarRating({ rating = 5 }) {
	const [starValue, setStarValue] = useState();
	const [hoverValue, setHoverValue] = useState();

	console.log("starValue", starValue);
	console.log("hoverValue", hoverValue);

	return (
		<div className="container">
			{new Array(rating).fill(0).map((curStar, index) => {
				return (
					<span
						className={(hoverValue === 0 && starValue > index) || index<hoverValue ? "gold" : ""}
						key={index}
						onClick={() => setStarValue(index+1)}
            onMouseEnter={() => setHoverValue(index+1)}
            onMouseLeave={() => setHoverValue(0)}
					>
						&#9733;
					</span>
				);
			})}
		</div>
	);
}

export default StarRating;
