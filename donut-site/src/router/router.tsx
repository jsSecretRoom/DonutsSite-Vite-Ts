import { createBrowserRouter } from "react-router-dom";
import Autorization from "../components/Authorization/Authorization";
import HomePage from "../components/HomePage/HomePage";
import Layout from "../components/Layout/Layout";
import ErorPage from "../components/ErorPage/ErorPage";
import Shop from "../components/Shop/Shop";
import SetCreator from "../components/SetCreator/SetCreator";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Layout будет отображаться на всех страницах, кроме /login
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/create',
                element: <SetCreator />
            }
        ]
    },
    {
        path: '/login',
        element: <Autorization />
    },
    {
        path: '*', // Перенесен за пределы дочерних маршрутов Layout
        element: <ErorPage /> // Страница ошибки для несуществующих маршрутов
    }
]);