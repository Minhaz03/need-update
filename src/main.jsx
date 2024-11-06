import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
// import HeroBanner from './Components/HeroBanner/HeroBanner.jsx';
import GadgetDetail from "./Components/GadgetDetail/GadgetDetail.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
// import Dashboard from "./Components/Dashboard/Dashboard.jsx";
// import AddToCart from "./Components/AddToCart/AddToCart.jsx";
import SelectedGadgets from "./Components/SelectedGadgets/SelectedGadgets.jsx";
import FeedbackReviews from "./Components/FeedbackReviews/FeedbackReviews.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      // {
      //   path: 'dashboard',
      //   element: <Dashboard></Dashboard>
      // },
      {
        path: "/gadgets/:product_id",
        element: <GadgetDetail></GadgetDetail>,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "selectedGadgets",
        element: <SelectedGadgets></SelectedGadgets>,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "feedbackReviews",
        element: <FeedbackReviews></FeedbackReviews>,
      },
      // {
      //   path: '/addCart',
      //   element: <AddToCart></AddToCart>
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    <ToastContainer
      position={"top-center"}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      autoClose={1000}
    />
  </StrictMode>
);
