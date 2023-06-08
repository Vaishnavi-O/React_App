import React from "react";

const NFAccordians = () => {
  return (
    <div className="nf-faq-accordians">
      <Accordian
        title={"What is Netflix?"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab1"
      />
      <Accordian
        title={"What is Netflix?"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab2"
      />
      <Accordian
        title={"What is Netflix?"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab3"
      />
      <Accordian
        title={"What is Netflix?"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab4"
      />
      <Accordian
        title={"What is Netflix?"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab5"
      />
    </div>
  );
};

const Accordian = ({ title, desc, id }) => {
  return (
    <div className="nf-accordion">
      <input type="checkbox" id={id} />
      <label className="accordion-label" for={id}>
        <span> {title} </span> <i className="fa-solid fa-plus"></i>
      </label>
      <div className="accordion-content">{desc}</div>
    </div>
  );
};

export default NFAccordians