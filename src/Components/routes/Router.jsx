import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Service from "../Pages/Home/Service/Service";
import Blog from "../Pages/Blog/Blog";
import SignUp from "../Pages/register/SignUp";
import Login from "../Pages/register/Login";
import Checkout from "../Pages/Checkout/Checkout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/services',
            element: <Service></Service>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/signUp',
            element: <SignUp></SignUp>
        },
        {
            path:'/checkout/:id',
            element: <Checkout></Checkout>,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    },
  ]);

export default router;