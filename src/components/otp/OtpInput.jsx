import React, { useRef, useState } from "react";
import "./otpInput.css";

function OtpInput({ inputValue = 6 }) {
	const [otpFields, setOtpFields] = useState(new Array(inputValue).fill(""));
	const ref = useRef([]);

	console.log(ref);

	const handleKeyDown = (e, index) => {
		let key = e.key;
		console.log(key);

		const copyOtpValues = [...otpFields];

		if (key === "Backspace") {
			copyOtpValues[index] = "";
			setOtpFields(copyOtpValues);

			if (0 <= index) ref.current[index - 1].focus();
			return;
    }
    if (key === "ArrowRight") {
      ref.current[index+1].focus()
    }
    if (key === "ArrowLeft") {
      ref.current[index - 1].focus();
    }
		if (isNaN(key)) {
			return;
		}
		copyOtpValues[index] = key;
		if (index + 1 < otpFields.length) {
			ref.current[index + 1].focus();
		}
		setOtpFields(copyOtpValues);
		console.log(copyOtpValues);
	};
	return (
		<>
			<div className="container">
				{otpFields.map((curElement, index) => {
					return (
						<input
							type="text"
							key={index}
							ref={(curInput) => (ref.current[index] = curInput)}
							value={curElement}
							onKeyDown={(e) => handleKeyDown(e, index)}
						/>
					);
				})}
			</div>
		</>
	);
}

export default OtpInput;
