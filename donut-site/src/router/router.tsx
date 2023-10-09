import { createBrowserRouter } from "react-router-dom";
import Autorization from "../components/Authorization/Authorization";
import HomePage from "../components/HomePage/HomePage";
import Layout from "../components/Layout/Layout";
import ErorPage from "../components/ErorPage/ErorPage";
import Shop from "../components/Shop/Shop";
import SetCreator from "../components/SetCreator/SetCreator";
import Collection from '../components/Collection/Collection';
import RegistrationComponnt from "../components/RegistrationComponnt/RegistrationComponnt";

import Search from "../components/Search/Search";
import SweetsData from "../serverComponents/SweetsData";

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
                ),
                children: [
                    {
                        path: '/shop/:filterName',
                        element: <SweetsData/>
                    }
                ]
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
        path: '/registration',
        element: <RegistrationComponnt />
    },
    {
        path: '*',
        element: <ErorPage />
    }
]);
