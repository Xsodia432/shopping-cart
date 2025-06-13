import { useState } from "react";
import { Link } from "react-router";

export function BestSeller({ images }) {
  const image = [];
  for (let i = 0; i <= 5; i++) {
    image.push(images[i]);
  }
  return (
    <>
      <div className="best-seller-container">
        {image.map((val) => (
          <Link to={`/store/item/${val.id}`} key={val.id}>
            <img src={val.image} />
          </Link>
        ))}
      </div>
    </>
  );
}
