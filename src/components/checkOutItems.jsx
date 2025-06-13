import { useEffect, useState } from "react";
import { setQuantityHandler, deleteItemHandler } from "./functionality";

export function CheckOutItems({ val, setC, setCheckoutItem }) {
  const [quantity, setQuantity] = useState(val.quantity);

  useEffect(() => {
    setQuantityHandler(setC, val.id, parseInt(quantity), setCheckoutItem);
  }, [quantity]);

  return (
    <tr>
      <th>
        <input
          type="checkbox"
          checked={val.isSelected}
          onChange={() => {
            const data = JSON.parse(localStorage.getItem("items"));
            const newData = data.map((item) => {
              return item.id === val.id
                ? { ...item, isSelected: !item.isSelected }
                : item;
            });
            localStorage.setItem("items", JSON.stringify(newData));
            setCheckoutItem(newData);
          }}
        />
      </th>
      <td>
        <img src={val.image} />
      </td>
      <td>
        <p>{val.title}</p>
      </td>
      <td>
        <div className="checkout-item-quantity">
          <button
            onClick={() => {
              setQuantity(quantity <= 1 ? quantity : quantity - 1);
            }}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value !== "" ? parseInt(e.target.value) : 1);
            }}
          />
          <button
            className=""
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>
        <p>${val.price}</p>
      </td>
      <td>
        <p>${(val.price * quantity).toFixed(2)}</p>
      </td>
      <td>
        <span
          className="mdi mdi-delete delete-span"
          onClick={() => {
            deleteItemHandler(val.id, setC, setCheckoutItem);
          }}
        ></span>
      </td>
    </tr>
  );
}
