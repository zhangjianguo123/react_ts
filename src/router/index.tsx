import { RouteObject } from "react-router-dom";
import { lazy } from 'react'
const Detail = lazy(() => import('../pages/Detail'))
const Home = lazy(() => import('../pages/Home/index'))
const Login = lazy(() => import('../pages/Login/index'))

const router: RouteObject[] = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path:'/home',
        element: <Home/>
    },
    {
        path: '/detail',
        element: <Detail></Detail>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]

export default router