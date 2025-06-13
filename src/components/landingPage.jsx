import { useRouteLoaderData } from "react-router";
import { Image } from "./image";
import { BestSeller } from "./bestSellerComponent";
export function LandingPage() {
  const data = useRouteLoaderData("root");

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
