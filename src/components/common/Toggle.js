import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ description, toggleHandler }) => {
  const onChange = event => {
    toggleHandler(event.target.checked);
  };

  return (
    <div>
      <input type="checkbox" className="toggle_switch" onChange={onChange} />
      <span className="toggle_description">{description}</span>
    </div>
  );
};

Toggle.propTypes = {
  toggleHandler: PropTypes.func,
  description: PropTypes.string
};

export default Toggle;
