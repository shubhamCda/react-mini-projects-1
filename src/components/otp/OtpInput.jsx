import React, { useState } from 'react'
import "./otpInput.css";

function OtpInput({ inputValue = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(inputValue).fill(""));
  return (
    <>
      <div className="container">
        {
          otpFields.map((curElement, index) => {
            return (
              <input type="number" key={index} />
            )
          })
        }
      </div>
    </>
  )
}

export default OtpInput