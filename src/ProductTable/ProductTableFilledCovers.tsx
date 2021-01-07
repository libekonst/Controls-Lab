import React from "react";
import "./ProductTable.css";
import "./ProductTableFilledCovers.css";
import { PlusIcon } from "./PlusIcon";

export function ProductTableFilledCovers() {
  const handleClick = () => alert("clicked");

  return (
    <div className="ProductTable">
      <div className="ProductTable__Row">
        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>
        <div className="ProductTable_Column_Title">
          Spin functional ethnic diplomat performer
        </div>
        <div className="ProductTable_Column_Covers">
          <div className="ProductTable__FilledCoverItem--Header">Aviation</div>
          <div className="ProductTable__FilledCoverItem">
            <PlusIcon />
            Wine arrangement
          </div>
          <div className="ProductTable__FilledCoverItem">
            <PlusIcon />
            Stretch lesson
          </div>
          <div className="ProductTable__FilledCoverItem">
            <PlusIcon />
            Precede performer
          </div>
          <div
            className="ProductTable__FilledCoverItem--Link"
            onClick={handleClick}
          >
            See Details
          </div>
        </div>
        <div className="ProductTable_Column_PriceButton">127,09 €</div>
      </div>

      <div className="ProductTable__Row">
        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>
        <div className="ProductTable_Column_Title">
          Spin functional ethnic diplomat performer
        </div>
        <div className="ProductTable_Column_Covers">
          <div className="ProductTable__FilledCoverItem--Header">Aviation</div>
          <div
            className="ProductTable__FilledCoverItem--Link"
            onClick={handleClick}
          >
            See Details
          </div>
        </div>
        <div className="ProductTable_Column_PriceButton">127,09 €</div>
      </div>

      <div className="ProductTable__Row">
        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>
        <div className="ProductTable_Column_Title">
          Spin functional ethnic diplomat performer
        </div>
        <div className="ProductTable_Column_Covers">
          <div className="ProductTable__FilledCoverItem--Header">Aviation</div>
          <div className="ProductTable__FilledCoverItem">Precede performer</div>
          <div
            className="ProductTable__FilledCoverItem--Link"
            onClick={handleClick}
          >
            See Details
          </div>
        </div>
        <div className="ProductTable_Column_PriceButton">127,09 €</div>
      </div>

      <div className="ProductTable__Row">
        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>
        <div className="ProductTable_Column_Title">
          Spin functional ethnic diplomat performer
        </div>
        <div className="ProductTable_Column_Covers">
          <div className="ProductTable__FilledCoverItem--Header">Aviation</div>
          <div className="ProductTable__FilledCoverItem">Wine arrangement</div>
          <div className="ProductTable__FilledCoverItem">Precede performer</div>
          <div
            className="ProductTable__FilledCoverItem--Link"
            onClick={handleClick}
          >
            See Details
          </div>
        </div>
        <div className="ProductTable_Column_PriceButton">127,09 €</div>
      </div>
    </div>
  );
}
