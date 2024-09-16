import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<div>Error</div>,
        children:[
            {
                path:"",
                element:<Home />

            },{
                path:"/about",
                element:<About />
            }
        ]
    }
])