import {
  Link,
  useOutletContext,
  useRouteLoaderData,
  Outlet,
} from "react-router";
import { useEffect, useState } from "react";

export function Store() {
  const setC = useOutletContext();
  const data = useRouteLoaderData("root");

  return (
    <div className="shop-container">
      {data.map((val) => (
        <Link to={`item/${val.id}`} key={val.id}>
          {ItemsData(val)}
        </Link>
      ))}
    </div>
  );
}
function ItemsData(val) {
  return (
    <div key={val.id} className="items-container">
      <div className="img-container-store-page">
        <img src={val.image} />
      </div>
      <div className="desc-container-store">
        {" "}
        <p className="ellipsis">{val.title}</p>
        <p>Price: ${val.price}</p>
      </div>
    </div>
  );
}
