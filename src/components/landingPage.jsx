import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router";
import { Image } from "./image";
import { BestSeller } from "./bestSellerComponent";
export function LandingPage() {
  const data = useRouteLoaderData("root");
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(
    <Image key={data[count].id} img={data[count].image} />
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count === 5 ? 0 : count + 1);
      setImage(<Image key={data[count].id} img={data[count].image} />);
    }, 5000);
    timeout;
    return timeout.clearTimeout;
  }, [count]);
  return (
    <>
      {" "}
      <section className="main-page-content">
        <div>
          <h1>Best Seller</h1>
          <div>
            <BestSeller images={data} />
          </div>
        </div>
      </section>
    </>
  );
}
