import { useState } from "react";
import { CheckOutItems } from "./checkOutItems";
import { useOutletContext } from "react-router";
export function CheckOutPage() {
  const setC = useOutletContext();
  const totalItems = (items) => {
    let total = 0;
    items.forEach((val) => {
      if (val.isSelected) total += val.price * val.quantity;
    });
    return total;
  };
  const [cartData, setcartData] = useState(
    JSON.parse(localStorage.getItem("items"))
  );

  return (
    <div className="checkout-container">
      {cartData ? (
        <table className="table-checkout">
          <thead>
            <tr>
              <td colSpan={"5"}>
                <button>Pay Now</button>
              </td>
              <td colSpan={"5"}>
                <p>Total: ${totalItems(cartData).toFixed(2)}</p>
              </td>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onClick={() => {
                    const newData = cartData.map((item) => {
                      return { ...item, isSelected: !item.isSelected };
                    });
                    setcartData(newData);
                    localStorage.setItem("items", JSON.stringify(newData));
                  }}
                />
              </th>
              <th></th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((val) => {
              return (
                <CheckOutItems
                  key={val.id}
                  val={val}
                  setC={setC}
                  setCheckoutItem={setcartData}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>Buy some items</h1>
      )}
    </div>
  );
}
