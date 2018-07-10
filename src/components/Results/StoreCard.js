import React from "react";
import PropTypes from "prop-types";
import StoreContact from "./StoreContact";
import StoreManager from "./StoreManager";
import StoreOpeningTimes from "./StoreOpeningTimes";
import StoreExtraDetails from "./StoreExtraDetails";

const StoreCard = ({
  status,
  distance,
  name,
  type,
  code,
  contact,
  openingTime
}) => {
  return (
    <section className="store-card">
      <StoreContact contact={contact} name={name} type={type} code={code} />
      <StoreManager manager={contact.manager} telephone={contact.telephone} />
      <StoreOpeningTimes times={openingTime} />
      <StoreExtraDetails status={status} distance={distance} />
    </section>
  );
};
StoreCard.propTypes = {
  status: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  openingTime: PropTypes.object.isRequired
};

export default StoreCard;
