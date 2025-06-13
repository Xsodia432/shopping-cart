import { useState } from "react";
import { Link } from "react-router";
export function ShoppingCart({ cartItems }) {
  const [dropDown, setDropDown] = useState(false);
  const filter = (items) => {
    let total = 0;
    items.forEach((val) => (total += val.price * val.quantity));
    return total;
  };
  return (
    <div className="shopping-overlay">
      <Link to={"/store/checkout"}>
        <span
          className="mdi mdi-cart icon"
          onMouseEnter={() => setDropDown(!dropDown)}
        ></span>
      </Link>

      <div className="cart-quanity">{cartItems ? cartItems.length : 0}</div>
      {dropDown && (
        <div className="cart-container" onMouseLeave={() => setDropDown(false)}>
          {cartItems && (
            <span>
              Items: {cartItems.length} | Subtotal: $
              {filter(cartItems).toFixed(2)}
            </span>
          )}
          <div className="cart-content">
            {cartItems ? (
              cartItems.map((val, index) => {
                return (
                  <Link to={`/store/item/${val.id}`} key={val.id}>
                    <div className="cart-item-content">
                      <div className="cart-item-image">
                        {" "}
                        <img src={val.image} />
                      </div>

                      <div className="cart-item-desc">
                        <p key={index}>{val.title}</p>
                        <p>
                          Qty. {val.quantity} Total. $
                          {(val.quantity * val.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h1 style={({ padding: "10px" }, { textAlign: "center" })}>
                No Items
              </h1>
            )}
          </div>

          {cartItems && <Link to={"/store/checkout"}>Check Out</Link>}
        </div>
      )}
    </div>
  );
}
