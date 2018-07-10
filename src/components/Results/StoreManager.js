import React from "react";
import PropTypes from "prop-types";

const StoreManager = ({ manager, telephone }) => {
  return (
    <div className="hidden-sm card col-md-2 col-lg-3">
      <div className="hidden-sm hidden-lg telephone">
        <div className="heading">Contact</div>
        <div>{telephone}</div>
      </div>

      <div className="staff">
        <div className="heading">Manager</div>
        <div>{manager}</div>
      </div>
    </div>
  );
};

StoreManager.propTypes = {
  manager: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired
};

export default StoreManager;
