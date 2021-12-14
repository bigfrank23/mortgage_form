import React from "react";

const ToggleSwitch = ({
  checked,
  label,
  id,
  disabled,
  ariaInvalid,
  ariaLabelledby,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id} className="ToggleSwitch ToggleSwitch_label">
        <span className=" textSize ToggleSwitch_switch">
          <input
            type="checkbox"
            checked={checked}
            id={id}
            className="ToggleSwitch_checkbox"
            disabled={disabled}
            onChange={onChange}
            aria-invalid={ariaInvalid}
            aria-labelledby={ariaLabelledby}
            required
          />
          <span className="ToggleSwitch_slider" />
        </span>
        {label}
      </label>
    </>
  );
};

const Agree = () => {
  const [selected1, setSelected1] = React.useState(
    localStorage.getItem("agree") === "true"
  );

  return (
    <div className="formCheck">
      <ToggleSwitch
        checked={selected1}
        id="agree"
        label="Everything that I have stated in this application is correct to the
            best of my knowledge. I understand that you will retain this
            application whether or not loan is approved."
        onChange={(e) => {
          localStorage.setItem("agree", `${e.target.checked}`);
          setSelected1(e.target.checked);
          console.log(e.target.checked);
        }}
      />
    </div>
  );
};
export default Agree;
