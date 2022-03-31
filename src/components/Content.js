import React, { useState } from "react";
import "./Content.css";
import Data from "../Data.js";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

export default function Content() {
  const [slideIndex, setSlideIndex] = useState(1);
  const upSlide = () => {
    if (slideIndex !== Data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Data.length) {
      setSlideIndex(1);
    }
    console.log({ slideIndex });
  };
  const donwSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Data.length);
    }
    console.log({ slideIndex });
  };

  return (
    <div className="Content">
      <br />
      <div className="items">My Cart (3 items)</div>
      <br />
      {Data.map((obj, index) => {
        return (
          <>
            <div className="element" key={obj.id}>
              <img src={`images/img${index + 1}.webp`} alt="" />
              <div className="element_section">
                <div className="element_title">{obj.name}</div>
                <div className="element_info">
                  {obj.brand}
                  <br />
                  {obj.color}
                </div>

                <div className="element_price">{obj.price}</div>
              </div>
            </div>
            <hr />
          </>
        );
      })}
      <div className="buttons">
        <div className="button_edit">
          <button>Edit Cart</button>
        </div>
        <div className="button_checkout">
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
