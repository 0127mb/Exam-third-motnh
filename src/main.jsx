import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.module.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Email from "./components/Email.jsx";
import Check from "./components/Check.jsx";
import Withemail from "./components/Withemail.jsx";
import Createpassword from "./components/Createpassword.jsx";
import Enter from "./components/Enter.jsx";
import Enterwithemail from "./components/Enterwithemail.jsx";
import Restart from "./components/Restart.jsx";
import Build from "./components/Build.jsx";
import Buildwithemail from "./components/Buildwithemail.jsx";
import Passwith from "./components/Passwith.jsx";
import Passwithemail from "./components/Passwithemail.jsx";
import Asosiy from "./Features/main/Asosiy.jsx";
import Reyting from "./Features/reyting/Reyting.jsx";
import Game from "./Features/Game/Game.jsx";
import Login from "./components/Login.jsx";
import Root from "./Features/reyting/Components/Root.jsx";
import Modern from "./Features/News/Modern.jsx";
import Newsdetail from "./Features/Newsdetail/Newsdetail.jsx";
import ROles from "./Features/Roles/ROles.jsx";
import Courses from "./Features/Courses/Courses.jsx";
import Coursedetail from "./Features/Coursedetail/Coursedetail.jsx";
import Buy from "./Features/Coursedetail/Components/Buy.jsx";
import Waiting from "./Features/Coursedetail/Components/Waiting.jsx";
import Buyed from "./Features/Coursedetail/Components/Buyed.jsx";
import Errorpage from "./Features/Coursedetail/Components/Error.jsx";
import Video from "./Features/Video/VIdeo.jsx";
import Award from "./Features/Sertifikat/Components/Award.jsx";
import Sertifikat from "./Features/Sertifikat/Sertifikat.jsx";
import Report from "./Features/Roles/Report.jsx";
import Rereportdetail from "./Features/Roles/Rereportdetail.jsx";
import Send from "./Features/Roles/Send.jsx";
import Libary from "./Features/src/Libary.jsx";
import LIbarydetail from "./Features/Libarydetail/LIbarydetail.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/email", element: <Email /> },
      { path: "/check", element: <Check /> },
      { path: "/withemail", element: <Withemail /> },
      { path: "/create", element: <Createpassword /> },
      { path: "/enter", element: <Enter /> },
      { path: "/enterwithemail", element: <Enterwithemail /> },
      { path: "/restart", element: <Restart /> },
      { path: "/build", element: <Build /> },
      { path: "/buildwithemail", element: <Buildwithemail /> },
      { path: "/pass", element: <Passwith /> },
      { path: "/passemail", element: <Passwithemail /> },
      { path: "/main", element: <Asosiy /> },
      { path: "/reyting", element: <Reyting /> },
      { path: "/game", element: <Game /> },
      { path: "/news", element: <Modern></Modern> },
      { path: "/morenews", element: <Newsdetail></Newsdetail> },
      { path: "/roles", element: <ROles></ROles> },
      { path: "course", element: <Courses></Courses> },
      { path: "/detailofcoursepage", element: <Coursedetail></Coursedetail> },
      { path: "buy", element: <Buy></Buy> },
      { path: "wait", element: <Waiting></Waiting> },
      { path: "/buyed", element: <Buyed></Buyed> },
      { path: "/error", element: <Errorpage></Errorpage> },
      { path: "/video", element: <Video></Video> },
      { path: "/award", element: <Award></Award> },
      { path: "/sertifikat", element: <Sertifikat></Sertifikat> },
      { path: "/report", element: <Report></Report> },
      { path: "for", element: <Rereportdetail></Rereportdetail> },
      { path: "send", element: <Send></Send> },
      { path: "/libary", element: <Libary></Libary> },
      {  path:'/detailoflibary',element: <LIbarydetail></LIbarydetail>
        }
    ],
  },
  { path: "/login", element: <Login /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
