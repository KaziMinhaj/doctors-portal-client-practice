import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InfoCard from "../InfoCard/InfoCard";

const infoData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit",
    description: "Brooklyn, NY 1003, USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+88007569338596",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infoData.map((info) => (
          <InfoCard info={info}> </InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
