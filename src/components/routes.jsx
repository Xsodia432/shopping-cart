import { createBrowserRouter } from "react-router";
import { fetchItems } from "./loaders";
import App from "../App";
import { HydratePlace } from "./hydrateComponent";
import { Store } from "./storePage";
import { LandingPage } from "./landingPage";
import { ItemPage } from "./itempage";
import { CheckOutPage } from "./checkOut";
export const routes = createBrowserRouter([
  {
    id: "root",
    path: "",
    element: <App />,
    loader: () => fetchItems().then((val) => val),
    hydrateFallbackElement: <HydratePlace />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "store/item/:id",
        element: <ItemPage />,
      },
      {
        path: "store/checkout",
        element: <CheckOutPage />,
      },
    ],
  },
]);
