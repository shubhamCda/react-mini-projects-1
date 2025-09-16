import React, { useEffect, useState } from "react";
import "./progressBar.css";

function ProgressBar() {
	const [bar, setBar] = useState(20);

	// useEffect(() => {
	// 	const interval = setTimeout(() => {
	// 		setBar((prev) => {
	// 			if (prev >= 100) {
	// 				clearInterval(interval);
	// 			}
	// 			return Math.min(prev + 5, 100);
	// 		});
	// 	}, 150);
	// 	return () => clearInterval(interval);
	// });

	return (
		<div className="box">
			<div className="container">
				<div
					style={{ width: `${bar > 100 ? 100 : bar}%` }}
					// style={{ transform: `translateX(${bar - 100}%)` }}
					className="progress-bar"
				>
					<p>HTML5</p>
        </div>
			</div>
        <div className="set-bar">
          <input type="number" value={bar} onChange={(e) => setBar(e.target.value)}/>
        </div>
		</div>
	);
}

export default ProgressBar;
