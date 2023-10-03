import { createBrowserRouter } from "react-router-dom";
import Autorization from "../components/Authorization/Authorization";
import HomePage from "../components/HomePage/HomePage";
import Layout from "../components/Layout/Layout";
import ErorPage from "../components/ErorPage/ErorPage";
import Shop from "../components/Shop/Shop";
import SetCreator from "../components/SetCreator/SetCreator";
import Collection from '../components/Collection/Collection'
import Search from "../components/Search/Search";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/shop',
                element: (
                    <>
                        <Search />
                        <Shop />
                    </>
                )
            },
            {
                path: '/create',
                element: <SetCreator />
            },
            {
                path: '/collection/:collectionName',
                element: (
                    <>
                        <Search />
                        <Collection />
                    </>
                )
            }
        ]
    },
    {
        path: '/login',
        element: <Autorization />
    },
    {
        path: '*',
        element: <ErorPage />
    }
]);
