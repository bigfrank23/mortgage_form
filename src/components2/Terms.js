import React from 'react'

export default function Terms() {
    const handleChange = (e) => {
      const { value } = e.target;
      localStorage.setItem("termsCheck", `${e.target.value}`);
      console.log(value);
    };
    return (
      <div>
        <select className="selectInput2" onChange={handleChange} required>
          <option value="" selected hidden>
            Please Select
          </option>
          <option value="1 year">1 year</option>
          <option value="2 years">2 years</option>
          <option value="3 years">3 years</option>
        </select>
      </div>
    );
}
