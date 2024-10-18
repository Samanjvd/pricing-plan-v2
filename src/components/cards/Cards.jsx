import React from "react";
import { BsCheck2 } from "react-icons/bs";

export default function cards({ plans }) {
  console.log(plans);
  return (
    <div className="cards-plan">
      {plans.map(({ title, price, date, features }) => {
        return (
          <div className={`card ${title === "Custom" ? "card-custom" : ""}`}>
            <h3 className="title-card">{title}</h3>
            <div className="price-table">
              <span className="price">{price}</span>
              <sub className="date">{date}</sub>
            </div>
            <hr />
            <ul className="card-optionitem">
              {features.map((feature) => {
                console.log(feature);
                return (
                  <li className="option-item">
                    <span>
                      <BsCheck2 style={{ display: "flex" }} />
                    </span>
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>
            <button
              className={`button-pricing ${
                title === "Custom" ? "button-custom" : ""
              }`}
            >
              Get Started
            </button>
          </div>
        );
      })}
    </div>
  );
}
