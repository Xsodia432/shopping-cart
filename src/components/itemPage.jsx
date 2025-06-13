import { useOutletContext, useParams, useRouteLoaderData } from "react-router";
import { useState } from "react";
import { storeItems } from "./functionality";

export function ItemPage() {
  const [quantity, setQuantity] = useState(1);
  const setC = useOutletContext();
  const data = useRouteLoaderData("root");
  const { id } = useParams();
  let star = "";

  const itemData = data.find((item) => item.id === parseInt(id));

  for (let i = 1; i <= 5; i++) {
    if (i < Math.round(itemData.rating.rate)) star = star + "★";
    else star = star + "☆";
  }
  return (
    <div className="item-page-container">
      <div className="item-page-content">
        <div className="item-page-img-container">
          <img src={itemData.image} />
        </div>
        <div className="item-page-desc-container">
          <h1>{itemData.title}</h1>
          <p>
            {star} <span>{itemData.rating.count} rating</span>
          </p>
          <p>{itemData.description}</p>
          <p>Price: ${(itemData.price * quantity).toFixed(2)}</p>
          <div className="quantity-container">
            <div>
              <button
                onClick={() =>
                  setQuantity(quantity <= 1 ? quantity : quantity - 1)
                }
              >
                -
              </button>

              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    e.target.value !== "" ? parseInt(e.target.value) : 1
                  )
                }
              />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <div>
              {" "}
              <button
                onClick={() =>
                  storeItems(itemData, setC, itemData.id, quantity)
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
