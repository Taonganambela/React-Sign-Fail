import {
    createBrowserRouter,
  } from "react-router-dom";
  import Login from "./src/pages/Login";
  import Test from "./src/pages/Test";
  import Dashboard from "./src/pages/Dashboard";
import DocumentUpload from "./src/pages/DocumentUpload";
import PendingDocuments from "./src/pages/PendingDocuments";
import SignaturePad from "./src/pages/SignaturePad";
import Editor from "./src/pages/Editor";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard Component={DocumentUpload}  />,
    },
    {
        path: "/upload",
        element: <Dashboard Component={DocumentUpload}  />,
    },

    {
      path: "/pending",
      element: <Dashboard Component={PendingDocuments}  />,
  },
  {
    path: "/signatures",
    element: <Dashboard Component={SignaturePad}  />,
},
{
  path: "/editor",
  element: <Dashboard Component={Editor}  />,
},
    {
      path: "/test",
      element: <Test />,
    },
  ],{basename:import.meta.env.BASE_URL});
  