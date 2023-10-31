import { createBrowserRouter } from "react-router-dom";
import Autorization from "../components/Authorization/Authorization";
import HomePage from "../Pages/HomePage/HomePage";
import Layout from "../components/Layout/Layout";
import ErorPage from "../Pages/ErorPage/ErorPage";
import Shop from "../Pages/Shop/Shop";
import SetCreator from "../components/SetCreator/SetCreator";
import Collection from '../components/Collection/Collection';
import RegistrationComponnt from "../components/RegistrationComponnt/RegistrationComponnt";
import AboutProductPage from "../components/AboutProductPage/AboutProductPage";

import Search from "../components/Search/Search";

import AboutUs from "../Pages/AboutUs/AboutUs";
import Allcategories from "../Pages/Allcategories/Allcategories";
import Contacts from "../Pages/Contacts/Contacts";
import Cooperation from "../Pages/Cooperation/Cooperation";
import Franchising from "../Pages/Franchising/Franchising";
import Rental from "../Pages/Rental/Rental";
import SellonDivine from "../Pages/SellonDivine/SellonDivine";
import Terms from "../Pages/Terms/Terms";
import Vacancies from "../Pages/Vacancies/Vacancies";

import ModalBag from "../components/ModalBag/ModalBag";
import ModalSpeciallOrder from "../components/ModalSpeciallOrder/ModalSpeciallOrder";
import ModalOrderSucess from "../components/ModalOrderSucess/ModalOrderSucess";

import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import Sidebar from "../components/Sidebar/Sidebar";
import CollectionChapter from "../components/CollectionChapter/CollectionChapter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                
            },
            {
                path: '/shop',
                element: (
                    <>
                        <Search />
                        <ModalBag/>
                        <Shop />
                    </>
                ),
                children: [
                    {
                        path: '/shop/:filterName',
                        element: (
                            <>
                                <Sidebar/>
                                <CollectionChapter/>
                            </>
                        ), children: [
                            {
                                
                            }
                        ]
                    }
                ]

            },
            {
                path: '/create',
                element: 
                <>
                    <SetCreator />
                    <ModalSpeciallOrder/>
                </> 
            },
            {
                path: '/collection/:collectionName',
                element: (
                    <>
                        <Collection />
                    </>
                )
            },
            {
                path: '/about_product/:collectionName/:itemName',
                element: (
                    <>
                        
                        <AboutProductPage />
                    </>
                )

            },
            {
                path: '/checkout',
                
                element: (
                    <>
                        <CheckoutPage />
                        <ModalOrderSucess/>
                    </>
                )
            },
            {
                path: '/AboutUs',
                element: <AboutUs />
            },
            {
                path: '/Terms',
                element: <Terms />
            },
            {
                path: '/Vacancies',
                element: <Vacancies />
            },
            {
                path: '/Contacts',
                element: <Contacts />
            },
            {
                path: '/Allcategories',
                element: <Allcategories />
            },
            {
                path: '/Cooperation',
                element: <Cooperation />
            },
            {
                path: '/Franchising',
                element: <Franchising />
            },
            {
                path: '/Rental',
                element: <Rental />
            },
            {
                path: '/SellonDivine',
                element: <SellonDivine />
            },
            {
                path: '*',
                element: <ErorPage />
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
