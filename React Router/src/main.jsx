import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layout.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import ContactUs from "./Components/contact us/contactUs.jsx";
import User from "./Components/User/User.jsx";
import Github from "./Components/Github/Github.jsx";
import { githubInfoLoader } from "./Components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/User/:userid",
        element: <User />,
      },
      {
        loader: githubInfoLoader,
        path: "/Github",
        element: <Github />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
