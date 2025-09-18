import React, { useMemo, useState } from "react";

function ExpensiveComponent() {
	const sum = () => {
		console.log("calculating sum......");

		let i = 0;
		for (let i = 0; i < 1000000000; i++) {
			i = i + 1;
			console.log("i", i);
		}

		return i;
	};
	// const total = sum();
	const total = useMemo(() => sum(), []);
	return <p>Sum:{total}</p>;
}

function UseMemoHook() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>UseMemoHook</h1>
			<div className="btn-section">
				<h2>Expensive Calculation:</h2>
				{/* <ExpensiveComponent /> */}
				<button className="btn-increment" onClick={() => setCount(count + 1)}>
					INCREMENT
				</button>
				<p>{count}</p>
			</div>
		</div>
	);
}

export default UseMemoHook;
