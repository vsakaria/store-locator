import React from "react";
import PropTypes from "prop-types";

const StoreExtraDetails = ({ status, distance }) => {
  return (
    <div className="col-sm-4 col-md-4 col-lg-2 card extra-details">
      <div className="stand-out-text">{status}</div>
      <div>{distance}</div>
    </div>
  );
};

StoreExtraDetails.propTypes = {
  status: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired
};

export default StoreExtraDetails;
