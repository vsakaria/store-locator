import React from "react";
import PropTypes from "prop-types";

const StoreContact = ({ contact, name, type, code }) => {
  const link = `https://stores.sainsburys.co.uk/${code}/${name
    .toLowerCase()
    .split(" ")
    .join("-")}`;

  return (
    <div className="col-sm-8 col-md-6 col-lg-3 card contact">
      <a
        className="store-name"
        href={link}
        aria-label="Click here to view the store's page"
      >
        {name}
      </a>
      <div className="capitalise-first-letter">{type}</div>
      <div className="address">
        <div>{contact.address1}</div>
        <div>{contact.address2}</div>
        <div>{contact.city}</div>
        <div>{contact.post_code}</div>
      </div>
      <div className="hidden-sm hidden-md">
        <div>Contact</div>
        <div>{contact.telephone}</div>
      </div>
    </div>
  );
};

StoreContact.propTypes = {
  contact: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

export default StoreContact;
