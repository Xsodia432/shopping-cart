import { useState } from "react";
import { Link } from "react-router";
import { ShoppingCart } from "./shoppingcart";

export function Nav({ currentPage, setCurrentPage, cartItems }) {
  return (
    <>
      {" "}
      <div className="nav-container">
        <nav>
          <div>
            <h1 onClick={() => setCurrentPage("/")}>
              {currentPage !== "/" ? (
                <Link to="/">EZ | Shop</Link>
              ) : (
                "EZ | Shop"
              )}
            </h1>
            <div>
              <h1 onClick={() => setCurrentPage("/store")}>
                {currentPage !== "/store" ? (
                  <Link to="/store">Shop Now</Link>
                ) : (
                  "Shop Now"
                )}
              </h1>
              <ShoppingCart cartItems={cartItems} />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
