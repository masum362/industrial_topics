import { createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"",
                element:<div>HOme</div>
            },
            {
                path:"/login",
                element:<Login></Login>,
            },
            {
                path:"/register",
                element:<Register></Register>,
            }

        ]
    }
])