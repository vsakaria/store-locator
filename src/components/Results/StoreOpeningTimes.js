import React from "react";
import PropTypes from "prop-types";

const StoreOpeningTimes = ({ times }) => {
  const days = Object.keys(times);
  return (
    <section className="hidden-sm hidden-md card col-lg-4">
      <div className="opening heading">Opening Times</div>
      {days.map(day => {
        return (
          <div className="row" key={day}>
            <span className="col-lg-3 capitalise-first-letter">{day}</span>
            <span className="col-lg-4">
              {times[day].start_time} - {times[day].end_time}
            </span>
          </div>
        );
      })}
    </section>
  );
};

StoreOpeningTimes.propTypes = {
  times: PropTypes.object.isRequired
};

export default StoreOpeningTimes;
